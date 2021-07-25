<template>
  <div class="back-top">
    <div class="up">顶部</div>
  </div>
</template>
<script>
export default {
  name: "backTop",
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.back-top {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  color: #fff;
  background: rgba(226, 34, 34, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 0.2rem;
  bottom: 1.6rem;
  z-index: 999;
}
</style>