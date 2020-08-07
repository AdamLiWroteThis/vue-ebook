<template>
  <div>
    <div class="search-bar" :class="{'hide-title':!titleVisible,'hide-shadow':!shadowVisible}">
      <transition name="title-move">
        <div class="search-bar-title-wrapper" v-show="titleVisible">
          <div class="title-text-wrapper">
            <span class="title-text title">{{$t('home.title')}}</span>
          </div>
          <div class="title-icon-shake-wrapper">
            <span class="icon-shake icon"></span>
          </div>
        </div>
      </transition>
      <div class="title-icon-back-wrapper" :class="{'hide-title':!titleVisible}">
        <span class="icon-back icon"></span>
      </div>
      <div class="search-bar-input-wrapper" :class="{'hide-title':!titleVisible}">
        <div class="search-bar-blank" :class="{'hide-title':!titleVisible}"></div>
        <div class="search-bar-input">
          <span class="icon-search icon"></span>
          <input type="text" class="input" :placeholder="$t('home.hint')" v-model="searchText"/>
        </div>
      </div>
    </div>
    <hot-search-list></hot-search-list>
  </div>
</template>

<script>
import {storeHomeMixin} from '@/utils/mixin'
import HotSearchList from '@/components/home/HotSearchList'

export default {
  name: 'SearchBar',
  mixins: [storeHomeMixin],
  components: {
    HotSearchList
  },
  data() {
    return {
      searchText: '',
      titleVisible: true,
      shadowVisible: false
    }
  },
  watch: {
    offsetY(offsetY) {
      if (offsetY > 0) {
        this.hideTitle()
        this.showShadow()
      } else {
        this.showTitle()
        this.hideShadow()
      }
    }
  },
  methods: {
    hideShadow() {
      this.shadowVisible = false
    },
    hideTitle() {
      this.titleVisible = false
    },
    showShadow() {
      this.shadowVisible = true
    },
    showTitle() {
      this.titleVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/global';

.search-bar {
  position: relative;
  z-index: 150;
  width: 100%;
  height: px2rem(94);
  box-shadow: 0 px2rem(2) px2rem(2) 0 rgba(0, 0, 0, 0.1);
  transition: height $animationTime $animationType;

  &.hide-title {
    height: px2rem(52);
  }

  &.hide-shadow {
    box-shadow: none;
  }

  .search-bar-title-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: px2rem(42);

    .title-text-wrapper {
      width: 100%;
      height: px2rem(42);
      @include center;
    }

    .title-icon-shake-wrapper {
      position: absolute;
      right: px2rem(15);
      top: 0;
      height: px2rem(42);
      @include center;
    }
  }

  .title-icon-back-wrapper {
    position: absolute;
    left: px2rem(15);
    top: 0;
    height: px2rem(42);
    @include center;
    transition: height $animationTime $animationType;

    &.hide-title {
      height: px2rem(52);
    }
  }

  .search-bar-input-wrapper {
    display: flex;
    position: absolute;
    left: 0;
    top: px2rem(42);
    width: 100%;
    height: px2rem(52);
    padding: px2rem(10);
    box-sizing: border-box;
    transition: top $animationTime $animationType;

    &.hide-title {
      top: 0;
    }

    .search-bar-blank {
      flex: 0;
      width: 0;
      transition: all $animationTime $animationType;

      &.hide-title {
        flex: 0 0 px2rem(31);
        width: px2rem(31);
      }
    }

    .search-bar-input {
      flex: 1;
      width: 100%;
      background: #f4f4f4;
      border-radius: px2rem(20);
      padding: px2rem(5);
      box-sizing: border-box;
      border: px2rem(1) solid #eee;
      @include left;

      .icon-search {
        color: #999;
      }

      .input {
        width: 100%;
        height: px2rem(22);
        border: none;
        background: transparent;
        margin-left: px2rem(10);
        font-size: px2rem(12);

        &:focus {
          outline: none;
        }

        &::-webkit-input-placeholder {
          color: #ccc;
        }
      }
    }
  }
}
</style>
