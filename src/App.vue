<template>
  <!-- <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"> -->
  <!-- <div class="max-w-5xl mx-auto my-6"> -->
  <div>
    <router-view />
  </div>
  <!-- </div> -->
  <!-- </div> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useLinkStore } from './store'

export default defineComponent({
  components: {},
  setup() {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }

    const store = useLinkStore()
    const fromStorage = localStorage.getItem(store.$id)
    if (fromStorage) store.$patch(JSON.parse(fromStorage))
    store.$subscribe((_, state) => {
      // persist the whole state to the local storage whenever it changes
      localStorage.setItem('links', JSON.stringify(state))
    })
  },
})
</script>
