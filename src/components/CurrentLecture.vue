<template>
  <section aria-labelledby="current-lecture">
    <div class="overflow-hidden bg-white rounded-lg shadow dark:bg-slate-800">
      <div
        v-if="todayIsHoliday()"
        class="p-6 text-sm font-medium text-gray-900 dark:text-slate-200"
      >
        <h2 class="font-semibold text-2xl md:text-3xl">
          {{ todayIsHoliday() }}
        </h2>
        <p class="mt-2 text-gray-500 dark:text-gray-400">
          you most likely won't have any lectures today
        </p>
      </div>
      <div
        v-else-if="lecturesToday.length === 0 && otherEventsToday.length === 0"
        id="current-lecture"
        class="p-6 text-sm font-medium text-gray-900 dark:text-slate-200"
      >
        No lectures or exercises today.
        <span
          class="font-light"
        >Take a break, have some fun, do what you do best.</span>
      </div>
      <Lectures
        v-if="!todayIsHoliday()"
        :lectures="lecturesToday"
        @toggle-stream="toggleStream"
      />
      <other-events
        v-if="!todayIsHoliday()"
        :events="otherEventsToday"
        :class="[lecturesToday.length === 0 ? 'p-6' : 'pb-3 -mt-3 px-6']"
      />
    </div>
  </section>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import { useLinkStore } from '../store'
import Lectures from './Lectures.vue'
import OtherEvents from './OtherEvents.vue'
import Holidays from '../templates/holidays'

export default defineComponent({
  components: { Lectures, OtherEvents },
  setup() {
    const lectureList = useLinkStore().subjects

    // adds a showLive and subject name property to each lecture
    // takes the entire state and returns a new array with only the schedule entries
    const scheduleEntries = []
    for(let i = 0; i < lectureList.length; i++) {
      for (let j = 0; j < lectureList[i].schedule.length; j++) {
        scheduleEntries.push({
          ...lectureList[i].schedule[j],
          name: lectureList[i].name,
          showLive: false,
        })
      }
    }

    const entries = reactive(scheduleEntries)

    // return the current day of the week
    const weekday = new Date().getDay()

    const toggleStream = (id) => {
      const entry = entries.find(entry => entry.id === id)
      entry.showLive = !entry.showLive
    }

    // determine if today is during a holiday
    const todayIsHoliday = () => {
      const today = new Date()
      console.log(Holidays)
      for (let holiday of Holidays) {
        // determine if today is during a holiday
        if((today.getTime() >= holiday.start.getTime() && today.getTime() <= holiday.end.getTime())) {
          return holiday.name
        }
      }
      return false
    }

    return {
      entries,
      weekday,
      toggleStream,
      todayIsHoliday,
    }
  },
  computed: {
    // return the lectures of the current day (based on the day of the week)
    lecturesToday() {
      return this.entries.filter(
        (lecture) => parseInt(lecture.day) === this.weekday && lecture.type === 'lecture',
      )
    },
    otherEventsToday() {
      // event.day is sometimes a string and thus needs to be converted to an int
      return this.entries.filter(
        (event) => parseInt(event.day) === this.weekday && event.type !== 'lecture',
      )
    },
  },
})
</script>
