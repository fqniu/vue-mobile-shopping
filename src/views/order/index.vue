<template>
  <div>
    <div class="order">
      <div class="order-list" @click="$goRouter('orderDetail')">
        <div class="shop-wrapper w702 bg-fff bdr-018 mt-24" v-for="item in swipeList" :key="item.id">
          <div class="flex-center mb-27">
            <div class="shop-icon flex-center-center bdr-008">
              <img src="../../assets/images/tradeCoin/store-img.png" alt="" />
            </div>
            <div class="fs-28 color-000 ml-08">牛奶旗舰店</div>
          </div>
          <div class="shop-list">
            <div class="shop-item mt-19 flex">
              <div class="shop-item-l mt-5">
                <img :src="item.target" alt="" />
              </div>
              <div class="shop-item-r">
                <div class="flex ml-24">
                  <div class="shop-item-info color-333 fs-2440">
                    {{item.des}}
                  </div>
                  <div class="shop-item-num color-8C8 fs-2440 ml-24">X1</div>
                </div>
                <div class="fs-24 color-8C8 mt-12 ml-24">{{item.style}}</div>
                <div class="fs-28 color-000 mt-32 ml-24">￥998</div>
              </div>
            </div>
            <div class="shop-item mt-19 flex">
              <div class="shop-item-l mt-5">
                <img :src="item.target" alt="" />
              </div>
              <div class="shop-item-r">
                <div class="flex ml-24">
                  <div class="shop-item-info color-333 fs-2440">
                    {{item.des}}
                  </div>
                  <div class="shop-item-num color-8C8 fs-2440 ml-24">X1</div>
                </div>
                <div class="fs-24 color-8C8 mt-12 ml-24">{{item.style}}</div>
                <div class="fs-28 color-000 mt-32 ml-24">￥1999</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { homeSwipeList } from '@/api/home';

export default {
  data() {
    return {
      swipeList: []
    };
  },
  computed: {},
  methods: {
    // 轮播图数据
    async gethomeSwipeList(){
      let res = await homeSwipeList();
      // console.log(res);
      this.swipeList = res.item;
    },
  },
  created() {
    this.gethomeSwipeList()
  },
};
</script>

<style lang="scss" scoped>
.order-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.order-item {
  width: 7rem;
  height: 3rem;
  border-radius: 0.2rem;
  font-size: 0.28rem;
  font-weight: 600;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0.15rem 0.01rem #ccc;
}
.shop-wrapper {
  position: relative;
  padding: 0.32rem 0.24rem 0.4rem;
  .shop-icon {
    width: 0.98rem;
    height: 0.42rem;
    background: linear-gradient(to right, #33636f, #34626d, #3d585f, #435256);
    img {
      width: 0.42rem;
      height: 0.42rem;
    }
  }
  .shop-item-l {
    width: 1.8rem;
    height: 1.8rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .shop-item-r {
    // width: 4.5rem;
    flex: 1;
    .shop-item-info {
      width: 3.95rem;
    }
  }
}
.shop-wrapper:last-child {
  margin-bottom: 1.28rem;
}
</style>