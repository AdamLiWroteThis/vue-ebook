<template>
  <div class="ebook-reader">
    <div id="read"></div>
    <div
      class="ebook-reader-mask"
      @click="onMaskClick"
      @touchmove="move"
      @touchend="moveEnd"
      @mousedown.left="onMouseEnter"
      @mousemove.left="onMouseMove"
      @mouseup.left="onMouseEnd"
    ></div>
  </div>
</template>

<script>
import Epub from "epubjs";
import { ebookMixin } from "../../utils/mixin";
import {
  getFontFamily,
  getFontSize,
  getTheme,
  saveFontFamily,
  saveTheme,
  getLocation
} from "../../utils/localStorage";
import { flatten } from "../../utils/book";
import { getLocalForage } from "@/utils/localForage";

global.ePub = Epub;

export default {
  name: "EbookReader",
  components: {},
  mixins: [ebookMixin],
  mounted() {
    const books = this.$route.params.fileName.split("|");
    const fileName = books[1];
    console.log(fileName);
    getLocalForage(fileName, (err, blob) => {
      if (!err && blob) {
        console.log("找到离线缓存电子书");
        this.setFileName(books.join("/")).then(() => {
          this.initEpub(blob);
        });
      } else {
        console.log("在线获取电子书");
        this.setFileName(books.join("/")).then(() => {
          // const url = process.env.VUE_APP_RES_URL + '/epub/' + this.fileName + '.epub'
          const url =
            process.env.VUE_APP_RES_URL +
            "/epub/" +
            this.fileName +
            "/OEBPS/content.opf";
          console.log(url);
          this.initEpub(url);
        });
      }
    });
  },
  methods: {
    initEpub(url) {
      this.book = new Epub(url);

      this.setCurrentBook(this.book);
      this.initRendition();
      // this.initGesture()
      this.parseBook();
      this.currentBook.ready
        .then(() => {
          return this.book.locations.generate(
            750 * (window.innerWidth / 375) * (getFontSize(this.fileName) / 16)
          );
        })
        .then(locations => {
          this.setBookAvailable(true);
          this.refreshLocation();
        });
    },
    initFontFamily() {
      const font = getFontFamily(this.fileName);
      if (!font) {
        saveFontFamily(this.fileName, this.defaultFontFamily);
      } else {
        this.currentBook.rendition.themes.font(font);
        this.setDefaultFontFamily(font);
      }
    },
    initFontSize() {
      const fontSize = getFontSize(this.fileName);
      if (!fontSize) {
        saveFontFamily(this.fileName, this.defaultFontFamily);
      } else {
        this.currentBook.rendition.themes.fontSize(fontSize);
        this.setDefaultFontSize(fontSize);
      }
    },
    initGesture() {
      this.rendition.on("touchstart", event => {
        this.touchStartX = event.changedTouches[0].clientX;
        this.touchStartTime = event.timeStamp;
      });
      this.rendition.on("touchend", event => {
        const offsetX = event.changedTouches[0].clientX - this.touchStartX;
        const time = event.timeStamp - this.touchStartTime;
        if (offsetX < 0 && time < 500) {
          this.nextPage();
        } else if (offsetX > 0 && time < 500) {
          this.prevPage();
        } else {
          this.toggleTileAndMenu();
        }
      });
    },
    initRendition() {
      this.rendition = this.book.renderTo("read", {
        width: window.innerWidth,
        height: window.innerHeight,
        method: "default"
      });

      const location = getLocation(this.fileName);
      this.display(location, () => {
        this.initTheme();
        this.initFontFamily();
        this.initFontSize();
        this.initGlobalStyle();
      });
      console.log(this.book);
      this.rendition.hooks.content.register(contents => {
        Promise.all([
          contents.addStylesheet(
            `${process.env.VUE_APP_RES_URL}/fonts/cabin.css`
          ),
          contents.addStylesheet(
            `${process.env.VUE_APP_RES_URL}/fonts/daysone.css`
          ),
          contents.addStylesheet(
            `${process.env.VUE_APP_RES_URL}/fonts/montserrat.css`
          ),
          contents.addStylesheet(
            `${process.env.VUE_APP_RES_URL}/fonts/tangerine.css`
          )
        ]).then(() => {});
      });
    },
    initTheme() {
      let defaultTheme = getTheme(this.fileName);
      if (!defaultTheme) {
        defaultTheme = this.themeList[0].name;
        saveTheme(this.fileName, defaultTheme);
      }
      this.setDefaultTheme(getTheme(this.fileName));
      this.themeList.forEach(theme => {
        this.rendition.themes.register(theme.name, theme.style);
      });
      this.rendition.themes.select(defaultTheme);
    },
    move(e) {
      if (this.offsetY <= 200) {
        let offsetY = 0;
        if (this.firstOffsetY) {
          offsetY = e.changedTouches[0].clientY - this.firstOffsetY;
          this.setOffsetY(offsetY);
        } else {
          this.firstOffsetY = e.changedTouches[0].clientY;
        }
        e.preventDefault();
        e.stopPropagation();
      }
    },
    moveEnd(e) {
      this.setOffsetY(0);
      this.firstOffsetY = null;
    },
    nextPage() {
      if (this.rendition) {
        this.rendition.next().then(() => {
          this.refreshLocation();
        });
        this.hideTitleAndMenu();
      }
    },
    onMaskClick(e) {
      if (this.mouseState && (this.mouseState === 2 || this.mouseState === 3)) {
        return;
      }
      const offsetX = e.offsetX;
      const width = window.innerWidth;
      if (offsetX > 0 && offsetX < width * 0.3) {
        this.prevPage();
      } else if (offsetX > 0 && offsetX > width * 0.7) {
        this.nextPage();
      } else {
        this.toggleTileAndMenu();
      }
    },
    onMouseEnd(e) {
      if (this.mouseState === 2) {
        this.setOffsetY(0);
        this.firstOffsetY = null;
        this.mouseState = 3;
      } else {
        this.mouseState = 4;
      }
      const time = e.timeStamp - this.mouseStartTime;
      if (time < 100) {
        this.mouseState = 4;
      }
      e.preventDefault();
      e.stopPropagation();
    },
    onMouseEnter(e) {
      this.mouseState = 1;
      this.mouseStartTime = e.timeStamp;
      e.preventDefault();
      e.stopPropagation();
    },
    onMouseMove(e) {
      if (this.mouseState === 1) {
        this.mouseState = 2;
      } else if (this.mouseState === 2) {
        if (this.offsetY <= 200) {
          let offsetY = 0;
          if (this.firstOffsetY) {
            offsetY = e.clientY - this.firstOffsetY;
            this.setOffsetY(offsetY);
          } else {
            this.firstOffsetY = e.clientY;
          }
        }
      }
      e.preventDefault();
      e.stopPropagation();
    },
    parseBook() {
      this.book.loaded.cover.then(cover => {
        this.book.archive.createUrl(cover).then(url => {
          this.setCover(url);
        });
      });
      this.book.loaded.metadata.then(metadata => {
        this.setMetadata(metadata);
      });
      this.book.loaded.navigation.then(navigation => {
        const navItem = flatten(navigation.toc);

        function find(item, level = 0) {
          return !item.parent
            ? level
            : find(
                navItem.filter(parentItem => parentItem.id === item.parent)[0],
                ++level
              );
        }

        navItem.forEach(item => {
          item.level = find(item);
        });

        this.setNavigation(navItem);
      });
    },
    prevPage() {
      if (this.rendition) {
        this.rendition.prev().then(() => {
          this.refreshLocation();
        });
        this.hideTitleAndMenu();
      }
    },
    toggleTileAndMenu() {
      if (this.menuVisible) {
        this.setSettingVisible(-1);
        this.setFontFamilyVisible(false);
      }
      this.setMenuVisible(!this.menuVisible);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global";

.ebook-reader {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .ebook-reader-mask {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 150;
    width: 100%;
    height: 100%;

    background: transparent;
  }
}
</style>
