<template>
  <div class="title-bar">
    <transition name="slide-down">
      <div class="title-wrapper" v-show="menuVisible">
        <div class="left">
          <span class="icon-back icon" @click="back"></span>
        </div>
        <div class="right">
          <div class="icon-wrapper">
            <span class="icon-shelf icon"></span>
          </div>
          <div class="icon-wrapper">
            <span class="icon-cart icon"></span>
          </div>
          <div class="icon-wrapper">
            <span class="icon-more icon"></span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import {ebookMixin} from '../../utils/mixin'

export default {
  name: 'EbookTitle',
  mixins: [ebookMixin],
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "src/assets/styles/global";

  .title-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 200;
    width: 100%;
    height: px2rem(48);
    background: white;
    display: flex;
    box-shadow: 0 px2rem(4) px2rem(4) rgba(0, 0, 0, .15);

    .left {
      flex: 0 0 px2rem(40);
      @include center;
    }

    .right {
      flex: 1;
      @include right;

      .icon-wrapper {
        flex: 0 0 px2rem(40);
        @include center;
      }
    }
  }
</style>
