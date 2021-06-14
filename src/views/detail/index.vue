<template>
  <div class="detail">
    <baseTitleBar backgroundColor="#FFF" :leftEle="leftEle" :title="title" titleColor="#000"></baseTitleBar>
    <div class="detail_wrapper" v-if="detailData.atlas">
      <img :src="detailData.target" alt="" class="detail_img">
      <div class="title mg24">描述</div>
      <div class="detail_text mg24">
        {{detailData.atlas.desc}}
      </div>
      <div class="detail_type mg24">类型：{{detailData.atlas.category}}</div>
      <div class="detail_count mg24">
        <span class="like_count">喜欢：{{detailData.atlas.like_count}}</span>
        <span class="favorite_count">收藏：{{detailData.atlas.favorite_count}}</span>
      </div>
      <div v-if="detailData.sender">作者：{{detailData.sender.username}}</div>
    </div>
  </div>
</template>

<script>
import baseTitleBar from "@/components/titleBar/baseTitleBar";
import { detailInfo } from '@/api/detail';

export default {
  name: "detail",
  components:{
    baseTitleBar
  },
  data() {
    return {
      id: "",
      detailData: {},
      leftEle:{
        iconName:'iconback',
        color:'#000',
        fontSize:'.36rem',
        method: this.back
      },
      title:'详情',
    };
  },
  computed: {},
  created() {
    console.log(this.$route.query.id);
    this.id = this.$route.query.id
    this.getData()
  },
  methods: {
    // 返回上一层
    back(){
      if(this.$getUserAgent() == 0){
        try{
          u.native.onBack();
        }catch (e) {
          this.$router.go(-1)
        }
      } else {
        try{
          window.webkit.messageHandlers.onFinish.postMessage("close");
        }catch (e) {
        this.$router.go(-1)
        }
      }
    },
    async getData(){
      let params = {
        resource_id: this.id
      }
      let res = await detailInfo(params)
      this.detailData = res.item
      console.log(res);
    }
  },
};
</script>

<style lang="scss" scoped>
.detail_img{
  width: 100%;
  height: 5rem;
}
.mg24{
  margin: 0 .24rem;
}
.title{
  font-size: .32rem;
  color: #000;
  font-weight: 600;
  margin-top: .2rem;
}
.detail_text{
  font-size: .30rem;
  color: #000;
  font-weight: 600;
  margin-top: .2rem;
}
.detail_type{
  font-size: .28rem;
  color: #000;
  font-weight: 600;
  margin-top: .2rem;
}
.detail_count{
  font-size: .28rem;
  color: #aaa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: .2rem;
}
</style>