<template>
  <div class="classify">
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, idx) in swipeList" :key="idx">
        <img :src="item.target" alt="" class="swiper-img" />
      </van-swipe-item>
    </van-swipe>
    <!-- 列表 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="loadMore"
      :immediate-check="false"
      v-if="list.length > 0"
    >
      <Item v-for="(item, idx) in list" :key="idx" :item="item" />
    </van-list>
    <div class="blank"></div>
  </div>
</template>

<script>
import Item from "../components/item.vue";
import { homeSwipeList, goodsList } from "@/api/classify";

export default {
  components: { Item },
  data() {
    return {
      swipeList: [],
      page: 1,
      limit: 10,
      list: [],
      loading: false,
      finished: false,
    };
  },
  methods: {
    // 轮播图数据
    async gethomeSwipeList() {
      let res = await homeSwipeList();
      this.swipeList = res.item;
    },
    async onLoad() {
      // 异步更新数据
      let params = {
        // 页数
        page: this.page,
        limit: this.limit,
      };
      console.log(params);
      let res = await goodsList(params);
      console.log(res);
      this.list.push(...res.item.resultList);
      // 加载状态结束
      this.loading = false;
      if (this.list.length >= res.item.total) {
        this.finished = true;
      } else {
        this.finished = false;
      }
    },
    // 加载更多
    loadMore() {
      this.page += 1; //页数+1
      this.onLoad();
    },
  },
  created() {
    this.gethomeSwipeList();
    // this.goodsList()
    this.onLoad();
  },
};
</script>

<style scoped lang="scss">
// 轮播图
.my-swipe {
  width: 100%;
  height: 4.5rem;
}
.swiper-img {
  width: 100%;
  height: 4.5rem;
}
.classify {
  height: 100vh;
}

.content {
  position: absolute;
  top: 0;
  bottom: 1.08rem;
  left: 0;
  right: 0;
  padding-bottom: 1.08rem;
}

.blank {
  width: 100%;
  height: 1.08rem;
}
</style>