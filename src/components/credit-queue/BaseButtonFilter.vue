<template>
  <div>
    <v-btn
      class="pr-1 filter__button text-capitalize"
      color="accent"
      block
    >
      {{ title }}
      <v-badge
        :color="color"
        :content="quantity"
        inline
      />
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { toRefs, computed } from 'vue'

interface BaseButtonFilterProps {
    title: string
    quantity: number
    color: "green" | "blue-lighten-2" | "yellow-darken-2" | "pink-lighten-2" | "orange-darken-1" | "teal-lighten-2"
}

const props = defineProps<BaseButtonFilterProps>()

const { title, quantity, color } = toRefs(props)

const boxShadowColor = {
  'green': 'rgb(69 196 96 / 30%)',
  'blue-lighten-2': 'rgb(69 142 196 / 30%)',
  'yellow-darken-2': 'rgb(196 168 69 / 30%)',
  'pink-lighten-2': 'rgb(196 69 107 / 30%)',
  'orange-darken-1': 'rgb(196 107 69 / 30%)',
  'teal-lighten-2': 'rgb(69 196 173 / 30%)'
}

const getBoxShadow = computed(() => {
  return boxShadowColor[color.value]
})
</script>

<style lang="scss" scoped>
.filter {
  &__button {
    background: rgb(0 0 0 / 73%);
    box-shadow: 0 3px 0 v-bind(getBoxShadow);
    border-radius: 6px;
  }
}
</style>
