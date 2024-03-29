<template>
  <!-- dark:bg-slate-900 -->
  <div class="min-h-screen">
    <main class="pb-8">
      <div class="max-w-6xl px-4 py-10 mx-auto sm:px-6 lg:py-12 lg:px-8">
        <header>
          <div class="flex flex-col mb-8">
            <h1 class="order-1 mt-2 text-3xl font-extrabold text-blue-gray-900">
              Settings
            </h1>
            <NavBar />
          </div>

          <div class="hidden p-4 mt-4 bg-blue-900 rounded-md dark:block">
            <div class="flex">
              <div class="flex-shrink-0">
                <MoonIcon
                  class="w-5 h-5 text-blue-200"
                  aria-hidden="true"
                />
              </div>
              <div class="flex-1 ml-3 md:flex md:justify-between">
                <p class="text-sm text-blue-100">
                  Dark mode for the settings page coming soon™.
                </p>
              </div>
            </div>
          </div>
        </header>

        <div class="grid lg:grid-cols-12 gap-6">
          <div class="lg:col-span-9">
            <form class="mt-6">
              <div class="space-y-6">
                <div>
                  <h2 class="text-xl font-medium text-gray-900">
                    Subjects
                  </h2>
                  <p class="mt-1 text-sm text-gray-800">
                    Add, edit and delete subjects or reset all. Everything is saved locally
                    (<code class="text-sm text-gray-900">localStorage</code>).
                  </p>
                </div>

                <!-- empty state -->
                <div
                  v-if="subjects.length == 0"
                  class="text-center"
                >
                  <svg
                    class="w-12 h-12 mx-auto text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      vector-effect="non-scaling-stroke"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                    />
                  </svg>
                  <h3 class="mt-2 text-sm font-medium text-gray-900">
                    No subjects
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">
                    Get started by adding a new subject. Or choose one of the templates below.
                  </p>
                  <SemesterTemplateSelect class="flex justify-center" />
                </div>

                <div
                  v-for="subject in subjects"
                  :key="subject.id"
                  class="bg-white rounded-lg shadow"
                >
                  <!-- dark:bg-slate-800 -->
                  <div class="px-6 pb-6 pt-4">
                    <div
                      class="relative -space-y-px rounded-md shadow-sm isolate"
                    >
                      <div class="z-10 sticky top-0 bg-white py-2 mb-1">
                        <h3
                          v-if="subject.name"
                          class="mb-1 text-lg font-medium text-gray-900"
                        >
                          {{ subject.name }}
                        </h3>
                        <h3
                          v-else
                          class="mb-1 text-lg font-medium text-gray-500"
                        >
                          New Subject
                        </h3>
                      </div>

                      <button
                        type="button"
                        :title="`Delete &quot;${subject.name}&quot; (including its schedule entries).`"
                        class="absolute top-0 right-0 z-30 inline-flex items-center p-1 text-red-800 bg-red-100 border rounded border-red-50 hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
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
                      <div class="relative">
                        <div
                          class="relative px-3 py-2 border border-gray-300 rounded-md rounded-b-none focus-within:z-10 focus-within:ring-1 focus-within:ring-blue-600 focus-within:border-blue-600"
                        >
                          <label
                            :for="`name-${subject.id}`"
                            class="block text-xs font-medium text-gray-700"
                          >Subject Name</label>
                          <input
                            :id="`name-${subject.id}`"
                            v-model="subject.name"
                            type="text"
                            :name="`name-${subject.id}`"
                            class="block w-full p-0 text-gray-900 placeholder-gray-500 border-0 focus:ring-0 sm:text-sm"
                            placeholder="Elektrodynamik"
                          >
                        </div>
                        <div
                          class="relative px-3 py-2 border border-gray-300 focus-within:z-10 focus-within:ring-1 focus-within:ring-blue-600 focus-within:border-blue-600"
                        >
                          <label
                            :for="`lecturer-${subject.id}`"
                            class="block w-full text-xs font-medium text-gray-700"
                          >Lecturer</label>
                          <input
                            :id="`lecturer-${subject.id}`"
                            v-model="subject.lecturer"
                            type="text"
                            :name="`lecturer-${subject.id}`"
                            class="block w-full p-0 text-gray-900 placeholder-gray-500 border-0 focus:ring-0 sm:text-sm"
                            placeholder="Prof. Albert Einstein"
                          >
                        </div>
                        <div
                          class="relative px-3 py-2 border border-gray-300 rounded-md rounded-t-none focus-within:z-10 focus-within:ring-1 focus-within:ring-blue-600 focus-within:border-blue-600"
                        >
                          <label
                            :for="`main-link-${subject.id}`"
                            class="block w-full text-xs font-medium text-gray-700"
                          >Main Link</label>
                          <input
                            :id="`main-link-${subject.id}`"
                            v-model="subject.mainLink"
                            type="text"
                            :name="`main-link-${subject.id}`"
                            class="block w-full p-0 text-gray-900 placeholder-gray-500 border-0 focus:ring-0 sm:text-sm"
                            placeholder="https://dept.ethz.ch/20xx/xx"
                          >
                        </div>
                      </div>
                      <div class="ml-4">
                        <p class="mt-3 text-sm font-medium text-gray-800">
                          Link collection
                        </p>
                        <div class="grid gap-4 mt-2 md:grid-cols-2">
                          <div
                            v-for="link in subject.links"
                            :key="link.id"
                          >
                            <div class="-space-y-px rounded-md shadow-sm isolate">
                              <div
                                class="relative px-3 py-2 border border-gray-300 rounded-md rounded-b-none focus-within:z-10 focus-within:ring-1 focus-within:ring-blue-600 focus-within:border-blue-600"
                              >
                                <label
                                  :for="`label-${link.id}`"
                                  class="block text-xs font-medium text-gray-700"
                                >Link Label</label>
                                <input
                                  :id="`label-${link.id}`"
                                  v-model="link.label"
                                  type="text"
                                  :name="`label-${link.id}`"
                                  class="block w-full p-0 text-gray-900 placeholder-gray-500 border-0 focus:ring-0 sm:text-sm"
                                  placeholder="Script"
                                >
                              </div>
                              <div
                                class="relative px-3 py-2 border border-gray-300 focus-within:z-10 focus-within:ring-1 focus-within:ring-blue-600 focus-within:border-blue-600"
                              >
                                <label
                                  :for="`href-${link.id}`"
                                  class="block text-xs font-medium text-gray-700"
                                >Link Destination</label>
                                <input
                                  :id="`href-${link.id}`"
                                  v-model="link.href"
                                  type="text"
                                  :name="`href-${link.id}`"
                                  class="block w-full p-0 text-gray-900 placeholder-gray-500 border-0 focus:ring-0 sm:text-sm"
                                  placeholder="https://xxx"
                                >
                              </div>

                              <button
                                type="button"
                                class="relative inline-flex items-center w-full p-1 px-3 py-2 text-sm text-red-800 border border-gray-300 rounded-md rounded-t-none hover:bg-red-100 bg-red-50 focus-within:z-10 focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600"
                                @click="deleteSubjectLink(subject.id, link.id)"
                              >
                                Delete Link
                              </button>
                            </div>
                          </div>
                          <button
                            type="button"
                            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 h-fit"
                            @click="addNewSubjectLink(subject.id)"
                          >
                            <PlusSmIcon
                              class="-ml-0.5 mr-2 h-4 w-4"
                              aria-hidden="true"
                            />
                            New Link
                          </button>
                        </div>
                      </div>

                      <div class="ml-4">
                        <p class="mt-3 text-sm font-medium text-gray-800">
                          Schedule
                        </p>
                        <p class="text-sm text-gray-500">
                          Add when your lectures and exercises are scheduled.
                        </p>
                        <!-- TODO maybe add md:grid-cols-2 -->
                        <div class="grid gap-4 mt-2">
                          <div
                            v-for="entry in subject.schedule"
                            :key="entry.id"
                          >
                            <div
                              class="grid border p-6 rounded-md shadow grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6"
                            >
                              <div class="sm:col-span-2">
                                <label
                                  :for="`type-${entry.id}`"
                                  class="block text-sm font-medium text-gray-700"
                                >Type</label>
                                <select
                                  :id="`type-${entry.id}`"
                                  v-model="entry.type"
                                  :name="`type-${entry.id}`"
                                  class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                                >
                                  <option value="lecture">
                                    Lecture
                                  </option>
                                  <option value="exercise">
                                    Exercise
                                  </option>
                                  <option value="lab">
                                    Lab
                                  </option>
                                  <option value="other">
                                    Other
                                  </option>
                                </select>
                              </div>
                              <div class="sm:col-span-2">
                                <label
                                  :for="`weekday-${entry.id}`"
                                  class="block text-sm font-medium text-gray-700"
                                >Weekday</label>
                                <select
                                  :id="`weekday-${entry.id}`"
                                  v-model="entry.day"
                                  :name="`weekday-${entry.id}`"
                                  class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                                >
                                  <option value="1">
                                    Monday
                                  </option>
                                  <option value="2">
                                    Tuesday
                                  </option>
                                  <option value="3">
                                    Wednesday
                                  </option>
                                  <option value="4">
                                    Thursday
                                  </option>
                                  <option value="5">
                                    Friday
                                  </option>
                                  <option value="6">
                                    Saturday
                                  </option>
                                  <option value="0">
                                    Sunday
                                  </option>
                                </select>
                              </div>

                              <div
                                class="sm:col-span-3 md:col-span-2 flex flex-row space-x-4"
                              >
                                <div>
                                  <label
                                    :for="`startsAt-${entry.id}`"
                                    class="block text-sm font-medium text-gray-700"
                                  >Starts at</label>
                                  <input
                                    :id="`startsAt-${entry.id}`"
                                    v-model="entry.startsAt"
                                    :name="`startsAt-${entry.id}`"
                                    type="time"
                                    class="mt-1 block text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md tabular-nums"
                                  >
                                </div>
                                <div>
                                  <label
                                    :for="`endsAt-${entry.id}`"
                                    class="block text-sm font-medium text-gray-700"
                                  >Ends at</label>
                                  <input
                                    :id="`endsAt-${entry.id}`"
                                    v-model="entry.endsAt"
                                    :name="`endsAt-${entry.id}`"
                                    type="time"
                                    class="mt-1 block text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md tabular-nums"
                                  >
                                </div>
                              </div>

                              <div class="sm:col-span-2">
                                <label
                                  :for="`room-${entry.id}`"
                                  class="block text-sm font-medium text-gray-700"
                                >Room number</label>
                                <div class="mt-1">
                                  <input
                                    :id="`room-${entry.id}`"
                                    v-model="entry.room"
                                    type="text"
                                    :name="`room-${entry.id}`"
                                    class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    placeholder="HG F7"
                                    aria-describedby="room-description"
                                  >
                                </div>
                              </div>

                              <div class="sm:col-span-2">
                                <div class="flex justify-between">
                                  <label
                                    :for="`ov-room-${entry.id}`"
                                    class="block text-sm font-medium text-gray-700"
                                  >Overflow room</label>
                                  <span
                                    :id="`ov-room-${entry.id}-optional`"
                                    class="text-sm text-gray-500"
                                  >Optional</span>
                                </div>
                                <div class="mt-1">
                                  <input
                                    :id="`ov-room-${entry.id}`"
                                    v-model="entry.secondRoom"
                                    type="text"
                                    :name="`ov-room-${entry.id}`"
                                    class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    placeholder="HG F5"
                                    :aria-describedby="`ov-room-${entry.id}-optional`"
                                  >
                                </div>
                              </div>

                              <div class="sm:col-span-3">
                                <div class="flex justify-between">
                                  <label
                                    :for="`roomcode-${entry.id}`"
                                    class="block text-sm font-medium text-gray-700"
                                  >Livestream Room code</label>
                                  <span
                                    :id="`roomcode-${entry.id}-optional`"
                                    class="text-sm text-gray-500"
                                  >Optional</span>
                                </div>

                                <div class="mt-1">
                                  <input
                                    :id="`roomcode-${entry.id}`"
                                    v-model="entry.roomCode"
                                    type="text"
                                    :name="`roomcode-${entry.id}`"
                                    class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    placeholder="hg/hg-f-7"
                                    :aria-describedby="`roomcode-${entry.id}-description`"
                                  >
                                </div>
                                <p
                                  :id="`roomcode-${entry.id}-description`"
                                  class="mt-2 text-xs text-gray-500"
                                >
                                  Used to provide a direct link to the livestream
                                  of the lecture.
                                </p>
                              </div>

                              <div class="sm:col-span-6 flex justify-end">
                                <button
                                  type="button"
                                  class="relative inline-flex items-center p-1 px-3 py-2 text-sm text-red-800 border border-gray-300 rounded-md hover:bg-red-100 bg-red-50 focus-within:z-10 focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600"
                                  @click="deleteEntry(subject.id, entry.id)"
                                >
                                  Delete Entry
                                </button>
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 h-fit"
                            @click="addNewEntry(subject.id)"
                          >
                            <PlusSmIcon
                              class="-ml-0.5 mr-2 h-4 w-4"
                              aria-hidden="true"
                            />
                            New Schedule Entry
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex items-center mt-6">
                <button
                  type="button"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  @click="addNewSubject"
                >
                  <PlusSmIcon
                    class="-ml-0.5 mr-2 h-4 w-4"
                    aria-hidden="true"
                  />
                  Add a New Subject
                </button>
              </div>

              <div class="space-y-6 mt-8">
                <div>
                  <h2 class="text-xl font-medium text-blue-gray-900">
                    Links
                  </h2>
                  <p class="mt-1 text-sm text-blue-gray-500">
                    Edit your personal link collection.
                  </p>
                </div>

                <div class="grid gap-4 mt-2 md:grid-cols-2">
                  <div
                    v-for="link in links"
                    :key="link.id"
                  >
                    <div class="-space-y-px rounded-md shadow-sm isolate">
                      <div
                        class="relative px-3 py-2 border border-gray-300 rounded-md rounded-b-none focus-within:z-10 focus-within:ring-1 focus-within:ring-blue-600 focus-within:border-blue-600"
                      >
                        <label
                          :for="`label-${link.id}`"
                          class="block text-xs font-medium text-gray-700"
                        >Link Label</label>
                        <input
                          :id="`label-${link.id}`"
                          v-model="link.label"
                          type="text"
                          :name="`label-${link.id}`"
                          class="block w-full p-0 text-gray-900 placeholder-gray-500 border-0 focus:ring-0 sm:text-sm bg-gray-50"
                          placeholder="Script"
                        >
                      </div>
                      <div
                        class="relative px-3 py-2 border border-gray-300 focus-within:z-10 focus-within:ring-1 focus-within:ring-blue-600 focus-within:border-blue-600"
                      >
                        <label
                          :for="`href-${link.id}`"
                          class="block text-xs font-medium text-gray-700"
                        >Link Destination</label>
                        <input
                          :id="`href-${link.id}`"
                          v-model="link.href"
                          type="text"
                          :name="`href-${link.id}`"
                          class="block w-full p-0 text-gray-900 placeholder-gray-500 border-0 focus:ring-0 sm:text-sm bg-gray-50"
                          placeholder="https://xxx"
                        >
                      </div>

                      <button
                        type="button"
                        class="relative inline-flex items-center w-full p-1 px-3 py-2 text-sm text-red-800 border border-gray-300 rounded-md rounded-t-none hover:bg-red-100 bg-red-50 focus-within:z-10 focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600"
                        @click="deleteLink(link.id)"
                      >
                        Delete Link
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 h-fit"
                    @click="addNewLink"
                  >
                    <PlusSmIcon
                      class="-ml-0.5 mr-2 h-4 w-4"
                      aria-hidden="true"
                    />
                    New Link
                  </button>
                </div>
              </div>
            </form>

            <div class="mt-6">
              <router-link
                class="text-sm font-medium text-gray-500 hover:text-gray-700"
                to="/"
              >
                &larr; Return Home
              </router-link>
            </div>
          </div>

          <div class="lg:col-span-3">
            <div class="bg-white rounded-lg shadow p-6 mt-6 space-y-6">
              <h2 class="text-xl font-medium text-blue-gray-900">
                Actions
              </h2>

              <button
                type="button"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
                @click="exportState"
              >
                <DownloadIcon
                  class="-ml-0.5 mr-2 h-4 w-4"
                  aria-hidden="true"
                />
                Export your data (.json)
              </button>

              <div>
                <p
                  class="mt-2 text-sm font-medium p-4 rounded text-blue-800 bg-blue-50"
                >
                  Choose a valid JSON file to import your data. Be careful, this
                  will overwrite your existing data.
                </p>
                <label
                  for="file-upload"
                  class="inline-flex lg:w-full mt-2 items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
                >
                  <UploadIcon
                    class="-ml-0.5 mr-2 h-4 w-4"
                    aria-hidden="true"
                  />
                  <span>Import data</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    class="sr-only"
                    @change="importState"
                  >
                </label>
              </div>

              <div class="mt-2 border-gray-400 border-t-2 pt-3 space-y-4">
                <p
                  class="mt-2 text-sm font-medium p-4 text-red-800 bg-red-50 rounded"
                >
                  These actions cannot be undone. They will clear all your data,
                  including the contents of the scratchpad. Export your data
                  beforehand.
                </p>
                <div class="flex gap-4 lg:flex-col w-fit lg:w-full">
                  <button
                    type="button"
                    class="inline-flex justify-center px-2.5 py-1.5 text-xs font-medium text-white bg-red-600 border border-transparent rounded shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    @click="resetState"
                  >
                    Reset to Original State
                  </button>
                  <button
                    type="button"
                    class="inline-flex justify-center px-2.5 py-1.5 text-xs font-medium text-white bg-red-600 border border-transparent rounded shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    @click="deleteState"
                  >
                    Clear State (Delete All)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { storeToRefs } from 'pinia'
import { defineComponent } from 'vue'
import { nanoid } from 'nanoid'
import { PlusSmIcon, DownloadIcon, UploadIcon } from '@heroicons/vue/solid'
import { MoonIcon } from '@heroicons/vue/outline'
import { useLinkStore } from '../store'
import NavBar from '../components/NavBar.vue'
import SemesterTemplateSelect from '../components/SemesterTemplateSelect.vue'

export default defineComponent({
  components: {
    NavBar,
    SemesterTemplateSelect,
    PlusSmIcon,
    MoonIcon,
    DownloadIcon,
    UploadIcon,
  },

  setup() {
    const store = useLinkStore()

    const { subjects, links } = storeToRefs(store)

    const addNewSubject = () => {
      store.addSubject({
        id: nanoid(5),
        name: '',
        lecturer: '',
        mainLink: '',
        links: [],
        schedule: [],
      })
    }

    const addNewSubjectLink = (subjectId: string) => {
      store.addSubjectLink(subjectId, {
        id: nanoid(5),
        label: '',
        href: '',
      })
    }

    const addNewLink = () => {
      store.addLink({
        id: nanoid(5),
        label: '',
        href: '',
      })
    }

    const addNewEntry = (subjectId: string) => {
      store.addScheduleEntry(subjectId, {
        id: nanoid(5),
        day: 1,
        startsAt: '',
        endsAt: '',
        room: '',
        secondRoom: '',
        type: 'lecture',
        roomCode: '',
      })
    }

    const deleteSubject = (id: string) => {
      store.removeSubject(id)
    }

    const deleteSubjectLink = (subjectId: string, linkId: string) => {
      store.removeSubjectLink(subjectId, linkId)
    }

    const deleteEntry = (subjectId: string, entryId: string) => {
      store.removeScheduleEntry(subjectId, entryId)
    }

    const deleteLink = (linkId: string) => {
      store.removeLink(linkId)
    }

    const resetState = () => {
      store.$reset()
    }

    const deleteState = () => {
      localStorage.removeItem('links')
      store.$state = { subjects: [], links: [], filter: 'all', scratchpad: '' }
    }

    const exportState = () => {
      const state = store.$state
      const blob = new Blob([JSON.stringify(state)], {
        type: 'application/json',
      })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'link-state.json'
      a.click()
      URL.revokeObjectURL(url)
    }

    const importState = (e: any) => {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = (e: any) => {
        const state = JSON.parse(e.target.result)
        store.$state = state
      }
      reader.readAsText(file)
    }

    return {
      addNewEntry,
      addNewLink,
      addNewSubject,
      addNewSubjectLink,
      deleteEntry,
      deleteLink,
      deleteState,
      deleteSubject,
      deleteSubjectLink,
      exportState,
      importState,
      links,
      resetState,
      subjects,
    }
  },
})
</script>
