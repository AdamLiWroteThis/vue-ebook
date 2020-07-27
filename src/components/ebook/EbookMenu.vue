<template>
  <div class="menu-bar">
    <transition name="slide-up">
      <div class="menu-wrapper" v-show="menuVisible"
           :class="{'hide-box-shadow':menuVisible&&settingVisible!==-1}">
        <div class="icon-wrapper">
          <span class="icon-menu icon" @click="showSetting(3)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-progress icon" @click="showSetting(2)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-bright icon" @click="showSetting(1)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-A icon" @click="showSetting(0)"></span>
        </div>
      </div>
    </transition>
    <ebook-setting-font></ebook-setting-font>
    <ebook-setting-font-popup></ebook-setting-font-popup>
    <ebook-setting-themes></ebook-setting-themes>
    <ebook-setting-progress></ebook-setting-progress>
    <ebook-slide></ebook-slide>
  </div>
</template>

<script>
  import EbookSettingFont from './EbookSettingFont'
  import { ebookMixin } from '../../utils/mixin'
  import EbookSettingFontPopup from './EbookSettingFontPopup'
  import EbookSettingThemes from './EbookSettingThemes'
  import EbookSettingProgress from './EbookSettingProgress'
  import EbookSlide from './EbookSlide'

  export default {
    name: 'MenuBar',
    mixins: [ebookMixin],
    components: {
      EbookSettingFont,
      EbookSettingFontPopup,
      EbookSettingThemes,
      EbookSettingProgress,
      EbookSlide
    },
    methods: {
      showSetting (key) {
        this.setSettingVisible(key)
      },
      onProgressChange (progress) {
        this.$emit('onProgressChange', progress)
      },
      hideContent () {
        this.ifContentShow = false
      },
      jumpTo (href) {
        this.$emit('jumpTo', href)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/assets/styles/global";

  .menu-bar {
    .menu-wrapper {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 200;
      width: 100%;
      height: px2rem(48);
      background: white;
      display: flex;
      box-shadow: 0 px2rem(-4) px2rem(4) rgba(0, 0, 0, .15);

      .icon-wrapper {
        flex: 1;
        @include center;
      }
    }

    .content {
      position: absolute;
      top: 0;
      left: 0;
      width: 80%;
      height: 100%;
      z-index: 201;
      background: white;
      overflow: auto;

      .content-wrapper {
        width: 100%;
        height: 100%;
        overflow: auto;

        .content-item {
          padding: px2rem(20) px2rem(15);
          border-bottom: px2rem(1) solid #f4f4f4;

          .text {
            font-size: px2rem(14);
            color: #333;
          }
        }
      }

      .empty {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        @include center;
        font-size: px2rem(16);
        color: #333;
      }
    }

    .content-mask {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 200;
      display: flex;
      width: 100%;
      height: 100%;
      background: rgba(51, 51, 51, .8);
    }
  }
</style>
