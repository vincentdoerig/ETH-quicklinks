<template>
  <div class="min-h-screen py-6 dark:bg-slate-900">
    <main class="pb-8">
      <div class="max-w-3xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <!-- Main 3 column grid -->
        <div class="grid items-start grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <!-- Left column -->
          <div class="grid grid-cols-1 gap-4 lg:col-span-2">
            <!-- Welcome/Time&Date panel -->
            <section aria-labelledby="profile-overview-title">
              <div class="overflow-hidden bg-white rounded-lg shadow dark:bg-slate-800">
                <div class="p-6 bg-white dark:bg-slate-800">
                  <div class="sm:flex sm:items-center sm:justify-between">
                    <div class="sm:flex sm:space-x-5">
                      <div class="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                        <!-- <p class="text-sm font-medium text-gray-600">
                          Welcome,
                        </p> -->
                        <p class="text-xl font-bold text-gray-900 dark:text-slate-200 sm:text-2xl tabular-nums">
                          {{ time }} <span class="text-base text-gray-800 dark:text-slate-400">{{ date }}</span>
                          <!-- {{ user.name }} -->
                        </p>
                        <!-- <p class="text-sm font-medium text-gray-600">
                          It's Monday, 17:44 {{ time }}
                        </p> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section v-if="subjects.length === 0">
              <div class="overflow-hidden bg-gray-100 rounded-lg shadow-md dark:bg-slate-700">
                <div
                  class="p-6 text-sm font-medium text-gray-900 dark:text-slate-200"
                >
                  Welcome! You have not setup any subjects. Choose from the templates below or create your own schedules in the <router-link
                    class="text-gray-700 dark:text-white underline"
                    to="/settings"
                  >
                    settings
                  </router-link>.

                  <SemesterTemplateSelect />
                </div>
              </div>
            </section>
            <CurrentLecture v-if="subjects.length !== 0" />
            <!-- Quick links panel -->
            <section aria-labelledby="quick-links-title">
              <div class="overflow-hidden bg-gray-200 divide-y divide-gray-200 rounded-lg shadow dark:divide-slate-700 dark:bg-slate-700 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
                <h2
                  id="quick-links-title"
                  class="sr-only"
                >
                  Quick links
                </h2>
                <div
                  v-for="(subject, subjectIdx) in store.subjects"
                  :key="subject.name"
                  :class="[subjectIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '', subjectIdx === 1 ? 'sm:rounded-tr-lg' : '', subjectIdx === store.length - 2 ? 'sm:rounded-bl-lg' : '', subjectIdx === store.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '', 'relative group bg-white dark:bg-slate-800 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500']"
                >
                  <div>
                    <h3 class="text-lg font-medium dark:text-slate-200">
                      <a
                        :href="subject.mainLink"
                        target="_blank"
                        class="focus:outline-none"
                      >
                        <!-- Extend touch target to entire panel -->
                        <span
                          class="absolute inset-0"
                          aria-hidden="true"
                        />
                        <span class="pr-6">{{ subject.name }}</span>
                      </a>
                    </h3>
                    <h4 class="text-xs font-medium text-gray-500 dark:text-slate-400">
                      {{ subject.lecturer }}
                    </h4>

                    <div class="mt-5 -mb-4 relative py-1 flex gap-4 justify-start overflow-x-scroll text-xs font-medium">
                      <span
                        v-for="link in subject.links"
                        :key="link.label"
                        class="mb-4"
                      >
                        <a
                          :href="link.href"
                          class="relative whitespace-nowrap px-2 py-0.5 text-blue-800 dark:text-blue-200 bg-blue-100 dark:bg-blue-900 rounded hover:bg-blue-200 hover:text-blue-900 hover:dark:bg-blue-700 hover:dark:text-blue-100"
                        >{{ link.label }}</a>
                      </span>
                    </div>
                  </div>
                  <span
                    class="absolute text-gray-300 pointer-events-none top-6 right-6 group-hover:text-gray-500"
                    aria-hidden="true"
                  >
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                    </svg>
                  </span>
                </div>
              </div>
            </section>
            <section aria-labelledby="useful-links">
              <div class="overflow-hidden bg-white rounded-lg shadow dark:bg-slate-800">
                <div class="p-6">
                  <h2
                    id="useful-links"
                    class="text-base font-medium text-gray-900 dark:text-slate-200"
                  >
                    Useful Links
                  </h2>
                  <div
                    v-if="subjects.length === 0 || links.length === 0"
                    class="text-xs font-medium text-gray-500 dark:text-gray-400 inline-flex"
                  >
                    <QuestionMarkCircleIcon
                      class="-ml-0.5 mr-1 h-4 w-4"
                      aria-hidden="true"
                    /> You can edit these links in the settings.
                  </div>
                  <div class="flow-root mt-6">
                    <ul
                      role="list"
                      class="-my-5 divide-y divide-gray-200 dark:divide-slate-600"
                    >
                      <li
                        v-for="link in links"
                        :key="link.id"
                        class="py-4"
                      >
                        <p class="text-sm font-medium text-gray-800 underline truncate dark:text-slate-300 hover:no-underline">
                          <a :href="link.href">{{ link.label }}</a>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <!-- Right column -->
          <div>
            <div
              v-if="exercises.length > 0"
              class="grid grid-cols-1 gap-4 mb-4"
            >
              <!-- Übungen -->
              <section aria-labelledby="exercises-title">
                <div class="overflow-hidden bg-white rounded-lg shadow dark:bg-slate-800">
                  <div class="p-6">
                    <h2
                      id="exercises-title"
                      class="text-base font-medium text-gray-900 dark:text-slate-200"
                    >
                      Übungen
                    </h2>
                    <div class="flow-root mt-6">
                      <ul
                        role="list"
                        class="-my-5 divide-y divide-gray-200 dark:text-slate-600"
                      >
                        <li
                          v-for="exercise in exercises"
                          :key="exercise.id"
                          class="py-5"
                        >
                          <div class="relative focus-within:ring-2 focus-within:ring-cyan-500">
                            <h3 class="text-sm font-semibold text-gray-800 dark:text-slate-300">
                              <a
                                :href="exercise.href"
                                class="hover:underline focus:outline-none"
                              >
                                <!-- Extend touch target to entire panel -->
                                <span
                                  class="absolute inset-0"
                                  aria-hidden="true"
                                />
                                {{ exercise.title }}
                              </a>
                            </h3>
                            <p class="mt-1 text-sm text-gray-600 dark:text-slate-400">
                              Abgabe: <span class="font-bold text-gray-800 dark:text-slate-300">{{ exercise.date }}</span> <br>
                              <a
                                class="text-black underline dark:text-slate-100"
                                :href="exercise.href"
                              >{{ exercise.href }}</a> {{ exercise.location }}
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div
              class="grid grid-cols-1 gap-4 mb-4"
            >
              <!-- Miscellaneous -->
              <section aria-labelledby="miscellaneous-title">
                <div class="overflow-hidden bg-white rounded-lg shadow dark:bg-slate-800">
                  <div class="p-6">
                    <h2
                      id="miscellaneous-title"
                      class="text-base font-medium text-gray-900 dark:text-slate-200"
                    >
                      Miscellaneous
                    </h2>

                    <div class="mt-6 space-y-4">
                      <Toggle />
                      <div>
                        <router-link
                          to="/settings"
                          class="text-sm text-gray-900 dark:text-slate-100 underline"
                        >
                          Edit Schedule and Links
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div
              class="grid grid-cols-1 gap-4 mb-4"
            >
              <!-- Scratchpad -->
              <section aria-labelledby="scratchpad-title">
                <div class="overflow-hidden bg-white rounded-lg shadow dark:bg-slate-800">
                  <div class="p-6">
                    <h2
                      id="scratchpad-title"
                      class="text-base font-medium text-gray-900 dark:text-slate-200"
                    >
                      Scratchpad
                    </h2>

                    <div class="mt-4 space-y-4">
                      <label
                        for="comment"
                        class="block text-sm font-medium text-gray-700 dark:text-slate-400"
                      >Jot down ideas, things you need to do, or anything else that comes to mind. <span class="text-xs text-gray-500 dark:text-slate-500">Saved automatically (locally).</span> </label>
                      <div class="mt-1">
                        <textarea
                          id="comment"
                          v-model="store.scratchpad"
                          rows="8"
                          name="comment"
                          class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-slate-900 dark:text-slate-300 sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div class="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
        <div class="py-8 text-sm text-center text-gray-500 border-t border-gray-200 dark:text-slate-400 dark:border-slate-500 sm:text-left">
          <span class="block sm:inline">&copy; {{ new Date().getFullYear() }} Vincent Dörig</span> <span class="hidden sm:inline">&bullet;</span> <span class="block sm:inline">No guarantee for completeness or accuracy.</span> <a
            href="https://github.com/vincentdoerig/ETH-quicklinks"
            class="block text-xs text-gray-700 underline dark:text-slate-300 sm:inline"
          >Open Source &hearts;.</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useLinkStore } from '../store'
import { storeToRefs } from 'pinia'
import CurrentLecture from './CurrentLecture.vue'
import SemesterTemplateSelect from './SemesterTemplateSelect.vue'
import Toggle from './Toggle.vue'
import { QuestionMarkCircleIcon } from '@heroicons/vue/solid'

const user = {
  name: '',
}

const exercises = [
  // {
  //   id: 1,
  //   title: mainLinks[0].name,
  //   href: 'https://dm.crypto.ethz.ch/',
  //   date: 'Donnerstag 23:59',
  // },
  // {
  //   id: 2,
  //   title: mainLinks[1].name,
  //   date: 'Freitag 16:00',
  // },
  // {
  //   id: 3,
  //   title: mainLinks[2].name,
  //   date: 'Übungsstunde (per git)',
  // },
  // {
  //   id: 4,
  //   title: mainLinks[3].name,
  //   date: 'Montag 9:15 (in Übungsstunde und ggf. vorher per Email)',
  // },
]

export default defineComponent({
  components: {
    CurrentLecture,
    Toggle,
    SemesterTemplateSelect,
    QuestionMarkCircleIcon,
  },
  props: {
    time: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
  },
  setup() {
    const store = useLinkStore()
    const { subjects, links } = storeToRefs(store)

    return {
      user,
      exercises,
      links,
      store,
      subjects,
    }
  },
})
</script>
