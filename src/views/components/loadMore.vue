<template>
  <div
    class="load-more-wrapper"
    @touchstart="touchStart($event)"
    @touchend="touchEnd($event)"
  >
    <div class="inner">
      <slot></slot>
      <div class="load-more" v-show="enableLoadMore">{{ loadMoreText }}</div>
      <div class="load-end" v-show="!enableLoadMore">已经到底了!</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadMore",
  props: {
    enableLoadMore: {
      type: Boolean,
      default: true,
    },
    onLoadMore: {
      type: Function,
      default: undefined,
      require: false,
    },
  },
  data() {
    return {
      loadMoreText: "上拉加载更多",
      startX: 0,
      startY: 0,
      isLoading: false,
    };
  },
  methods: {
    touchStart(e) {
      this.startY = e.targetTouches[0].pageY;
      this.startX = e.targetTouches[0].pageX;
    },
    scrollToEnd(e) {
      // let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      // console.log(top)
      // console.log(e);
      // console.log(this.$el);
      let scrollHeight = this.$el.scrollHeight;
      let clientHeight = this.$el.clientHeight;
      let scrollTop = this.$el.scrollTop;
      // console.log(scrollHeight, clientHeight, scrollTop, this.enableLoadMore);
      if (scrollTop + clientHeight + 10 >= scrollHeight || !this.enableLoadMore) {
        this.doLoadMore();
      }
    },
    touchEnd(e) {
      // console.log(e)
      if (this.isLoading) {
        return;
      }
      let endX = e.changedTouches[0].pageX,
        endY = e.changedTouches[0].pageY,
        dy = this.startY - endY,
        dx = endX - this.startX;
      // console.log(dy, dx);
      if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
        return;
      }
      if (endY < this.startY) {
        this.scrollToEnd(e);
      }
    },
    doLoadMore() {
      this.isLoading = true;
      this.loadMoreText = "加载中...";
      this.onLoadMore(this.loadDone);
    },
    loadDone() {
      this.isLoading = false;
      this.loadMoreText = "上拉加载更多";
    },
  },
  // mounted() {
  //     window.addEventListener('scroll', () => {
  //         let top =  window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  //         console.log(111,top);
  //         // if (top > 700) {
  //         //     this.scrollTag = true;
  //         // } else {
  //         //     this.scrollTag = false
  //         // }
  //     })
  // },
};
</script>

<style lang="scss" scoped>
.load-more-wrapper {
  height: 100%;
  // height: 100vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  transition-duration: 300ms;
  .load-more,
  .load-end {
    color: #aea699;
    font-size: 0.26rem;
    margin: 0.3rem 0;
    text-align: center;
  }
}
</style>