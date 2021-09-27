<template>
  <div class="min-h-screen py-6">
    <main class="pb-8">
      <div class="max-w-3xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <!-- Main 3 column grid -->
        <div class="grid items-start grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <!-- Left column -->
          <div class="grid grid-cols-1 gap-4 lg:col-span-2">
            <!-- Welcome/Time&Date panel -->
            <section aria-labelledby="profile-overview-title">
              <div class="overflow-hidden bg-white rounded-lg shadow">
                <div class="p-6 bg-white">
                  <div class="sm:flex sm:items-center sm:justify-between">
                    <div class="sm:flex sm:space-x-5">
                      <div class="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                        <!-- <p class="text-sm font-medium text-gray-600">
                          Welcome,
                        </p> -->
                        <p class="text-xl font-bold text-gray-900 sm:text-2xl tabular-nums">
                          {{ time }} <span class="text-base text-gray-800">{{ date }}</span>
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

            <!-- Quick links panel -->
            <section aria-labelledby="quick-links-title">
              <div class="overflow-hidden bg-gray-200 divide-y divide-gray-200 rounded-lg shadow sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
                <h2
                  id="quick-links-title"
                  class="sr-only"
                >
                  Quick links
                </h2>
                <div
                  v-for="(action, actionIdx) in mainLinks"
                  :key="action.name"
                  :class="[actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '', actionIdx === 1 ? 'sm:rounded-tr-lg' : '', actionIdx === mainLinks.length - 2 ? 'sm:rounded-bl-lg' : '', actionIdx === mainLinks.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '', 'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500']"
                >
                  <div>
                    <h3 class="text-lg font-medium">
                      <a
                        :href="action.href"
                        class="focus:outline-none"
                      >
                        <!-- Extend touch target to entire panel -->
                        <span
                          class="absolute inset-0"
                          aria-hidden="true"
                        />
                        {{ action.name }}
                      </a>
                    </h3>

                    <div class="grid grid-cols-1 mt-4 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
                      <div
                        v-for="link in action.links"
                        :key="link.label"
                        class="py-4 text-xs font-medium text-center sm:py-0"
                      >
                        <a
                          :href="link.href"
                          class="relative p-3 text-blue-800 hover:text-blue-900"
                        >{{ link.label }}</a>
                      </div>
                    </div>
                  </div>
                  <span
                    class="absolute text-gray-300 pointer-events-none top-6 right-6 group-hover:text-gray-400"
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
              <div class="overflow-hidden bg-white rounded-lg shadow">
                <div class="p-6">
                  <h2
                    id="useful-links"
                    class="text-base font-medium text-gray-900"
                  >
                    Useful Links
                  </h2>
                  <div class="flow-root mt-6">
                    <ul
                      role="list"
                      class="-my-5 divide-y divide-gray-200"
                    >
                      <li
                        v-for="link in links"
                        :key="link.href"
                        class="py-4"
                      >
                        <p class="text-sm font-medium text-gray-900 underline truncate hover:no-underline">
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
          <div class="grid grid-cols-1 gap-4">
            <!-- Übungen -->
            <section aria-labelledby="exercises-title">
              <div class="overflow-hidden bg-white rounded-lg shadow">
                <div class="p-6">
                  <h2
                    id="exercises-title"
                    class="text-base font-medium text-gray-900"
                  >
                    Übungen
                  </h2>
                  <div class="flow-root mt-6">
                    <ul
                      role="list"
                      class="-my-5 divide-y divide-gray-200"
                    >
                      <li
                        v-for="exercise in exercises"
                        :key="exercise.id"
                        class="py-5"
                      >
                        <div class="relative focus-within:ring-2 focus-within:ring-cyan-500">
                          <h3 class="text-sm font-semibold text-gray-800">
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
                          <p class="mt-1 text-sm text-gray-600">
                            Abgabe: <span class="font-bold text-gray-800">{{ exercise.date }}</span> <br>
                            <a
                              class="text-black underline"
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
        </div>
      </div>
    </main>
    <footer>
      <div class="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
        <div class="py-8 text-sm text-center text-gray-500 border-t border-gray-200 sm:text-left">
          <span class="block sm:inline">&copy; 2021 Vincent Dörig</span> <span class="block sm:inline">No guarantee for completeness or accuracy.</span> <a
            href="https://github.com/vincentdoerig/ETH-quicklinks"
            class="block text-xs text-gray-700 underline sm:inline"
          >Open Source &hearts;.</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

const user = {
  name: '',
}
const mainLinks = [
  {
    name: 'Diskrete Mathematik',
    href: 'https://crypto.ethz.ch/teaching/DM21/',
    links: [
      { label: 'Skript', href: 'https://crypto.ethz.ch/teaching/DM21/ln/DM21_LN-tablet_8jk9jkr58uo2kq7mzarv.pdf' },
      { label: 'Exercises', href: 'https://dm.crypto.ethz.ch/' },
      { label: 'VVZ', href: 'http://vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lerneinheitId=147043&semkez=2021W&ansicht=LEHRVERANSTALTUNGEN&lang=de'},
    ],
  },
  {
    name: 'Lineare Algebra',
    href: 'https://igl.ethz.ch/teaching/linear-algebra/la2021/',
    links: [
      { label: 'VVZ', href: 'http://vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lerneinheitId=148509&semkez=2021W&ansicht=LEHRVERANSTALTUNGEN&lang=de'},
    ],
  },
  {
    name: 'Einführung in die Programmierung',
    href: 'https://www.lst.inf.ethz.ch/education/einfuehrung-in-die-programmierung-i--252-0027-.html#tab-accordion1-item4-content',
    links: [
      { label: 'Übungen', href: 'https://www.lst.inf.ethz.ch/education/einfuehrung-in-die-programmierung-i--252-0027-.html#par_textimage_1873914489' },
      { label: 'VVZ', href: 'http://vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lerneinheitId=148279&semkez=2021W&ansicht=LEHRVERANSTALTUNGEN&lang=de'},
    ],
  },
  {
    name: 'Algorithmen und Datenstrukturen',
    href: 'https://cadmo.ethz.ch/education/lectures/HS21/DA/index.html',
    links: [
      { label: 'Exercises', href: 'https://cadmo.ethz.ch/education/lectures/HS21/DA/index.html#Exercises' },
      { label: 'Info VVZ', href: 'http://vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lerneinheitId=146603&semkez=2021W&ansicht=LEHRVERANSTALTUNGEN&lang=de'},
    ],
  },
]
const exercises = [
  {
    id: 1,
    title: mainLinks[0].name,
    href: 'https://dm.crypto.ethz.ch/',
    date: 'Donnerstag 23:59',
  },
  {
    id: 2,
    title: mainLinks[1].name,
    location: 'TBD',
    date: 'Freitag',
  },
  {
    id: 3,
    title: mainLinks[2].name,
    date: 'Übungsstunde',
  },
  {
    id: 4,
    title: mainLinks[3].name,
    date: 'Übungsstunde (und ggf. Email)',
  },
]

const links = [
  { label: 'myStudies', href: 'https://www.lehrbetrieb.ethz.ch/myStudies/studWillkommen.view' },
  { label: 'VIS Exam Collection', href: 'https://exams.vis.ethz.ch/' },
  { label: 'Vorlesungsverzeichnis', href: 'http://vvz.ethz.ch/Vorlesungsverzeichnis/sucheLehrangebot.view?lang=de&search=on&semkez=2021W&studiengangTyp=BSC&deptId=5&studiengangAbschnittId=91295&bereichAbschnittId=91899&unterbereichAbschnittId=&lerneinheitstitel=&lerneinheitscode=&famname=&rufname=&wahlinfo=&lehrsprache=&periodizitaet=&katalogdaten=&_strukturAus=on&search=Suchen' },
]

export default defineComponent({
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
    return {
      user,
      mainLinks,
      exercises,
      links,
    }
  },
})
</script>
