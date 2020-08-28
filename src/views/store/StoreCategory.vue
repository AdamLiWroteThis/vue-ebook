<template>
  <div class="store-shelf">
    <shelf-title :title="shelfCategory.title"></shelf-title>
    <scroll class="store-shelf-scroll-wrapper"
            :top="0"
            :bottom="scrollBottom"
            @onScroll="onScroll"
            ref="scroll"
            v-if="ifShowList">
      <shelf-list :top="42" :data="shelfCategory.itemList"></shelf-list>
    </scroll>
    <div class="store-shelf-empty-view" v-else>{{$t('shelf.groupNone')}}</div>
    <shelf-footer></shelf-footer>
  </div>
</template>

<script>
import ShelfTitle from '@/components/shelf/ShelfTitle'
import {storeShelfMixin} from '@/utils/mixin'
import Scroll from '@/components/common/Scroll'
import ShelfList from '@/components/shelf/ShelfList'
import ShelfFooter from '@/components/shelf/ShelfFooter'

export default {
  name: 'StoreShelf',
  components: {ShelfFooter, ShelfList, Scroll, ShelfTitle},
  mixins: [storeShelfMixin],
  mounted() {
    this.getCategoryList(this.$route.query.title)
    this.setCurrentType(2)
  },
  computed: {
    ifShowList() {
      return this.shelfCategory.itemList && this.shelfCategory.itemList.length > 0
    }
  },
  watch: {
    isEditMode(isEditMode) {
      this.scrollBottom = isEditMode ? 48 : 0
      this.$nextTick(() => {
        this.$refs.scroll.refresh()
      })
    }
  },
  data() {
    return {
      scrollBottom: 0
    }
  },
  methods: {
    onScroll(offsetY) {
      this.setOffsetY(offsetY)
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

  .store-shelf-empty-view {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: px2rem(20);
    color: #333;
    @include center;
  }

  .store-shelf-scroll-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 101;
  }
}
</style>
