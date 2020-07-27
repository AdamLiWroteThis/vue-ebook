<template>
  <div class="ebook" ref="ebook">
    <ebook-title></ebook-title>
    <ebook-reader></ebook-reader>
    <ebook-menu></ebook-menu>
  </div>
</template>

<script>
  import EbookReader from '../../components/ebook/EbookReader'
  import EbookTitle from '../../components/ebook/EbookTitle'
  import EbookMenu from '../../components/ebook/EbookMenu'
  import { getReadTime, saveReadTime } from '../../utils/localStorage'
  import { ebookMixin } from '../../utils/mixin'

  export default {
    name: 'index',
    components: {
      EbookReader,
      EbookTitle,
      EbookMenu
    },
    mixins: [ebookMixin],
    methods: {
      startLoopReadTime () {
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
      move (v) {
        this.$refs.ebook.style.top = v + 'px'
      },
      restore () {
        this.$refs.ebook.style.top = 0
        this.$refs.ebook.style.transition = 'all 0.3s linear'
        setTimeout(() => {
          this.$refs.ebook.style.transition = ''
        })
      }
    },
    mounted () {
      this.startLoopReadTime()
    },
    beforeDestroy () {
      if (this.task) {
        clearInterval(this.task)
      }
    },
    watch: {
      offsetY (newY) {
        if (newY > 0) {
          this.move(newY)
        } else if (newY === 0) {
          this.restore()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ebook {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
