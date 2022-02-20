<template>
  <div v-if="events.length !== 0">
    <h2
      id="current-event"
      class="text-sm font-medium text-gray-900 dark:text-slate-200"
    >
      Exercises:
    </h2>
    <div>
      <ol
        role="list"
        class="divide-y divide-gray-200 dark:divide-slate-600"
      >
        <li
          v-for="event in events"
          :key="event.id"
          class="relative py-4"
        >
          <div class="inline-flex items-baseline">
            <span class="mr-2 text-sm text-gray-500 dark:text-slate-400 tabular-nums">{{
              `${event.startsAt}–${event.endsAt}`
            }}</span>
            <h3 class="font-semibold text-gray-900 dark:text-slate-200 sm:text-lg md:text-xl">
              {{ event.name }}
            </h3>

            <span
              class="ml-2 text-xs font-medium text-gray-500 dark:text-slate-400 sm:text-sm md:text-base"
              :class="[isHappeningNow(event) ? 'underline decoration-2' : '']"
            >{{ event.room }}
              <span
                v-if="event.secondRoom"
                class="text-gray-400 dark:text-slate-500"
              >/ {{ event.secondRoom }}</span>
            </span>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    events: {
      type: Array,
      required: true,
    },
  },
  setup() {
     // check if the event is currently happening
    const isHappeningNow = (event) => {
      const now = new Date()
      const nowMil = Date.parse(now)
      const today = new Date().toISOString().split('T')[0] // YYYY-MM-DD
      const START_OFFSET = 60000 // 1 minute
      const END_OFFSET = 300000 // 5 minutes
      const start =
        Date.parse(`${today} ${event.startsAt}`) - START_OFFSET // show 1 minutes before the event starts
      const end =
        Date.parse(`${today} ${event.endsAt}`) + END_OFFSET // show 5 minutes after the event ends
      return nowMil >= start && nowMil < end
    }


    return { isHappeningNow }
  },
}
</script>
