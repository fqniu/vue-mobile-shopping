<template>
  <div class="order-detail">
    <baseTitleBar
      backgroundColor="#FFF"
      :leftEle="leftEle"
      :title="title"
      titleColor="#000"
    ></baseTitleBar>
    <div class="order-content">
      <div class="bg-color"></div>
      <div class="order-state fs-24 color-fff font-bold">
        请在30分09秒内完成支付，否则将自动取消订单
      </div>
      <div
        class="
          verification-wrapper
          flex-column-center
          w702
          bg-fff
          bdr-018
          ml-24
          mb-24
        "
      >
        <div class="qr-code">
          <img src="../../assets/images/order/order-adv-img.png" alt="" />
        </div>
        <div class="yet-has">已使用</div>
        <div class="code-num flex-center-center mt-32 fs-36">
          <div class="color-8C8 font-bold">兑换码：</div>
          <div class="color-000 font-bold">8900 6080 9110</div>
        </div>
        <div class="fs-28 color-333 mt-24">
          有效使用日期：2020-11-30 至 2020-12-30
        </div>
        <div class="fs-28 color-8C8 mt-50">
          消费时请出示二位码或兑换码给商家核销
        </div>
      </div>
      <div
        class="user-address w702 bg-fff flex-between-center bdr-018 ml-24 mb-24"
      >
        <div class="address-l flex-between-center">
          <img src="../../assets/images/order/address-icon.png" alt="" />
        </div>
        <div class="address-c ml-24 flex1">
          <div class="flex-between-center">
            <div>
              <span class="fs-28 color-333">物流公司</span>
              <span class="fs-28 color-000 ml-24">顺丰快递</span>
            </div>
            <span class="logistics-check color-8C8">查看物流</span>
          </div>
          <div class="address-c-info mt-16 flex-center">
            <span class="fs-28 color-333">快递单号</span>
            <span class="fs-28 color-000 ml-24">SF1034675686323</span>
            <div class="copy ml-10 flex-center">
              <img src="../../assets/images/order/order-copy.png" alt="" />
              <!-- <img
                src="../../assets/images/order/order-copy.png"
                alt=""
                v-clipboard:copy="orderDetailData.orderId"
                v-clipboard:success="onCopySuccess"
                v-clipboard:error="onCopyError"
              /> -->
            </div>
          </div>
        </div>
      </div>
      <div class="user-address w702 bg-fff flex-between-center bdr-018 ml-24">
        <div class="address-l flex-between-center">
          <img src="../../assets/images/order/address-icon.png" alt="" />
        </div>
        <div class="address-c ml-24 flex1">
          <div class="flex-center">
            <span class="fs-30 color-000">牛先森</span>
            <span class="user-phone fs-38 color-000">15602436666</span>
            <span class="default-address-icon bdr-008">默认</span>
          </div>
          <div class="address-c-info mt-16">
            广东省广州市元岗街道南兴花园正门快递柜
          </div>
        </div>
        <div class="address-r">
          <van-icon name="arrow" color="#B3B3B3" />
        </div>
      </div>
      <div class="shop-wrapper w702 bg-fff bdr-018 ml-24 mt-24">
        <div class="flex-center mb-27">
          <div class="shop-icon flex-center-center bdr-008">
            <img src="../../assets/images/tradeCoin/store-img.png" alt="" />
          </div>
          <div class="fs-28 color-000 ml-08">牛奶旗舰店</div>
        </div>
        <div class="shop-list">
          <div class="shop-item mt-19 flex">
            <div class="shop-item-l mt-5">
              <img src="../../assets/images/order/order-adv-img.png" alt="" />
            </div>
            <div class="shop-item-r">
              <div class="flex ml-24">
                <div class="shop-item-info color-333 fs-2440">
                  小米无线充蓝牙音箱30W快充小米无线充蓝牙音箱30W快充...
                </div>
                <div class="shop-item-num color-8C8 fs-2440 ml-24">X1</div>
              </div>
              <div class="fs-24 color-8C8 mt-12 ml-24">白色</div>
              <div class="fs-28 color-000 mt-32 ml-24">￥1000.26</div>
            </div>
          </div>
          <div class="shop-item mt-19 flex">
            <div class="shop-item-l mt-5">
              <img src="../../assets/images/order/order-adv-img.png" alt="" />
            </div>
            <div class="shop-item-r">
              <div class="flex ml-24">
                <div class="shop-item-info color-333 fs-2440">
                  小米无线充蓝牙音箱30W快充小米无线充蓝牙音箱30W快充...
                </div>
                <div class="shop-item-num color-8C8 fs-2440 ml-24">X1</div>
              </div>
              <div class="fs-24 color-8C8 mt-12 ml-24">白色</div>
              <div class="fs-28 color-000 mt-32 ml-24">￥1000.26</div>
            </div>
          </div>
        </div>
        <div class="shop-price mt-48">
          <div class="flex-between-center">
            <span class="fs-24 color-8C8">商品总价</span
            ><span class="fs-24 color-000">￥1299</span>
          </div>
          <div class="flex-between-center mt-12">
            <span class="fs-24 color-8C8">运费</span
            ><span class="fs-24 color-000">￥0.00</span>
          </div>
          <div class="flex-between-center mt-12">
            <span class="fs-24 color-8C8">优惠券</span
            ><span class="fs-24 color-000">-￥299.00</span>
          </div>
          <div class="flex-between-center mt-24">
            <span class="fs-24 font-bold color-000">实付</span
            ><span class="fs-28 font-bold color-main">￥1000</span>
          </div>
        </div>
      </div>
      <div class="order-info w702 bg-fff ml-24 bdr-018 mt-24 mb-24">
        <div class="fs-30 color-000 mb-40">订单信息</div>
        <div class="order-item flex-center">
          <span class="color-8C8 fs-24 mr-40">订单编号</span>
          <span class="color-333 fs-24">9527438</span>
          <div class="copy ml-20">
            <img src="../../assets/images/order/order-copy.png" alt="" />
            <!-- <img
              src="../../assets/images/order/order-copy.png"
              alt=""
              v-clipboard:copy="orderDetailData.orderId"
              v-clipboard:success="onCopySuccess"
              v-clipboard:error="onCopyError"
            /> -->
          </div>
        </div>
        <div class="order-item">
          <span class="color-8C8 fs-24 mr-40">下单时间</span>
          <span class="color-333 fs-24">2020-10-01 10:00:00</span>
        </div>
        <div class="order-item">
          <span class="color-8C8 fs-24 mr-40">付款时间</span>
          <span class="color-333 fs-24">2020-10-01 10:05:00</span>
        </div>
        <div class="order-item">
          <span class="color-8C8 fs-24 mr-40">发货时间</span>
          <span class="color-333 fs-24">2020-10-01 12:00:00</span>
        </div>
        <div class="order-item">
          <span class="color-8C8 fs-24 mr-40">收货时间</span>
          <span class="color-333 fs-24">2020-10-05 10:00:00</span>
        </div>
        <div class="service">
          <div class="line"></div>
          <div class="contact-service" @click="contactServe()">
            <span class="iconfont alifont iconkefu mr-16 fs-32 color-8C8"></span>
            联系客服
          </div>
        </div>
      </div>
    </div>
    <div class="order-bot flex">
      <div class="cancel" v-if="false">取消订单</div>
      <div class="pay" v-if="false">立即支付</div>
      <div class="pay" v-if="false">确认收货</div>
      <div class="cancel">查看物流</div>
    </div>
  </div>
</template>

<script>
import backTitleBar from "@/components/titleBar/backTitleBar";
import baseTitleBar from "@/components/titleBar/baseTitleBar";
export default {
  name: "orderDetail",
  components: { backTitleBar, baseTitleBar },
  data() {
    return {
      leftEle: {
        iconName: "iconback",
        color: "#000",
        fontSize: ".36rem",
        method: this.back,
      },
      title: "待付款",
    };
  },
  created() {},
  computed: {},
  methods: {
    // 返回上一层
    back() {
      if (this.$getUserAgent() == 0) {
        try {
          u.native.onBack();
        } catch (e) {
          this.$router.go(-1);
        }
      } else {
        try {
          window.webkit.messageHandlers.onFinish.postMessage("close");
        } catch (e) {
          this.$router.go(-1);
        }
      }
    },
    // 复制粘贴
    onCopySuccess(e) {
      this.$toast("复制成功");
      console.log(e.text);
    },
    onCopyError() {
      this.$toast("复制失败");
    },
    // 调用原生方法 联系客服
    contactServe() {
      let params = "15917384685";
      if (this.$getUserAgent() == 0) {
        try {
          u.native.cellPhone(params);
        } catch (e) {
          console.log("原生方法未注入", e);
        }
      } else {
        try {
          window.webkit.messageHandlers.cellPhone.postMessage(params);
        } catch (e) {
          console.log("ios方法未注入", e);
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.order-detail {
  height: 100vh;
}
.order-content {
  overflow: auto;
  position: absolute;
  top: 0.88rem;
  bottom: 1.08rem;
  left: 0;
  right: 0;
}
.bg-color {
  // background: url("../../assets/images/order/bg-color.png") no-repeat;
  background: #ddd;
  width: 100%;
  height: 1.7rem;
  position: absolute;
  z-index: 1;
}
.order-state {
  position: relative;
  z-index: 2;
  text-align: center;
  margin-top: 0.32rem;
  margin-bottom: 0.24rem;
}
.verification-wrapper {
  position: relative;
  z-index: 2;
  padding: 0.4rem;
  overflow: hidden;
  .yet-has {
    font-size: 0.28rem;
    text-align: center;
    line-height: 0.6rem;
    width: 2.3rem;
    height: 0.6rem;
    color: #fff;
    background: linear-gradient(to right, #ddd 0%, #ddd 100%);
    position: absolute;
    right: -0.6rem;
    top: 0.2rem;
    transform: rotate(45deg);
  }
  .yet-lapsed {
    font-size: 0.28rem;
    text-align: center;
    line-height: 0.6rem;
    width: 2.3rem;
    height: 0.6rem;
    color: #fff;
    background: linear-gradient(to right, #dcdada 0%, #b3b3b3 100%);
    position: absolute;
    right: -0.6rem;
    top: 0.2rem;
    transform: rotate(45deg);
  }
  .code-num {
    width: 6.22rem;
    height: 0.96rem;
    background: #f5f5f5;
    border-radius: 0.96rem;
    span {
      &:nth-child(1) {
        font-size: 0.36rem;
        color: #8c8c8c;
      }
      &:nth-child(2) {
        font-size: 0.36rem;
        color: #000;
      }
    }
  }
}
.user-address {
  position: relative;
  z-index: 2;
  padding: 0.32rem 0.28rem;
  .address-l {
    width: 0.67rem;
    height: 0.67rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .user-phone {
    margin-left: 0.24rem;
    margin-right: 0.14rem;
  }
  .default-address-icon {
    width: 0.8rem;
    height: 0.34rem;
    text-align: center;
    line-height: 0.34rem;
    color: #fff;
    background: linear-gradient(90deg, #ddd 0%, #ddd 100%);
  }
  .address-c-info {
    width: 5rem;
    margin-top: 0.16rem;
  }
  .logistics-check {
    width: 1.2rem;
    height: 0.4rem;
    font-size: 0.2rem;
    text-align: center;
    border-radius: 0.4rem;
    border: 0.02rem solid #b3b3b3;
  }
}
.shop-wrapper {
  position: relative;
  z-index: 2;
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
.order-info {
  padding: 0.22rem 0.24rem 0.3rem;
  .order-item {
    margin-left: 0.12rem;
    margin-bottom: 0.29rem;
  }
}
.copy {
  width: 0.17rem;
  height: 0.17rem;
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
}
.service {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .contact-service {
    margin-top: 0.28rem;
    color: #8c8c8c;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .line {
    width: 6.3rem;
    height: 0.02rem;
    background: #e1e1e1;
  }
}
.order-bot {
  position: fixed;
  bottom: 0;
  z-index: 999;
  width: 100%;
  height: 1.08rem;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0 0.24rem;
  justify-content: flex-end;
  .cancel {
    box-sizing: border-box;
    padding: 0.19rem 0.4rem;
    font-size: 0.24rem;
    line-height: 0.4rem;
    color: #b3b3b3;
    border: 1px solid #b3b3b3;
    border-radius: 0.4rem;
  }
  .pay {
    padding: 0.2rem 0.4rem;
    font-size: 0.24rem;
    line-height: 0.4rem;
    color: #fff;
    font-weight: bold;
    background: #ccc;
    border-radius: 0.4rem;
    margin-left: 0.24rem;
  }
}
</style>