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
  </div>
</template>

<script>
  import EbookSettingFont from './EbookSettingFont'
  import { ebookMixin } from '../../utils/mixin'
  import EbookSettingFontPopup from './EbookSettingFontPopup'

  export default {
    name: 'MenuBar',
    mixins: [ebookMixin],
    components: {
      EbookSettingFont,
      EbookSettingFontPopup
    },
    data () {
      return {
        ifSettingShow: false,
        ifContentShow: false
      }
    },
    props: {
      themeList: Array,
      bookAvaiable: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      showSetting (key) {
        this.setSettingVisible(key)
      },
      setTheme (index) {
        this.$emit('setTheme', index)
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
      z-index: 101;
      width: 100%;
      height: px2rem(48);
      background: white;
      display: flex;
      box-shadow: 0 px2rem(-4) px2rem(4) #ccc;

      &.hide-box-shadow {
        box-shadow: none;
      }

      .icon-wrapper {
        flex: 1;
        @include center();
      }
    }

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
          //@include center();
          display: flex;
          flex-direction: column;

          .preview {
            flex: 1;
            border: px2rem(1) solid #ccc;

            &.no-border {
              border: none
            }
          }

          .text {
            flex: 0 0 px2rem(20);
            font-size: px2rem(14);
            color: #ccc;
            @include center();

            &.selectd {
              color: #333;
            }
          }
        }
      }

      .setting-progress {
        width: 100%;
        height: 100%;

        .progress-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          padding: 0 px2rem(30);
          box-sizing: border-box;
          @include center();

          .progress {
            width: 100%;
            -webkit-appearance: none;
            height: px2rem(2);
            background: -webkit-linear-gradient(#999, #999) no-repeat, #ddd;
            background-size: 0 100%;

            &:focus {
              outline: none;
            }

            &::-webkit-slider-thumb {
              -webkit-appearance: none;
              height: px2rem(20);
              width: px2rem(20);
              border-radius: 50%;
              background: white;
              box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .15);
              border: px2rem(1) solid #ddd;
            }
          }
        }

        .text-wrapper {
          width: 100%;
          position: absolute;
          font-size: px2rem(14);
          text-align: center;
          left: 0;
          bottom: 0;
        }
      }
    }

    .content {
      position: absolute;
      top: 0;
      left: 0;
      width: 80%;
      height: 100%;
      z-index: 102;
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
      z-index: 101;
      display: flex;
      width: 100%;
      height: 100%;
      background: rgba(51, 51, 51, .8);
    }
  }
</style>
