<template>
  <div class="waterfall-container" ref="container">
    <div class="content" ref="content" v-show="!isFirstLoading">
      <template v-for="item in originData">
        <slot v-bind="item"></slot>          
      </template>
    </div>
    <!-- <slot name="first-loading">
      <div class="first-loading" v-show="isFirstLoading">
        <span class="loading-text">Loaing...</span>
      </div>
    </slot>

    <slot name="pull-loading">
      <div class="pull-loading" v-show="isPullLoading">
        <span class="loading-text">Loaing2...</span>
      </div>
    </slot> -->
  </div>
</template>
<style scoped>
.waterfall-container {
  width: 100%;
}
.waterfall-container .content {
  position: relative;
  /* border: 1px solid red; */
}
.waterfall-container .content div[data-wf] {
  visibility: hidden;
}
/* .waterfall-container .first-loading {
  position: relative;
  height: 100%;
}
.waterfall-container .first-loading .loading-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
}
.waterfall-container .pull-loading {

} */
</style>

<script>
// 自定义loading
export default {
  name: 'vue-waterfall-simple',
  data () {
    return {
      firstRowHeight: [],
      minHeightIdx: 0,
      currentIdx: 0, // 当前加载图片索引
      itemList: [],
      imgArr: [], // 图片资源数组
      imgCounter: 0, // 判断图片加载完成计数器
      isFirstLoading: false, // 是否首次加载中
      isPullLoading: false, // 是否上拉加载中
      isLoadData: false // 控制数据流入
    }
  },
  props: {
    originData: {
      type: Array,
      required: true
    },
    containerWidth: {
      type: Number,
      required: true
    },
    columnWidth: {
      type: Number,
      required: true
    },
    columnNum: {
      type: Number
    },
    gapWidth: {
      type: Number,
      default: 30
    },
    gapHeight: {
      type: Number,
      default: 30
    }
  },
  mounted () {
    this.handleImagesLoad()
  },
  watch: {
    'originData': function () {
      if (!this.isLoadData) return
      this.isLoadData = false
      this.$nextTick(function () {
        // console.log('[开始]')
        this.handleImagesLoad()
      })
    }
  },
  methods: {
    // 判断图片是否加载完成
    handleImagesLoad: function () {
      this.imgArr = Array.prototype.slice.call(this.$refs.content.getElementsByTagName('img'))
      let tempImgLength = this.imgArr.length // 缓存当前图片数量
      // 是否存在图片
      if (tempImgLength > 0) {
        for (let i = this.imgCounter; i < tempImgLength; i++) {
          let timer = setInterval(() => { // 全部图片加载完成
            if (this.imgArr[i].complete) {
              this.imgCounter++
              // console.log('当前计数器：' + this.imgCounter)
              // console.log('总数：' + tempImgLength)
              if (this.imgCounter === tempImgLength) {
                // console.log('渲染')
                this.renderWaterfall()
              }
              clearInterval(timer)
            }
          }, 50)
          this.imgArr[i].onerror = () => {
            this.imgCounter++
            console.error('[Init Waterfall failed]: Image load failed')
          }
        }
      } else {
        this.renderWaterfall()
      }
    },
    // 初始化
    initWaterFall: function () {
      if (!this.validator()) return
      let containerWidth = this.containerWidth
      this.itemList = this.$refs.content.childNodes
      // column列数
      let columnNum = Math.floor((containerWidth + this.gapWidth) / (this.columnWidth + this.gapWidth))
      // 排列第一排
      for (var i = 0; i < this.itemList.length && i < columnNum; i++) {
        this.itemList[i].style.position = 'absolute'
        this.itemList[i].style.visibility = 'visible'
        this.itemList[i].style.left = i * (this.columnWidth + this.gapWidth) + 'px'
        this.itemList[i].style.width = this.columnWidth + 'px'
        this.firstRowHeight.push(this.itemList[i].offsetHeight)
      }
      this.currentIdx = i
      this.renderWaterfall()
    },
    // 二次渲染
    renderWaterfall: function () {
      if (this.currentIdx === 0) {
        this.initWaterFall()
        return
      }
      this.itemList = this.$refs.content.childNodes
      for (var i = this.currentIdx; i < this.imgCounter / 2; i++) {
        // 计算最小值的第一次出现的索引
        this.minHeightIdx = this.firstRowHeight.indexOf(Math.min.apply(null, this.firstRowHeight))
        this.itemList[i].style.position = 'absolute'
        this.itemList[i].style.visibility = 'visible'
        this.itemList[i].style.top = this.firstRowHeight[this.minHeightIdx] + this.gapHeight + 'px'
        this.itemList[i].style.left = this.itemList[this.minHeightIdx].offsetLeft + 'px'
        this.itemList[i].style.width = this.columnWidth + 'px'
        this.firstRowHeight[this.minHeightIdx] += this.gapHeight + this.itemList[i].offsetHeight
      }
      this.$refs.content.style.height = Math.max.apply(null, this.firstRowHeight) + 'px'
      this.currentIdx = i
      this.isLoadData = true
      // console.log('[结束]')
    },
    // 参数校验
    validator: function () {
      if (this.originData.length === 0) {
        console.error('[Init Waterfall failed]: Data length must > 0')
        return false
      }
      return true
    }
  }
}
</script>