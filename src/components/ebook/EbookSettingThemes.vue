<template>
  <transition name="slide-up">
    <div class="setting-wrapper" v-show="menuVisible && settingVisible===1">
      <div class="setting-theme">
        <div class="theme-wrapper" v-for="(item,index) in themeList" :key="index" @click="setTheme(index)">
          <div class="preview" :style="{background:item.style.body.background}"
               :class="{'selectd':item.name===defaultTheme}"></div>
          <div class="text" :class="{'selectd':item.name===defaultTheme}">{{ item.alias }}</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { ebookMixin } from '../../utils/mixin'
  import { saveTheme } from '../../utils/localStorage'

  export default {
    name: 'EbookSettingThemes',
    mixins: [ebookMixin],
    methods: {
      setTheme (index) {
        const theme = this.themeList[index].name
        this.setDefaultTheme(theme).then(() => {
          this.currentBook.rendition.themes.select(theme)
          this.initGlobalStyle()
        })
        saveTheme(this.fileName, theme)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/assets/styles/global";

  .setting-wrapper {
    position: absolute;
    left: 0;
    bottom: px2rem(48);
    background: white;
    width: 100%;
    height: px2rem(90);
    z-index: 101;
    box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);

    .setting-theme {
      display: flex;
      height: 100%;

      .theme-wrapper {
        flex: 1;
        padding: px2rem(5);
        display: flex;
        flex-direction: column;

        .preview {
          flex: 1;
          border: px2rem(1) solid #ccc;

          &.selectd {
            box-shadow: 0 px2rem(4) px2rem(6) rgba(0, 0, 0, .15);
          }
        }

        .text {
          flex: 0 0 px2rem(20);
          font-size: px2rem(14);
          color: #333;
          @include center();

          &.selectd {
            color: black;
            font-weight: bold;
          }
        }
      }
    }
  }

</style>
