<template>
  <div class="ebook-bookmark">
    <div class="ebook-bookmark-text-wrapper">
      <div class="ebook-bookmark-down-wrapper">
        <span class="icon-down"></span>
      </div>
      <div class="ebook-bookmark-text">{{text}}</div>
    </div>
    <div class="ebook-bookmark-icon-wrapper"></div>
  </div>
</template>

<script>
  export default {
    name: 'EbookBookmark',
    data () {
      return {
        text: 'abcd'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/global';

  .ebook-bookmark {
    position: absolute;
    top: px2rem(-55);
    left: 0;
    z-index: 200;
    width: 100%;
    height: px2rem(55);
    background: #333333;

    .ebook-bookmark-text-wrapper {
      position: absolute;
      right: px2rem(45);
      bottom: 0;
      display: flex;

      .ebook-bookmark-down-wrapper {
        font-size: px2rem(14);
        color: white;
        transition: all 0.3s linear;
        @include center;
      }

      .ebook-bookmark-text {
        font-size: px2rem(14);
        color: white;
      }
    }

    .ebook-bookmark-icon-wrapper {
    }
  }
</style>
