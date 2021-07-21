<template>
  <div  class="home">
    <div class="main-page-wrapper">
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,idx) in swipeList" :key="idx">
        <img :src="item.target" alt="" class="swiper-img">
      </van-swipe-item>
    </van-swipe>
    
    <!-- 数据列表 -->
    <div class="content">
      <LoadMore :onLoadMore="onLoadMore" :enableLoadMore="enableLoadMore">
        <div
          class="advert-item click w702 bg-fff ml-24"
          v-for="(item, idx) in data"
          :key="idx"
          @click="gotoAdvDetail(item.resource_id)" 
        >
          <div class="adv-left">
            <div class="fs-30 color-000 flex-center">
              <span
                class="label fs-24"
                :class="{
                  label: item.atlas.category == 'A级',
                  label2: item.atlas.category == 'B级',
                  label3: item.atlas.category == 'C级',
                  label4: item.atlas.category == 'D级',
                }"
                >{{ item.atlas.category }}
              </span>
              <span class="adv-title font-bold text-el">{{ item.resource_info }}</span>
            </div>
            <div class="flex-center mt-15">
              <div class="tag fs-24 text-el">{{ item.businessName }}</div>
              <div class="line"></div>
            </div>
            <div class="fs-24 color-333 mt-10 text-el" style="width: 4.9rem">
              {{ item.atlas.desc }}
            </div>
            <div class="mt-24">
              <span class="coin fs-28">收藏量{{ item.atlas.like_count }}</span>
              <span class="qty fs-20 ml-24">曝光量{{ item.atlas.favorite_count }}</span>
            </div>
          </div>
          <div class="adv-right">
            <div class="adv-img">
              <img :src="item.target" alt="" />
            </div>
            <div class="dist fs-20">
              {{ item.atlas.sender.username}}
            </div>
          </div>
        </div>
      </LoadMore>
    </div>
    </div>
  </div>
</template>

<script>
import LoadMore from "../components/loadMore";
import { homeSwipeList, homeGoodsList } from '@/api/home';

export default {
  name: "index",
  components: {
    LoadMore,
  },
  data() {
    return {
      data: [],
      swipeList: [],
      page: 1,
      limit: 5,
      enableLoadMore: true,
    };
  },
  methods: {
    onLoadMore(done) {
      setTimeout(() => {
        if (!this.enableLoadMore) {
          return;
        }
        this.page = this.page + 1;
        this.getListData();
        done();
      }, 200);
    },
    getListData() {
      let params = {
        // 页数
        page: this.page,
        limit: this.limit,
      };
      homeGoodsList(params).then((res) => {
        // console.log(res);
        if(res.code == 200){
          if (this.data.length > res.item.total) {
            this.enableLoadMore = false;
          }
          this.data = this.data.concat(res.item.resultList);
        } else {
          console.log('接口错误');
        }
      });
    },
    // 筛选后发送请求数据方法
    async goodsList() {
      // 筛选条件
      let params = {
        // 页数
        page: this.page,
        limit: this.limit
      };
      // console.log(params);
      let res = await homeGoodsList(params);
      // console.log(res);
      this.data = res.item.resultList;
    },
    // 轮播图数据
    async gethomeSwipeList(){
      let res = await homeSwipeList();
      // console.log(res);
      this.swipeList = res.item;
    },
    gotoAdvDetail(id){
      console.log(id);
      this.$router.push({path:'/detail', query: { id: id }})
    }
  },
  created() {
    this.gethomeSwipeList();
    this.goodsList();
  },
  mounted() {
    window.addEventListener("scroll",() => {
      let top =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(11122, top);
      // if (top > 700) {
      //     this.scrollTag = true;
      // } else {
      //     this.scrollTag = false
      // }
    },true);
    // })
  },
};
</script>

<style lang="scss" scope>
.home{
  width: 100%;
  height: 100%;
}
.main-page-wrapper {
  position: relative;
  overflow: auto;
}
.content {
  height: 100%;
  margin-bottom: 1.2rem;
}
// 轮播图
.my-swipe{
  width: 100%;
  height: 4.5rem;
}
.swiper-img{
  width: 100%;
  height: 4.5rem;
}
// 这部分是列表
.advert-item {
  height: 2.43rem;
  padding: 0.26rem 0.24rem 0;
  display: flex;
  justify-content: space-between;
  border-radius: 0.18rem;
  margin-top: 0.18rem;
  .label {
    width:1.1rem;
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
    width: 1.6rem;
    height: .24rem;
    overflow: hidden;
  }
}
</style>