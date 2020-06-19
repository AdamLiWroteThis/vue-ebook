<template>
  <div class="ebook-slide-contents">
    <div class="slide-contents-search-wrapper">
      <div class="slide-contents-search-input-wrapper">
        <div class="slide-contents-search-icon">
          <span class="icon-search"></span>
        </div>
        <input type="text" class="slide-contents-search-input" :placeholder="$t('book.searchHint')"
               @click="showSearchPage()">
      </div>
      <div class="slide-contents-search-cancel" v-if="searchVisiable" @click="hideSearchPage()">{{$t('book.cancel')}}
      </div>
    </div>
    <div class="slide-contents-book-wrapper">
      <div class="slide-contents-book-img-wrapper">
        <img :src="cover" alt="" class="slide-contents-book-img">
      </div>
      <div class="slide-contents-book-info-wrapper">
        <div class="slide-contents-book-title">{{metadata.title}}</div>
        <div class="slide-contents-book-author">{{metadata.creator}}</div>
      </div>
      <div class="slide-contents-book-progress-wrapper">
        <div class="slide-contents-book-progress">
          <span class="progress">{{progress + '%'}}</span>
          <span class="progress-text">{{$t('book.haveRead2')}}</span>
        </div>
        <div class="slide-contents-book-time">{{getReadTimeText()}}</div>
      </div>
    </div>
    <scroll class="slide-contents-list" :top="156" :bottom="48" ref="scroll">
      <div class="slide-contents-item" v-for="(item, index) in navigation" :key="index">
        <span class="slide-contents-item-label" :style="contentItemStyle(item)" :class="{'selected':section===index}"
              @click="displayNavigation(item.href)">{{item.label}}</span>
        <span class="slide-contents-item-page"></span>
      </div>
    </scroll>
  </div>
</template>

<script>
  import { ebookMixin } from '../../utils/mixin'
  import Scroll from '../common/Scroll'
  import { px2rem } from '../../utils/utils'

  export default {
    name: 'EbookSlideContent',
    mixins: [ebookMixin],
    components: {
      Scroll
    },
    data () {
      return {
        searchVisiable: false
      }
    },
    methods: {
      hideSearchPage () {
        this.searchVisiable = false
      },
      showSearchPage () {
        this.searchVisiable = true
      },
      contentItemStyle (item) {
        return {
          marginLeft: `${px2rem(item.level * 15)}rem`
        }
      },
      displayNavigation (target) {
        this.display(target, () => {
          this.hideTitleAndMenu()
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/assets/styles/global';

  .ebook-slide-contents {
    width: 100%;
    font-size: 0;

    .slide-contents-search-wrapper {
      display: flex;
      width: 100%;
      height: px2rem(36);
      margin: px2rem(20) 0 px2rem(10) 0;
      padding: 0 px2rem(15);
      box-sizing: border-box;

      .slide-contents-search-input-wrapper {
        flex: 1;
        display: flex;

        .slide-contents-search-icon {
          flex: 0 0 px2rem(28);
          font-size: px2rem(14);
          @include center;
        }

        .slide-contents-search-input {
          flex: 1;
          width: 100%;
          height: px2rem(32);
          border: none;
          background: transparent;
          font-size: px2rem(14);

          &:focus {
            outline: none;
          }
        }
      }

      .slide-contents-search-cancel {
        flex: 0 0 px2rem(40);
        font-size: px2rem(14);
        @include right();
      }
    }

    .slide-contents-book-wrapper {
      width: 100%;
      height: px2rem(90);
      padding: px2rem(10) px2rem(15) px2rem(20) px2rem(15);
      box-sizing: border-box;
      display: flex;

      .slide-contents-book-img-wrapper {
        flex: 0 0 px2rem(45);

        .slide-contents-book-img {
          width: px2rem(45);
          height: px2rem(60);
        }
      }

      .slide-contents-book-info-wrapper {
        padding: 0 px2rem(10);
        flex: 1;

        .slide-contents-book-title {
          width: px2rem(153.75);
          font-size: px2rem(14);
          line-height: px2rem(16);
          @include ellipsis2(2);
        }

        .slide-contents-book-author {
          width: px2rem(153.75);
          margin-top: px2rem(5);
          font-size: px2rem(12);
          @include ellipsis;
        }
      }

      .slide-contents-book-progress-wrapper {
        flex: 0 0 px2rem(70);

        .slide-contents-book-progress {
          .progress {
            font-size: px2rem(14);
          }

          .progress-text {
            font-size: px2rem(12);
          }
        }

        .slide-contents-book-time {
          font-size: px2rem(12);
          margin-top: px2rem(5);
        }
      }
    }

    .slide-contents-list {
      padding: 0 px2rem(15);
      box-sizing: border-box;

      .slide-contents-item {
        display: flex;
        padding: px2rem(20) 0;
        box-sizing: border-box;
        @include ellipsis();

        .slide-contents-item-label {
          flex: 1;
          font-size: px2rem(14);
          line-height: px2rem(16);
          @include ellipsis();
        }

        .slide-contents-item-page {
        }
      }
    }
  }
</style>
