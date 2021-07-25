<template>
  <div class="classify">
    <!-- 轮播图 -->
    <!-- <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,idx) in swipeList" :key="idx">
        <img :src="item.target" alt="" class="swiper-img">
      </van-swipe-item>
    </van-swipe> -->

    <div class="">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :immediate-check="false"
        
      class="content"
    >
     <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>
    </div>
  </div>
</template>

<script>
import { homeSwipeList, goodsList } from "@/api/classify";

export default {
  components: {},
  data() {
    return {
      page: 1,
      limit: 10,
      list: [],
      loading: false,
      finished: false,
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 50; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.list.length >= 120) {
          this.finished = true;
        }
      }, 1000);
    },
  },
  created() {
    // this.gethomeSwipeList()
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
  top: 0rem;
  bottom: 1.08rem;
  left: 0;
  right: 0;
  // overflow: hidden;
  margin-bottom: 2rem;
}

// 这部分是列表
.advert-item {
  margin-left: 0.24rem;
  height: 2.43rem;
  padding: 0.26rem 0.24rem 0;
  display: flex;
  justify-content: space-between;
  border-radius: 0.18rem;
  margin-bottom: 0.18rem;
  .label {
    width: 1.2rem;
    height: 0.34rem;
    line-height: 0.34rem;
    text-align: center;
    display: inline-block;
    background: linear-gradient(90deg, #fecb00 0%, #feba00 100%);
    border-radius: 0.08rem;
    font-size: 0.2rem;
    color: #fff;
  }
  .label2 {
    background: #c3d8e6;
    color: #fff;
  }
  .label3 {
    background: #e0c19d;
    color: #fff;
  }
  .label4 {
    background: #f5f5f5;
    color: #333333;
  }
  .adv-title {
    margin-left: 0.18rem;
    width: 3.5rem;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .tag {
    color: #8c8c8c;
    max-width: 1.2rem;
  }
  .line {
    height: 0.19rem;
    background: #8c8c8c;
    margin: 0 0.23rem;
    position: relative;
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      -webkit-transform: scale(0.5, 1);
      transform: scale(0.5, 1);
      border-right: 1px solid #8c8c8c;
    }
    &:last-child::after {
      border: 0;
    }
  }
  .line-right {
    height: 0.19rem;
    background: #8c8c8c;
    margin: 0 0.23rem;
    position: relative;
    &::after {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      -webkit-transform: scale(0.5, 1);
      transform: scale(0.5, 1);
      border-right: 1px solid #8c8c8c;
    }
  }
  .border-none {
    &:last-child .line-right {
      &::after {
        border: 0;
      }
    }
  }
  .coin {
    color: #ccc;
  }
  .adv-img {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 0.18rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .dist {
    color: #8c8c8c;
    margin-top: 0.03rem;
    text-align: right;
  }
}
</style>