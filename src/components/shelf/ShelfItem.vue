<template>
  <div class="shelf-item shelf-item-shadow">
    <component :is="item" :data="data"></component>
  </div>
</template>

<script>
import {storeShelfMixin} from '@/utils/mixin'
import ShelfBook from '@/components/shelf/ShelfItemBook'
import ShelfCategory from '@/components/shelf/ShelfItemCategory'
import ShelfAdd from '@/components/shelf/ShelfItemAdd'

export default {
  name: 'ShelfItem',
  components: {
    ShelfBook,
    ShelfCategory,
    ShelfAdd
  },
  data() {
    return {
      book: ShelfBook,
      category: ShelfCategory,
      add: ShelfAdd
    }
  },
  mixins: [storeShelfMixin],
  props: {
    data: Object
  },
  computed: {
    item() {
      return this.data.type === 1 ? this.book : (this.data.type === 2 ? this.category : this.add)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global";

.shelf-item {
  width: 100%;
  height: 100%;
  background: mediumvioletred;

  &.shelf-item-shadow {
    box-shadow: px2rem(2) px2rem(2) px2rem(6) px2rem(2) rgba(200, 200, 200, .3);
  }
}

</style>
