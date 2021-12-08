<template>
  <transition name="fade">
    <div
      class="slide-content-wrapper"
      v-show="menuVisible && settingVisible === 3"
    >
      <transition name="slide-right">
        <div class="content" v-show="settingVisible === 3">
          <div class="content-page-wrapper" v-if="bookAvailable">
            <div class="content-page">
              <component
                :is="currentTab === 1 ? content : bookmark"
              ></component>
            </div>
            <div class="content-page-tab">
              <div
                class="content-page-tab-item"
                :class="{ selected: currentTab === 1 }"
                @click="selectTab(1)"
              >
                {{ $t("book.navigation") }}
              </div>
              <div
                class="content-page-tab-item"
                :class="{ selected: currentTab === 2 }"
                @click="selectTab(2)"
              >
                {{ $t("book.bookmark") }}
              </div>
            </div>
          </div>
          <div class="content-empty" v-else>
            <ebook-loading> </ebook-loading>
          </div>
        </div>
      </transition>

      <div class="content-bg" @click="hideTitleAndMenu()"></div>
    </div>
  </transition>
</template>

<script>
import { ebookMixin } from "../../utils/mixin";
import EbookSlideContent from "./EbookSlideContent";
import EbookSlideBookmark from "./EbookSlideBookmark";
import EbookLoading from "./EbookLoading";

export default {
  name: "EbookSlide",
  mixins: [ebookMixin],
  components: {
    EbookLoading
  },
  data() {
    return {
      currentTab: 1,
      content: EbookSlideContent,
      bookmark: EbookSlideBookmark
    };
  },
  methods: {
    selectTab(tab) {
      this.currentTab = tab;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global";

.slide-content-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 300;
  display: flex;

  .content {
    flex: 0 0 85%;
    width: 85%;
    height: 100%;

    .content-page-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;

      .content-page {
        flex: 1;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      .content-page-tab {
        flex: 0 0 px2rem(48);
        width: 100%;
        height: 100%;
        display: flex;

        .content-page-tab-item {
          flex: 1;
          @include center;
          font-size: px2rem(14);
        }
      }
    }

    .content-empty {
      width: 100%;
      height: 100%;
      @include center;
    }
  }

  .content-bg {
    flex: 0 0 15%;
    width: 15%;
    height: 100%;
  }
}
</style>
