<template>
  <div class="ebook-bookmark" ref="bookmark">
    <div class="ebook-bookmark-text-wrapper">
      <div class="ebook-bookmark-down-wrapper" ref="iconDown">
        <span class="icon-down"></span>
      </div>
      <div class="ebook-bookmark-text">{{text}}</div>
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
        this.beforeThreshold(v)
      } else if (v >= this.threshold) {
        this.afterThreshold(v)
      } else if (v > 0 && v < this.height) {
        this.beforeHeight()
      } else if (v === 0) {
        this.restore()
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
  },
  methods: {
    restore() {
      setTimeout(() => {
        this.$refs.bookmark.style.top = `${-this.height}px`
        this.$refs.iconDown.style.transform = ''
      }, 200)
    },
    beforeHeight() {
      if (this.isBookmark) {
        this.text = this.$t('book.pulldownDeleteMark')
        this.color = BLUE
      } else {
        this.text = this.$t('book.pulldownAddMark')
        this.color = WHITE
      }
    },
    beforeThreshold(v) {
      this.beforeHeight()
      this.$refs.bookmark.style.top = `${-v}px`
      const iconDown = this.$refs.iconDown
      if (iconDown.style.transform === 'rotate(180deg)') {
        iconDown.style.transform = ''
      }
    },
    afterThreshold(v) {
      if (this.isBookmark) {
        this.text = this.$t('book.releaseDeleteMark')
        this.color = WHITE
      } else {
        this.text = this.$t('book.releaseAddMark')
        this.color = BLUE
      }
      this.$refs.bookmark.style.top = `${-v}px`
      const iconDown = this.$refs.iconDown
      if (iconDown.style.transform === '') {
        iconDown.style.transform = 'rotate(180deg)'
      }
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
