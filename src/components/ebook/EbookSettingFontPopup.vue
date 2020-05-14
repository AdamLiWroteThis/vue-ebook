<template>
  <transition name="popup-slide-up">
    <div class="ebook-popup-list" v-show="fontFamilyVisible">
      <div class="ebook-popup-title">
        <div class="ebook-popup-title-icon">
          <span class="icon-down2" @click="hide"></span>
        </div>
        <span class="ebook-popup-title-text">选择字体</span>
      </div>
      <div class="ebook-popup-list-wrapper">
        <div class="ebook-popup-item" v-for="(item,index) in FONT_FAMILY" :key="index" @click="setFontFamily(item)">
          <div class="ebook-popup-item-text" :class="{'selected':isSelected(item)}">
            {{item.font}}
          </div>
          <div class="ebook-popup-item-check" v-if="isSelected(item)" :class="{'selected':isSelected(item)}">
            <span class="icon-check"></span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { ebookMixin } from '../../utils/mixin'
  import { FONT_FAMILY } from '../../utils/book'
  import { setLocalStorage, getLocalStorage } from '../../utils/localStorage'

  export default {
    name: 'EbookSettingFontPopup',
    mixins: [ebookMixin],
    data () {
      return {
        FONT_FAMILY
      }
    },
    methods: {
      hide () {
        this.setFontFamilyVisible(false)
      },
      isSelected (item) {
        if (this.defaultFontFamily === item.font) {
          return true
        }
      },
      setFontFamily (item) {
        this.setDefaultFontFamily(item.font)
        if (this.defaultFontFamily === 'Default') {
          this.currentBook.rendition.themes.font('Times New Roman')
        } else {
          this.currentBook.rendition.themes.font(this.defaultFontFamily)
        }
      }
    },
    mounted () {
      setLocalStorage(this.fileName, this.defaultFontFamily)
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/assets/styles/global';

  .ebook-popup-list {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 300;
    width: 100%;
    box-shadow: 0 px2rem(-4) px2rem(6) rgba(0, 0, 0, .1);

    background: white;

    .ebook-popup-title {
      position: relative;
      padding: px2rem(15);
      box-sizing: border-box;
      border-bottom: px2rem(1) solid #b8b9bb;
      @include center;

      .ebook-popup-title-icon {
        position: absolute;
        left: px2rem(15);
        top: 0;
        height: 100%;
        @include center;
        font-size: px2rem(14);
        font-weight: bold;
      }

      .ebook-popup-title-text {
        font-size: px2rem(14);
        font-weight: bold;
        @include center;
      }
    }

    .ebook-popup-list-wrapper {
      .ebook-popup-item {
        display: flex;
        font-size: px2rem(14);
        padding: px2rem(15);

        .ebook-popup-item-text {
          flex: 1;
          text-align: left;
        }

        .ebook-popup-item-check {
          flex: 1;
          text-align: right;
        }

        .selected {
          color: dodgerblue;
          font-weight: bold;
        }
      }
    }
  }
</style>
