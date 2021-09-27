<template>
  <div>
    <Links
      :time="time"
      :date="date"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import Links from '../components/Links.vue'

const time = ref(new Date().toLocaleTimeString())
const date = ref(new Date().toLocaleDateString())

const interval = setInterval(() => time.value = new Date().toLocaleTimeString(), 1000)

export default defineComponent({
  components: {
    Links,
  },

  setup() {
    return { time, date }
  },
  beforeUnmount() {
    clearInterval(interval)
  },
})
</script>
