<template>
  <transition name="slide-up">
    <div class="setting-wrapper" v-show="menuVisible && settingVisible===0">
      <div class="setting-font-size">
        <div class="preview left" :style="{ fontSize: fontSizeList[0].fontSize + 'px'}">A</div>
        <div class="select-wrapper">
          <div class="select-item" v-for="(item,index) in fontSizeList" :key="index"
               @click="setFontSize(item.fontSize)">
            <div class="line"></div>
            <div class="point-wrapper">
              <div class="point" v-show="defaultFontSize===item.fontSize">
                <div class="small-point"></div>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <div class="preview right" :style="{ fontSize: fontSizeList[6].fontSize + 'px'}">A</div>
      </div>
      <div class="setting-font-family" @click="showFontFamilyPopup">
        <div class="setting-font-family-text-wrapper">
          <span class="setting-font-family-text">{{defaultFontFamily}}</span>
        </div>
        <div class="setting-font-family-icon-wrapper">
          <span class="icon-forward"></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { FONT_SIZE_LIST } from '../../utils/book'
  import { ebookMixin } from '../../utils/mixin'

  export default {
    name: 'EbookSettingFont',
    mixins: [ebookMixin],
    data () {
      return {
        fontSizeList: FONT_SIZE_LIST
      }
    },
    methods: {
      setFontSize (fontSize) {
        console.log(fontSize)
        this.setDefaultFontSize(fontSize)
        this.currentBook.rendition.themes.fontSize(fontSize)
      },
      showFontFamilyPopup () {
        console.log('showFontFamilyPopup')
        this.setFontFamilyVisible(true)
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
    display: flex;
    flex-direction: column;
    background: white;
    width: 100%;
    height: px2rem(60);
    z-index: 101;
    box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);

    .setting-font-size {
      flex: 2;
      display: flex;
      height: 100%;

      .preview {
        @include center();
        height: 100%;
        width: 100%;
        flex: 0 0 px2rem(40);
      }

      .left {
        position: relative;
        left: px2rem(20);
      }

      .right {
        position: relative;
        right: px2rem(20);
      }

      .select-wrapper {
        display: flex;
        flex: 1;

        .select-item {
          flex: 1;
          display: flex;
          align-items: center;

          &:first-child {
            .line {
              &:first-child {
                border-top: none;
              }
            }
          }

          &:last-child {
            .line {
              &:last-child {
                border-top: none;
              }
            }
          }

          .line {
            flex: 1;
            height: 0;
            border-top: px2rem(1) solid #ccc;
          }

          .point-wrapper {
            position: relative;
            width: 0;
            height: px2rem(7);
            flex: 0 0 0;
            border-left: px2rem(1) solid #ccc;

            .point {
              position: absolute;
              top: px2rem(-7);
              left: px2rem(-10);
              background: white;
              width: px2rem(20);
              height: px2rem(20);
              border-radius: 50%;
              box-shadow: 0 px2rem(1) px2rem(1) #cccccc;
              @include center();

              .small-point {
                width: px2rem(4);
                height: px2rem(4);
                background: black;
                border-radius: 50%;
              }
            }
          }
        }
      }
    }

    .setting-font-family {
      flex: 1;
      display: flex;
      @include center;
      font-size: px2rem(14);

      .setting-font-family-text-wrapper {
        .setting-font-family-text {
          @include center;
        }
      }

      .setting-font-family-icon-wrapper {
        .icon-forward {
          @include center;
        }
      }
    }
  }
</style>
