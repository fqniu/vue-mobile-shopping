<template>
  <div class="page_search_container">
    <van-icon name="arrow-left" size="28" @click="$emit('back')" />
    <div class="search_wrap">
      <van-icon name="search" size="20" />
      <input type="text" class="field_control" :placeholder="placeholder" v-model="value">
      <div class="search_btn click" @click="onSearch">搜索</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  props: {
    placeholder: {
      type: String,
      default: '请输入搜索关键字'
    },
    search: {
      type: Function
    }
  },
  methods: {
    onSearch() {
      this.$emit('search', this.value);
    }
  }
}
</script>

<style scoped>
  .page_search_container {
    height: .88rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
  }
  .search_wrap {
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: .18rem;
    background: #FFFFFF;
    border: 0.04rem solid #FECA00;
    opacity: 1;
    border-radius: .3rem;
    padding-left: .43rem;
    box-sizing: border-box;
    height: .73rem;
  }
  .field_control {
    display: block;
    /* box-sizing: border-box; */
    flex: 1;
    min-width: 0;
    margin: 0;
    padding: 0;
    color: #323233;
    line-height: inherit;
    text-align: left;
    background-color: transparent;
    outline: none;
    border: 0;
    resize: none;
    margin-left: 0.08rem;
    font-size: .28rem;
  }
  .search_btn {
    width: 1.34rem;
    height: 0.73rem;
    background: #FECA00;
    border-radius: .3rem;
    text-align: center;
    font-size: .32rem;
    /* font-family: PingFang SC; */
    font-weight: 400;
    line-height: 0.73rem;
    color: #FFFFFF;
    opacity: 1;
  }
</style>
