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
            <CurrentLecture />
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

                    <div class="grid grid-cols-1 mt-5 divide-y divide-gray-200 dark:divide-slate-500 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
                      <div
                        v-for="link in subject.links"
                        :key="link.label"
                        class="py-4 text-xs font-medium text-center sm:py-0"
                      >
                        <a
                          :href="link.href"
                          class="relative px-2 py-0.5 text-blue-800 dark:text-blue-200 bg-blue-100 dark:bg-blue-900 rounded hover:bg-blue-200 hover:text-blue-900 hover:dark:bg-blue-700 hover:dark:text-blue-100"
                        >{{ link.label }}</a>
                      </div>
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
                  <div class="flow-root mt-6">
                    <ul
                      role="list"
                      class="-my-5 divide-y divide-gray-200 dark:divide-slate-600"
                    >
                      <li
                        v-for="link in links"
                        :key="link.href"
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
            <div class="flex justify-end">
              <Toggle />
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div class="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
        <div class="py-8 text-sm text-center text-gray-500 border-t border-gray-200 dark:text-slate-400 dark:border-slate-500 sm:text-left">
          <span class="block sm:inline">&copy; {{ new Date().getFullYear() }} Vincent Dörig</span> <span class="block sm:inline">No guarantee for completeness or accuracy.</span> <a
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
import CurrentLecture from './CurrentLecture.vue'
import Toggle from './Toggle.vue'

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

const links = [
  { label: 'myStudies', href: 'https://www.lehrbetrieb.ethz.ch/myStudies/studWillkommen.view' },
  { label: 'Live Lectures', href: 'https://video.ethz.ch/live/lectures/zentrum.html' },
  { label: 'Past Lectures', href: 'https://video.ethz.ch/lectures/d-infk/2021/autumn.html' },
  { label: 'VIS Exam Collection', href: 'https://exams.vis.ethz.ch/' },
  { label: 'PVW Skripts', href: 'https://vis.ethz.ch/de/services/pvw-scripts/' },
  { label: 'Vorlesungsverzeichnis', href: 'http://vvz.ethz.ch/Vorlesungsverzeichnis/sucheLehrangebot.view?lang=de&search=on&semkez=2022S&studiengangTyp=BSC&deptId=5&studiengangAbschnittId=96660&bereichAbschnittId=97277&unterbereichAbschnittId=97874&lerneinheitstitel=&lerneinheitscode=&famname=&rufname=&wahlinfo=&lehrsprache=&periodizitaet=&katalogdaten=&_strukturAus=on&search=Suchen' },
]

export default defineComponent({
  components: {
    CurrentLecture,
    Toggle,
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

    return {
      user,
      exercises,
      links,
      store,
    }
  },
})
</script>
