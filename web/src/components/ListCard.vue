<template>
  <m-card :title="title" :icon="icon">
    <template v-slot:card-body>
      <div class="nav jc-between">
        <div
          class="nav-item"
          :class="{ active: active === i }"
          v-for="(category, i) in categories"
          :key="i"
          @click="active = i"
        >
          <div class="nav-link">{{category.name}}</div>
        </div>
      </div>

      <div class="pt-2">
        <swiper>
          <swiper-slide v-for="(category, i) in categories" :key="i">
              <slot name="items" :category="category"></slot>
          </swiper-slide>
        </swiper>
      </div>
    </template>
  </m-card>
</template>

<script>
export default {
  props: {
    icon: { type: String, require: true },
    title: { type: String, require: true },
    categories: { type: true, require: true },
  },
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>
</style>