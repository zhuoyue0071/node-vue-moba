<template>
  <div class="home">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <img class="w-100" src="../assets/images/swiper1.jpeg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/swiper2.jpeg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/swiper3.jpeg" alt="" />
      </swiper-slide>
      <div
        class="swiper-pagination pagination-home text-right px-3 pb-1"
        slot="pagination"
      ></div>
    </swiper>

    <!-- end of swiper -->

    <div class="nav-icons bg-white mt-3 text-center pt-3 text-grey-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 4" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
        <div class="nav-item mb-3" v-for="v in 6" :key="v + 6">
          <i class="sprite sprite-story"></i>
          <div class="py-2">故事站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm d-flex ai-center jc-center">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>

    <!-- end of nav icons -->
    <m-list-card icon="Menu" title="新闻资讯" :categories="newsCats">
      <template #items="{ category }">
        <div class="py-2 card-item" v-for="(news, i) in category.newsList" :key="i">
          <span>{{ news.categoryName }}</span>
          <span> |</span>
          <span>{{ news.title }}</span>
          <span>{{ news.date }}</span>
        </div>
      </template>
    </m-list-card>

    <p>gogog</p>
    <p>gogog</p>
    <p>gogog</p>
    <p>gogog</p>
    <p>gogog</p>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".pagination-home",
        },
        // Some Swiper option/callback...
      },
      newsCats: [
        {
          name: "热门",
          newsList: new Array(5).fill({}).map((v) => ({
            categoryName: "热门",
            title: "元歌皮肤设计大赛精彩创意赏析第十二期",
            date: "04/03",
          })),
        },
        {
          name: "新闻",
          newsList: new Array(5).fill({}).map((v) => ({
            categoryName: "新闻",
            title: "又至一年花朝，斗鱼花朝节限定福利如约而至",
            date: "04/03",
          })),
        },
        {
          name: "公告",
          newsList: new Array(5).fill({}).map((v) => ({
            categoryName: "公告",
            title: "3月4日体验服停机更新公告",
            date: "04/03",
          })),
        },
        {
          name: "活动",
          newsList: new Array(5).fill({}).map((v) => ({
            categoryName: "活动",
            title:
              "【微信用户专属】微信小程序“游戏礼品站”购买花朝节限定皮肤抽免单活动",
            date: "04/03",
          })),
        },
        {
          name: "赛事",
          newsList: new Array(5).fill({}).map((v) => ({
            categoryName: "供稿",
            title: "K甲第三周回顾：MD持续霸榜，中游战况胶着",
            date: "04/03",
          })),
        },
      ],
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/variables";
.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors, "white");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border: none;
    }
  }
}
.card-item {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>