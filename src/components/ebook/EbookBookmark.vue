<template>
  <div class="ebook-bookmark" ref="bookmark">
    <div class="ebook-bookmark-text-wrapper">
      <div class="ebook-bookmark-down-wrapper">
        <span class="icon-down"></span>
      </div>
      <div class="ebook-bookmark-text">{{offsetY}}{{text}}</div>
    </div>
    <div class="ebook-bookmark-icon-wrapper">
      <bookmark :color="color" :width="15" :height="35"></bookmark>
    </div>
  </div>
</template>

<script>
import Bookmark from '../common/Bookmark'
import {realPx} from '../../utils/utils'
import {ebookMixin} from '../../utils/mixin'

const BLUE = '#346cbc'
const WHITE = '#fff'

export default {
  name: 'EbookBookmark',
  data() {
    return {
      text: this.$t('book.pulldownAddMark'),
      color: WHITE
    }
  },
  mixins: [ebookMixin],
  components: {
    Bookmark
  },
  watch: {
    offsetY(v) {
      if (v >= this.height && v < this.threshold) {
        this.text = this.$t('book.pulldownAddMark')
        this.color = WHITE
        this.$refs.bookmark.style.top = `${-v}px`
        console.log(this.$refs.bookmark.style.top)
        console.log('到达第二阶段')
      } else if (v >= this.threshold) {
        this.text = this.$t('book.releaseAddMark')
        this.color = BLUE
        this.$refs.bookmark.style.top = `${-v}px`
        console.log('到达第三阶段')
      }
    }
  },
  computed: {
    height() {
      return realPx(35)
    },
    threshold() {
      return realPx(55)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/global';

.ebook-bookmark {
  position: absolute;
  top: px2rem(-35);
  left: 0;
  z-index: 200;
  width: 100%;
  height: px2rem(35);

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
    position: absolute;
    right: 0;
    bottom: 0;
    margin-right: px2rem(15);

    .icon {
      width: 0;
      height: 0;
      border-width: px2rem(55) px2rem(10) px2rem(10) px2rem(10);
      border-style: solid;
      border-color: white white transparent white;
    }
  }
}
</style>
