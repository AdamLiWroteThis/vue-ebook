<template>
  <div class="ebook" ref="ebook">
    <ebook-title></ebook-title>
    <ebook-reader></ebook-reader>
    <ebook-menu></ebook-menu>
    <ebook-bookmark></ebook-bookmark>
  </div>
</template>

<script>
import EbookReader from '../../components/ebook/EbookReader'
import EbookTitle from '../../components/ebook/EbookTitle'
import EbookMenu from '../../components/ebook/EbookMenu'
import EbookBookmark from '../../components/ebook/EbookBookmark'
import {getReadTime, saveReadTime} from '../../utils/localStorage'
import {ebookMixin} from '../../utils/mixin'

export default {
  name: 'index',
  components: {
    EbookReader,
    EbookTitle,
    EbookMenu,
    EbookBookmark
  },
  mixins: [ebookMixin],
  methods: {
    startLoopReadTime() {
      let readTime = getReadTime(this.fileName)
      if (!readTime) {
        readTime = 0
      }
      this.task = setInterval(() => {
        readTime++
        if (readTime % 30 === 0) {
          saveReadTime(this.fileName, readTime)
        }
      }, 1000)
    },
    move(v) {
      this.$refs.ebook.style.top = v + 'px'
    },
    restore() {
      this.$refs.ebook.style.top = 0
      this.$refs.ebook.style.transition = 'all 0.2s linear'
      setTimeout(() => {
        this.$refs.ebook.style.transition = ''
      }, 200)
    }
  },
  mounted() {
    this.startLoopReadTime()
  },
  beforeDestroy() {
    if (this.task) {
      clearInterval(this.task)
    }
  },
  watch: {
    offsetY(v) {
      if (!this.menuVisible && this.bookAvailable) {
        if (v > 0 & v < 85) {
          this.move(v)
        } else if (v === 0) {
          this.restore()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/global';

.ebook {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
