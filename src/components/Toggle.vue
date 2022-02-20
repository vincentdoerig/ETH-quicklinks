<template>
  <SwitchGroup>
    <div class="flex items-center justify-between w-full">
      <SwitchLabel class="mr-4 text-sm text-gray-600 dark:text-slate-400">
        Toggle Dark Mode
      </SwitchLabel>
      <Switch
        v-model="darkMode"
        :class="[
          darkMode ? 'bg-slate-600' : 'bg-gray-200',
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500',
        ]"
      >
        <span class="sr-only">Toggle Dark Mode</span>
        <span
          :class="[
            darkMode ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
          ]"
        >
          <span
            :class="[
              darkMode
                ? 'opacity-0 ease-out duration-100'
                : 'opacity-100 ease-in duration-200',
              'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
            ]"
            aria-hidden="true"
          >

            <svg
              class="w-4 h-4 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clip-rule="evenodd"
              />
            </svg>

          </span>
          <span
            :class="[
              darkMode
                ? 'opacity-100 ease-in duration-200'
                : 'opacity-0 ease-out duration-100',
              'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
            ]"
            aria-hidden="true"
          >
            <svg
              class="w-4 h-4 text-slate-800"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>

          </span>
        </span>
      </Switch>
    </div>
  </SwitchGroup>
</template>

<script>
import { computed, ref } from 'vue'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'

export default {
  components: {
    Switch,
    SwitchGroup,
    SwitchLabel,
  },
  setup() {
    const isDark =  ref(localStorage.theme === 'dark' ||
          (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches))

    const darkMode = computed({
      get: () => isDark.value,
      set: () => {
        localStorage.theme = localStorage.theme === 'dark' ? 'light' : 'dark'
        document.body.classList.toggle('dark')
        isDark.value = !isDark.value
      },
    })

    return {
      darkMode,
    }
  },
}
</script>
