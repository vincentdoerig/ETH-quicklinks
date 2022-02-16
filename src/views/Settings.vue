<template>
  <!-- dark:bg-slate-900 -->
  <div class="min-h-screen py-6 ">
    <main class="pb-8">
      <div class="flex-1 xl:overflow-y-auto">
        <div class="max-w-3xl px-4 py-10 mx-auto sm:px-6 lg:py-12 lg:px-8">
          <h1 class="text-3xl font-extrabold text-blue-gray-900">
            Settings
          </h1>

          <form class="mt-6 space-y-8 divide-y divide-y-blue-gray-200">
            <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
              <div class="sm:col-span-6">
                <h2 class="text-xl font-medium text-blue-gray-900">
                  General
                </h2>
                <p class="mt-1 text-sm text-blue-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, officia. Vel illum laudantium ratione eos!
                </p>
              </div>

              <div
                v-for="subject in subjects"
                :key="subject.id"
                class="overflow-hidden bg-white rounded-lg shadow dark:bg-slate-800 sm:col-span-6"
              >
                <div class="p-6">
                  <div class="relative -space-y-px rounded-md shadow-sm isolate">
                    <h3
                      v-if="subject.name"
                      class="mb-1 text-lg font-medium text-gray-900"
                    >
                      {{ subject.name }}
                    </h3>
                    <h3
                      v-else
                      class="mb-1 text-lg font-medium text-gray-500 cursor-not-allowed"
                    >
                      New Subject
                    </h3>
                    <button
                      type="button"
                      class="absolute top-0 right-0 inline-flex items-center p-1 text-gray-700 bg-red-200 rounded hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      @click="deleteSubject(subject.id)"
                    >
                      <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                    <div class="relative px-3 py-2 border border-gray-300 rounded-md rounded-b-none focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                      <label
                        for="name-2"
                        class="block text-xs font-medium text-gray-700"
                      >Subject Name</label>
                      <input
                        id="name-2"
                        v-model="subject.name"
                        type="text"
                        class="block p-0 text-gray-900 placeholder-gray-500 border-0 focus:ring-0 sm:text-sm"
                        placeholder="Analysis I"
                      >
                    </div>
                    <div class="relative px-3 py-2 border border-gray-300 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                      <label
                        for="lecturer"
                        class="block w-full text-xs font-medium text-gray-700"
                      >Lecturer</label>
                      <!-- todo: add unique id to input ids ('for' above also) -->
                      <input
                        id="lecturer"
                        v-model="subject.lecturer"
                        type="text"
                        name="lecturer"
                        class="block w-full p-0 text-gray-900 placeholder-gray-500 border-0 focus:ring-0 sm:text-sm"
                        placeholder="Prof. Albert Einstein"
                      >
                    </div>
                    <div class="relative px-3 py-2 border border-gray-300 rounded-md rounded-t-none focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                      <label
                        for="main-link"
                        class="block w-full text-xs font-medium text-gray-700"
                      >Main Link</label>
                      <input
                        id="main-link"
                        v-model="subject.mainLink"
                        type="text"
                        name="main-link"
                        class="block w-full p-0 text-gray-900 placeholder-gray-500 border-0 focus:ring-0 sm:text-sm"
                        placeholder="https://dept.ethz.ch/20xx/xx"
                      >
                    </div>
                  </div>

                  <p class="mt-1 text-sm text-blue-gray-500">
                    Additional links
                  </p>
                  <div class="flex items-center justify-between mt-2">
                    <div
                      v-for="link in subject.links"
                      :key="link.href"
                    >
                      <div class="-space-y-px rounded-md shadow-sm isolate">
                        <div class="relative px-3 py-2 border border-gray-300 rounded-md rounded-b-none focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                          <label
                            for="name"
                            class="block text-xs font-medium text-gray-700"
                          >Link Label</label>
                          <input
                            id="name"
                            v-model="link.label"
                            type="text"
                            name="name"
                            class="block p-0 text-gray-900 placeholder-gray-500 border-0 focus:ring-0 sm:text-sm"
                            placeholder="Script"
                          >
                        </div>
                        <div class="relative px-3 py-2 border border-gray-300 rounded-md rounded-t-none focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                          <label
                            for="job-title"
                            class="block w-full text-xs font-medium text-gray-700"
                          >Link Destination</label>
                          <input
                            id="job-title"
                            v-model="link.href"
                            type="text"
                            name="job-title"
                            class="block w-full p-0 text-gray-900 placeholder-gray-500 border-0 focus:ring-0 sm:text-sm"
                            placeholder="https://xxx"
                          >
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <PlusSmIconSolid
                        class="-ml-0.5 mr-2 h-4 w-4"
                        aria-hidden="true"
                      />
                      new link
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              class="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              @click="addNewSubject"
            >
              new subject
            </button>
          </form>
        </div>

        <div class="flex justify-end pt-8">
          <button
            type="button"
            class="px-4 py-2 text-sm font-medium bg-white border border-gray-300 rounded-md shadow-sm text-blue-gray-900 hover:bg-blue-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Save
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { storeToRefs } from 'pinia'
import { defineComponent } from 'vue'
import { PlusSmIcon as PlusSmIconSolid } from '@heroicons/vue/solid'
import { useLinkStore } from '../store'

export default defineComponent({
  components: {
    PlusSmIconSolid,
  },

  setup() {
    const store = useLinkStore()

    const { subjects } = storeToRefs(store)

     const addNewSubject = () => {
      store.addSubject({
        id: subjects.value.length, // TODO: change to uuid
        name: '',
        lecturer: '',
        mainLink: '',
        links: [
          {
            label: '',
            href: '',
          },
        ],
      })
    }

    const deleteSubject = (id: number) => {
      store.removeSubject(id)
    }

    return { subjects, addNewSubject, deleteSubject }
  },


})
</script>
