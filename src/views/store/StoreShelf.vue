<template>
  <div class="store-shelf">
    <shelf-title :title="$t('shelf.title')"></shelf-title>
    <scroll
      class="store-shelf-scroll-wrapper"
      :top="0"
      :bottom="scrollBottom"
      @onScroll="onScroll"
      ref="scroll"
    >
      <shelf-search></shelf-search>
      <shelf-list :data="shelfList"></shelf-list>
    </scroll>
    <shelf-footer></shelf-footer>
  </div>
</template>

<script>
import ShelfTitle from "@/components/shelf/ShelfTitle";
import { storeShelfMixin } from "@/utils/mixin";
import Scroll from "@/components/common/Scroll";
import ShelfSearch from "@/components/shelf/ShelfSearch";
import ShelfList from "@/components/shelf/ShelfList";
import ShelfFooter from "@/components/shelf/ShelfFooter";

export default {
  name: "StoreShelf",
  components: { ShelfFooter, ShelfList, ShelfSearch, Scroll, ShelfTitle },
  mixins: [storeShelfMixin],
  mounted() {
    this.getShelfList();
    this.setShelfCategory([]);
    this.setCurrentType(1);
  },
  watch: {
    isEditMode(isEditMode) {
      this.scrollBottom = isEditMode ? 48 : 0;
      this.$nextTick(() => {
        this.$refs.scroll.refresh();
      });
    }
  },
  data() {
    return {
      scrollBottom: 0
    };
  },
  methods: {
    onScroll(offsetY) {
      this.setOffsetY(offsetY);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global";

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
