<script setup>
import { useLinkStore } from '../store'

const store = useLinkStore()

const templateOptions = [
  {
    label: 'Semester 1',
    value: 'semester1',
  },
  {
    label: 'Semester 2',
    value: 'semester2',
  },
  {
    label: 'Semester 3',
    value: 'semester3',
  },
  {
    label: 'Semester 4',
    value: 'semester4',
  },
]

const setSubjects = (semester) => {
  store.useSemesterSubjectTemplate(semester)
}
</script>

<template>
  <div>
    <div class="mt-3 flex items-center">
      <h3 class="text-sm font-medium text-gray-400 pr-4">
        Informatik Bachelor:
      </h3>
      <div class="flex gap-2">
        <button
          v-for="(option, i) in templateOptions"
          :key="i"
          type="button"
          class="inline-flex items-center px-2 py-1 text-xs font-medium text-white bg-gray-700 border border-gray-300 rounded-md shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          @click="setSubjects(option.value)"
        >
          {{ option.label }}
        </button>
      </div>
    </div>
    <p
      v-if="$route.fullPath === '/'"
      class="text-sm text-gray-600 dark:text-gray-300 mt-2"
    >
      Feel free to send me an email or open a PR if you want to contribute a new template.
    </p>
  </div>
</template>
