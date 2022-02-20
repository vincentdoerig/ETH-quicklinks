import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'

export interface Subject {
  id: string;
  name: string;
  lecturer: string;
  mainLink: string;
  links: SecondaryLinks[];
  schedule: ScheduleEntry[];
}

interface SecondaryLinks {
  id: string;
  label: string;
  href: string;
}

interface ScheduleEntry {
  id: string;
  day: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  startsAt: string;
  endsAt: string;
  room?: string;
  secondRoom?: string;
  type: 'lecture' | 'exercise' | 'lab' | 'other';
  roomCode?: string;
}

interface State {
  subjects: Subject[] | [];
  links: SecondaryLinks[];
  scratchpad: string;
  filter: string;
}

export const useLinkStore = defineStore('links', {
  state: (): State => ({
    subjects: [
      {
        id: nanoid(5),
        name: 'Algorithmen und Wahrschein­lichkeit',
        lecturer: 'Prof. Angelika Steger, Prof. Emo Welzl',
        mainLink: 'https://moodle-app2.let.ethz.ch/course/view.php?id=16841',
        links: [
          {
            id: nanoid(5),
            label: 'Moodle',
            href: 'https://moodle-app2.let.ethz.ch/course/view.php?id=16841',
          },
          {
            id: nanoid(5),
            label: 'VVZ',
            href: 'http://vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lerneinheitId=157731&semkez=2022S&ansicht=LEHRVERANSTALTUNGEN&lang=de',
          },
        ],
        schedule: [
          {
            id: nanoid(5),
            startsAt: '14:15',
            endsAt: '16:00',
            room: 'HG F5',
            secondRoom: 'HG F7',
            roomCode: 'hg/hg-f-5',
            day: 2,
            type: 'lecture',
          },
          {
            id: nanoid(5),
            startsAt: '10:15',
            endsAt: '12:00',
            room: 'HG F5',
            secondRoom: 'HG F7',
            roomCode: 'hg/hg-f-5',
            day: 4,
            type: 'lecture',
          },
        ],
      },
      {
        id: nanoid(5),
        name: 'Digital Design and Computer Architecture',
        lecturer: 'Prof. Onur Mutlu',
        mainLink: 'https://safari.ethz.ch/digitaltechnik/doku.php',
        links: [
          {
            id: nanoid(5),
            label: 'Moodle',
            href: 'https://moodle-app2.let.ethz.ch/course/view.php?id=16852',
          },
          {
            id: nanoid(5),
            label: 'YouTube',
            href: 'https://www.youtube.com/c/OnurMutluLectures/videos',
          },
          {
            id: nanoid(5),
            label: 'VVZ',
            href: 'http://vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lerneinheitId=159117&semkez=2022S&ansicht=LEHRVERANSTALTUNGEN&lang=de',
          },
        ],
        schedule: [
          {
            id: nanoid(5),
            startsAt: '14:15',
            endsAt: '16:00',
            room: 'HG F5',
            secondRoom: 'HG F7',
            roomCode: 'hg/hg-f-5',
            day: 4,
            type: 'lecture',
          },
          {
            id: nanoid(5),
            startsAt: '14:15',
            endsAt: '16:00',
            room: 'HG F5',
            secondRoom: 'HG F7',
            roomCode: 'hg/hg-f-5',
            day: 5,
            type: 'lecture',
          },
        ],
      },
      {
        id: nanoid(5),
        name: 'Analysis I',
        lecturer: 'Prof. Özlem Imamoglu',
        mainLink: 'https://metaphor.ethz.ch/x/2022/fs/401-0212-16L/',
        links: [
          {
            id: nanoid(5),
            label: 'VVZ',
            href: 'http://vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?semkez=2022S&ansicht=LEHRVERANSTALTUNGEN&lerneinheitId=158644&lang=de',
          },
        ],
        schedule: [
          {
            id: nanoid(5),
            startsAt: '14:15',
            endsAt: '16:00',
            room: 'HG F1',
            secondRoom: 'HG F3',
            roomCode: 'hg/hg-f-1',
            day: 1,
            type: 'lecture',
          },
          {
            id: nanoid(5),
            startsAt: '10:15',
            endsAt: '12:00',
            room: 'HG F1',
            secondRoom: 'HG F3',
            roomCode: 'hg/hg-f-1',
            day: 3,
            type: 'lecture',
          },
        ],
      },
      {
        id: nanoid(5),
        name: 'Parallele Programmierung',
        lecturer: 'Prof. Torsten Hoefler, Dr. Barbara Solenthaler',
        mainLink: 'https://spcl.inf.ethz.ch/Teaching/2022-pp/',
        links: [
          {
            id: nanoid(5),
            label: 'Moodle',
            href: 'https://moodle-app2.let.ethz.ch/course/view.php?id=16717',
          },
          {
            id: nanoid(5),
            label: 'VVZ',
            href: 'http://vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lerneinheitId=157750&semkez=2022S&ansicht=LEHRVERANSTALTUNGEN&lang=de',
          },
        ],
        schedule: [
          {
            id: nanoid(5),
            startsAt: '10:15',
            endsAt: '12:00',
            room: 'HG F5',
            secondRoom: 'HG F7',
            roomCode: 'hg/hg-f-5',
            day: 2,
            type: 'lecture',
          },
          {
            id: nanoid(5),
            startsAt: '14:15',
            endsAt: '16:00',
            room: 'HG F5',
            secondRoom: 'HG F7',
            roomCode: 'hg/hg-f-5',
            day: 3,
            type: 'lecture',
          },
        ],
      },
    ],
    links: [
      { id: nanoid(5), label: 'myStudies', href: 'https://www.lehrbetrieb.ethz.ch/myStudies/studWillkommen.view' },
      { id: nanoid(5), label: 'Live Lectures', href: 'https://video.ethz.ch/live/lectures/zentrum.html' },
      { id: nanoid(5), label: 'Past Lectures', href: 'https://video.ethz.ch/lectures/d-infk/2021/autumn.html' },
      { id: nanoid(5), label: 'VIS Exam Collection', href: 'https://exams.vis.ethz.ch/' },
      { id: nanoid(5), label: 'PVW Skripts', href: 'https://vis.ethz.ch/de/services/pvw-scripts/' },
      { id: nanoid(5), label: 'Vorlesungsverzeichnis', href: 'http://vvz.ethz.ch/Vorlesungsverzeichnis/sucheLehrangebot.view?lang=de&search=on&semkez=2022S&studiengangTyp=BSC&deptId=5&studiengangAbschnittId=96660&bereichAbschnittId=97277&unterbereichAbschnittId=97874&lerneinheitstitel=&lerneinheitscode=&famname=&rufname=&wahlinfo=&lehrsprache=&periodizitaet=&katalogdaten=&_strukturAus=on&search=Suchen' },
    ],
    scratchpad: '',
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: 'all',
  }),
  getters: {},
  actions: {
    updateSubject(data: Subject) {
      this.subjects = this.subjects.map((subject) => {
        if (subject.id === data.id) {
          return {
            ...subject, // old data
            ...data, // new data
          }
        }
        return subject
      })
    },

    removeSubject(id: string) {
      this.subjects = this.subjects.filter((subject) => subject.id !== id)
    },

    // add a subject last
    addSubject(subject: Subject) {
      this.subjects = [...this.subjects, { ...subject }]
    },

    addSubjectLink(subjectId: string, data: SecondaryLinks) {
      this.subjects = this.subjects.map((subject) => {
        if (subject.id === subjectId) {
          return {
            ...subject,
            links: [...subject.links, { ...data }],
          }
        }
        return subject
      })
    },

    removeSubjectLink(subjectId: string, linkId: string) {
      this.subjects = this.subjects.map((subject) => {
        if (subject.id === subjectId) {
          return {
            ...subject,
            links: subject.links.filter((link) => link.id !== linkId),
          }
        }
        return subject
      })
    },

    addScheduleEntry(subjectId: string, data: ScheduleEntry) {
      this.subjects = this.subjects.map((subject) => {
        if (subject.id === subjectId) {
          return {
            ...subject,
            schedule: [...subject.schedule, { ...data }],
          }
        }
        return subject
      })
    },

    removeScheduleEntry(subjectId: string, entryId: string) {
      this.subjects = this.subjects.map((subject) => {
        if (subject.id === subjectId) {
          return {
            ...subject,
            schedule: subject.schedule.filter((link) => link.id !== entryId),
          }
        }
        return subject
      })
    },

    // add a link last
    addLink(link: SecondaryLinks) {
      this.links = [...this.links, { ...link }]
    },
    // add a link last
    removeLink(id: string) {
      this.links = this.links.filter((link) => link.id !== id)
    },
  },
})

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useLinkStore, import.meta.hot))
// }
