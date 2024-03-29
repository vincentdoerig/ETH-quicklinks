<template>
  <div
    v-if="lectures.length !== 0"
    class="p-6"
  >
    <h2
      id="current-lecture"
      class="text-sm font-medium text-gray-900 dark:text-slate-200"
    >
      Lectures Today:
    </h2>
    <div>
      <ol
        role="list"
        class="divide-y divide-gray-200 dark:divide-slate-600"
      >
        <li
          v-for="lecture in lectures"
          :key="lecture.id"
          class="relative py-4"
        >
          <div class="inline-flex items-baseline">
            <span class="mr-2 text-sm text-gray-500 dark:text-slate-400 tabular-nums">{{
              `${lecture.startsAt}–${lecture.endsAt}`
            }}</span>
            <h3 class="font-semibold text-gray-900 dark:text-slate-200 sm:text-lg md:text-xl">
              {{ lecture.name }}
            </h3>

            <span
              class="ml-2 text-xs font-medium text-gray-500 dark:text-slate-400 sm:text-sm md:text-base"
            >{{ lecture.room }}
              <span
                v-if="lecture.secondRoom"
                class="text-gray-400 dark:text-slate-500"
              >/ {{ lecture.secondRoom }}</span>
            </span>

            <button
              v-if="lecture.type === 'lecture' && isLive(lecture)"
              class="absolute right-0 flex items-center bg-red-600 rounded sm:px-2 top-4 hover:bg-red-300"
              @click="toggleStream(lecture.id)"
            >
              <span class="relative flex w-2 h-2 sm:mr-1">
                <span
                  class="relative inline-flex w-2 h-2 bg-white rounded-full"
                />
                <span
                  class="absolute inline-flex w-full h-full bg-red-600 rounded-full opacity-75 animate-flash"
                />
              </span>
              <span
                class="text-xs hidden sm:block font-bold text-gray-100 py-0.5"
              >Live</span>
            </button>
          </div>
          <div
            v-if="isLive(lecture)"
            class="mt-1 sm:hidden"
          >
            <button
              type="button"
              class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white dark:bg-slate-900 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 "
              @click="toggleStream(lecture.id)"
            >
              Show Livestream
            </button>
          </div>
          <div v-if="lecture.showLive">
            <div class="my-1">
              <a
                :href="`https://video.ethz.ch/live/lectures/zentrum/${lecture.roomCode}.html`"
                class="inline-flex items-center text-sm font-medium text-gray-800 hover:text-gray-900 hover:underline"
                target="_blank"
              >View on video.ethz.ch<span aria-hidden="true"> <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline w-4 h-4 ml-0.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg></span></a>
            </div>
            <iframe
              class="w-full aspect-video"
              :src="`https://oc-vp-distribution03.ethz.ch/player/index.html?id=${
                lecture.roomCode.split('/')[1]
              }`"
            />
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lectures: {
      type: Array,
      required: true,
    },
  },
  emits: ['toggle-stream'],
  setup(props, { emit }) {
     // check if the lecture is currently live
    const isLive = (lecture) => {
      const now = new Date()
      const nowMil = Date.parse(now)
      const today = new Date().toISOString().split('T')[0] // YYYY-MM-DD
      const START_OFFSET = 900000 // 15 minutes
      const END_OFFSET = 300000 // 5 minutes
      const start =
        Date.parse(`${today} ${lecture.startsAt}`) - START_OFFSET // show 15 minutes before the lecture starts
      const end =
        Date.parse(`${today} ${lecture.endsAt}`) + END_OFFSET // show 5 minutes after the lecture ends
      return nowMil >= start && nowMil < end
    }

    // toggle the showLive property of a lecture
    const toggleStream = (id) => {
      emit('toggle-stream', id)
    }

    return {isLive, toggleStream}
  },
}
</script>

<style>
.animate-flash {
  animation: flash 1.4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes flash {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
