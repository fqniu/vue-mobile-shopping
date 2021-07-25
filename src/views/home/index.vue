<template>
  <div class="home">
    <baseTitleBar
      backgroundColor="#FFF"
      :leftEle="leftEle"
      :title="title"
      titleColor="#000"
    ></baseTitleBar>

    <scroll
      class="content"
      ref="scroll"
      @pullingUp="loadMore"
      @scroll="contentScroll"
      :data="data"
      :pull-up-load="enableLoadMore"
      :probe-type="3"
    >
      <!-- 轮播图 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, idx) in swipeList" :key="idx">
          <img :src="item.target" alt="" class="swiper-img" />
        </van-swipe-item>
      </van-swipe>
      <!-- 列表 -->
      <Item v-for="(item, idx) in data" :key="idx" :item="item" />
    </scroll>
    <BackTop @click.native="gobackTop" v-show="showBackTop"></BackTop>
  </div>
</template>

<script>
import baseTitleBar from "@/components/titleBar/baseTitleBar";
import scroll from "../components/scroll";
import BackTop from "../components/backTop.vue";
import Item from "../components/item.vue";
import { homeSwipeList, homeGoodsList } from "@/api/home";

export default {
  name: "home",
  components: { scroll, baseTitleBar, BackTop, Item },
  data() {
    return {
      page: 1,
      limit: 10,
      data: [],
      swipeList: [],
      leftEle: {
        iconName: "iconback",
        color: "#000",
        fontSize: ".36rem",
        method: this.back,
      },
      title: "首页",
      showBackTop: false,
      backTopDistance: 800,
      enableLoadMore: true,
    };
  },
  methods: {
    // 请求轮播数据
    async gethomeSwipeList() {
      let res = await homeSwipeList();
      this.swipeList = res.item;
    },
    // 请求列表数据
    getListData() {
      let params = {
        // 页数
        page: this.page,
        limit: this.limit,
      };
      homeGoodsList(params).then((res) => {
        if (res.code == 200) {
          if (this.data.length >= res.item.total) {
            this.enableLoadMore = false;
            return;
          }
          // this.data = this.data.concat(res.item.resultList);
          const homeGoodsList = res.item.resultList;
          this.data.push(...homeGoodsList);
          this.page += 1;
          this.$refs.scroll.finishPullUp();
        } else {
          console.log("接口出错");
        }
      });
    },
    // 加载更多
    loadMore() {
      this.getListData();
      // 用于图片异步加载高度问题刷新
      this.$refs.scroll.refresh();
    },
    // 监听回顶的显示
    contentScroll(position) {
      // 1.决定tabFixed是否显示
      // this.isTabFixed = position.y < -this.tabOffsetTop;
      // 2.决定backTop是否显示
      this.showBackTop = -position.y > this.backTopDistance;
    },
    // 回到顶部
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
    // 回到顶部
    gobackTop() {
      // console.log("回到顶部", this.$refs.scroll);
      // 第一种写法 this.$refs.scroll 拿到scroll组件里面的scroll , 然后调用里面的方法 , 第一二参数为距离, 第三个参数为时间500ms
      // this.$refs.scroll.scroll.scrollTo(0, 0, 500);
      // 第二种写法
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    imageLoad() {
      console.log("图片加载完触发事件");
      // this.$bus.$emit('itemImageLoad')
    },
  },
  created() {
    this.gethomeSwipeList();
    this.getListData();
    // 监听item中图片加载完
    // this.$bus.$on('itemImageLoad', () => {
    //   console.log(111);
    // })
  },
};
</script>

<style scoped lang="scss">
.home {
  height: 100vh;
  position: relative;
}
.content {
  position: absolute;
  top: 0.9rem;
  bottom: 1.08rem;
  left: 0;
  right: 0;
  overflow: hidden;
}
// 轮播图
.my-swipe {
  width: 100%;
  height: 4.5rem;
}
.swiper-img {
  width: 100%;
  height: 4.5rem;
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