<template>
  <div class="report-page">
    <my-header
      title="检查报备"
      left-text="首页"
      @click-left="onClickLeft"
    ></my-header>

    <div class="scroll-wrapper" v-if="tabs">
      <div class="search-input">
        <img src="@/assets/images/icon-inner_search.png" />
        <input
          type="text"
          v-model="keyword"
          placeholder="请输入报备内容"
          v-debounce="{ handler: handleSearch, event: 'input', wait: 1000 }"
        />
      </div>

      <ul class="tab-bar">
        <li
          v-for="(item, key) in tabs"
          :key="key"
          class="tab-item"
          :class="{ active: active == key }"
          @click="active = key"
        >
          {{ item }}
        </li>
      </ul>

      <div class="tab-content">
        <van-list
          v-if="dataList && dataList.length"
          v-model="loading"
          :finished="isFinished"
          finished-text="没有更多了"
          @load="loadMore"
        >
          <report-item
            v-for="item in dataList"
            :key="item.id"
            :item="item"
            @click="handleItemClick(item)"
          ></report-item>
        </van-list>
        <no-data v-else></no-data>
      </div>
    </div>
    <div class="footer" v-if="roleList.includes('BRAND_HOTEL_MANAGER')">
      <router-link tag="div" class="btn" to="/report/create">
        创建报备
      </router-link>
    </div>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import ReportItem from './components/ReportItem'
import NoData from '@/components/NoData'

import { getInpectionReportList } from '@/api/report'
// 起到缓存的作用，只有刷新才会重置active
let defaultActive = 0
export default {
  components: {
    MyHeader,
    ReportItem,
    NoData
  },
  data() {
    return {
      active: this.$route.query.active || defaultActive,
      keyword: '',
      currentPage: 1,
      pageSize: 10,
      dataList: [],
      loading: false,
      isFinished: true
    }
  },
  created() {
    if (
      !this.roleList.some(role =>
        ['BRAND_HOTEL_MANAGER', 'BRAND_AREA_MANAGER'].includes(role)
      )
    ) {
      this.$router.replace('/401')
    }
  },
  mounted() {
    this.handleSearch()
  },
  computed: {
    roleList() {
      return this.$store.state.user.roleList
    },
    tabs() {
      if (this.roleList.includes('BRAND_HOTEL_MANAGER')) {
        return {
          0: '全部',
          1: '待提交',
          2: '待审核',
          3: '已通过',
          4: '已驳回',
          5: '已失效'
        }
      } else if (this.roleList.includes('BRAND_AREA_MANAGER')) {
        return {
          0: '全部',
          2: '待审核',
          3: '已通过',
          4: '已驳回',
          5: '已失效'
        }
      }
      return null
    },
    userType() {
      if (this.roleList.includes('BRAND_AREA_MANAGER')) {
        return 2
      }
      return 1
    }
  },
  methods: {
    onClickLeft() {
      this.$router.replace('/')
    },
    async handleSearch() {
      this.currentPage = 1
      this.dataList = await this.getDataList()
    },
    async getDataList() {
      this.$loading.show()
      try {
        const res = await getInpectionReportList({
          pageSize: this.pageSize,
          currentPage: this.currentPage,
          classify: +this.active,
          searchContent: this.keyword,
          userType: this.userType
        })
        this.$loading.hide()
        let resultList = []
        if (res.code === 0 && res.item) {
          resultList = res.item.list || []
          this.isFinished = res.item.list.length < this.pageSize
          // this.isFinished = res.item.isLastPage
        } else {
          this.$toast(res.message)
        }
        return resultList
      } catch (error) {
        console.error(error)
        this.$loading.hide()
        return []
      }
    },
    async loadMore() {
      this.loading = true
      this.currentPage++
      this.dataList = this.dataList.concat(await this.getDataList())
      this.loading = false
    },
    handleItemClick(item) {
      if (!item || !item.id) return
      // 店长待提交跳到编辑页面
      if (item.status === 1 && this.roleList.includes('BRAND_HOTEL_MANAGER')) {
        this.$router.push('/report/edit/' + item.id)
        return
      }
      // 区域经理待审核跳到审批页面
      if (item.status == 2 && this.roleList.includes('BRAND_AREA_MANAGER')) {
        this.$router.push('/report/approval/' + item.id)
        return
      }
      this.$router.push('/report/detail/' + item.id)
    }
  },
  watch: {
    active(val) {
      defaultActive = val
      this.handleSearch()
    }
  }
}
</script>

<style lang="scss" scoped>
.report-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  height: var(--vh100, 100vh);
  .scroll-wrapper {
    background: #f5f6fb;
    padding: 0.3rem 0.3rem 0;
    height: 100%;
    flex: 1;
    overflow-y: auto;
    .search-input {
      width: 6.92rem;
      height: 0.72rem;
      margin: 0 auto;
      display: flex;
      align-items: center;
      background: #ffffff;
      border-radius: 0.36rem;
      img {
        height: 0.24rem;
        margin-left: 0.36rem;
      }
      input {
        margin-left: 0.16rem;
        margin-right: 0.32rem;
        font-size: 0.26rem;
        font-weight: 400;
        color: $primaryColor;
        width: 100%;
        &::placeholder {
          color: #cdcdcd;
        }
        /* IE 10–11 */
        &:-ms-input-placeholder {
          color: #cdcdcd;
        }
        /* Firefox 19-50 */
        &::-moz-placeholder {
          color: #cdcdcd;
        }
        ::-webkit-input-placeholder {
          color: #cdcdcd;
        }
      }
    }

    .tab-bar {
      display: flex;
      margin-top: 0.36rem;
      overflow-x: auto;
      .tab-item {
        flex-shrink: 0;
        height: 0.68rem;
        font-size: 0.28rem;
        color: #65687f;
        font-weight: 400;
        position: relative;
        transition: color 0.5s;
        & + .tab-item {
          margin-left: 0.56rem;
        }
        &.active {
          color: $primaryColor;
          font-weight: 600;
          &::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            width: 0.42rem;
            height: 0.06rem;
            background: $primaryColor;
            border-radius: 0.03rem;
          }
        }
      }
    }

    // 这里注释可以让搜索框和tabbar会随着页面一起滚动，使得滚动区域变大一点
    // .tab-content {
    // height: calc(100% - 1.76rem);
    // flex: 1;
    // overflow-y: auto;
    // }
  }
  .footer {
    background: #ffffff;
    box-shadow: 0 -0.04rem 0.08rem rgba(223, 223, 223, 0.3);
    padding: 0.3rem;
    .btn {
      padding: 0.22rem 0;
      text-align: center;
      border-radius: 0.08rem;
      height: 100%;
      background: $primaryColor;
      font-size: 0.32rem;
      color: #ffffff;
      line-height: 0.44rem;
      cursor: pointer;
    }
  }
}
</style>