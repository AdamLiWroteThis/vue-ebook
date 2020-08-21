<template>
  <div class="store-shelf">
    <shelf-title></shelf-title>
    <scroll class="store-shelf-scroll-wrapper" :top="0" @onScroll="onScroll">
      <shelf-search></shelf-search>
      <shelf-list></shelf-list>
    </scroll>
  </div>
</template>

<script>
import ShelfTitle from '@/components/shelf/ShelfTitle'
import {storeShelfMixin} from '@/utils/mixin'
import Scroll from '@/components/common/Scroll'
import ShelfSearch from '@/components/shelf/ShelfSearch'
import {shelf} from '@/api/store'
import ShelfList from '@/components/shelf/ShelfList'

export default {
  name: 'StoreShelf',
  components: {ShelfList, ShelfSearch, Scroll, ShelfTitle},
  mixins: [storeShelfMixin],
  mounted() {
    this.getShelfList()
  },
  methods: {
    onScroll(offsetY) {
      this.setOffsetY(offsetY)
    },
    getShelfList() {
      shelf().then(response => {
        if (response.status === 200 && response.data && response.data.bookList) {
          this.setShelfList(response.data.bookList)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global";

.store-shelf {
  position: relative;
  z-index: 100;
  width: 100%;
  height: 100%;

  .store-shelf-scroll-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 101;
  }
}
</style>
