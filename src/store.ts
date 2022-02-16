import { defineStore } from 'pinia'

export interface Subject {
  id: number; // TODO: change to uuid
  name: string;
  lecturer: string;
  mainLink: string;
  links: SecondaryLinks[];
}

interface SecondaryLinks {
  label: string;
  href: string;
}

interface State {
  subjects: Subject[] | [];
  filter: string;
}

export const useLinkStore = defineStore('links', {
  state: (): State => ({
    subjects: [
      {
        name: 'Algorithmen und Wahrschein­lichkeit',
        id: 0,
        lecturer: 'Prof. Angelika Steger, Prof. Emo Welzl',
        mainLink: 'https://moodle-app2.let.ethz.ch/course/view.php?id=16841',
        links: [
          {
            label: 'Moodle',
            href: 'https://moodle-app2.let.ethz.ch/course/view.php?id=16841',
          },
          {
            label: 'VVZ',
            href: 'http://vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lerneinheitId=157731&semkez=2022S&ansicht=LEHRVERANSTALTUNGEN&lang=de',
          },
        ],
      },
      {
        name: 'Digital Design and Computer Architecture',
        id: 1,
        lecturer: 'Prof. Onur Mutlu',
        mainLink: 'https://safari.ethz.ch/digitaltechnik/doku.php',
        links: [
          {
            label: 'Moodle',
            href: 'https://moodle-app2.let.ethz.ch/course/view.php?id=16852',
          },
          {
            label: 'YouTube',
            href: 'https://www.youtube.com/c/OnurMutluLectures/videos',
          },
          {
            label: 'VVZ',
            href: 'http://vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lerneinheitId=159117&semkez=2022S&ansicht=LEHRVERANSTALTUNGEN&lang=de',
          },
        ],
      },
      {
        name: 'Analysis I',
        id: 2,
        lecturer: 'Prof. Özlem Imamoglu',
        mainLink: 'https://metaphor.ethz.ch/x/2022/fs/401-0212-16L/',
        links: [
          {
            label: 'VVZ',
            href: 'http://vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?semkez=2022S&ansicht=LEHRVERANSTALTUNGEN&lerneinheitId=158644&lang=de',
          },
        ],
      },
      {
        name: 'Parallele Programmierung',
        id: 3,
        lecturer: 'Prof. Torsten Hoefler, Dr. Barbara Solenthaler',
        mainLink: 'https://spcl.inf.ethz.ch/Teaching/2022-pp/',
        links: [
          {
            label: 'Moodle',
            href: 'https://moodle-app2.let.ethz.ch/course/view.php?id=16717',
          },
          {
            label: 'VVZ',
            href: 'http://vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lerneinheitId=157750&semkez=2022S&ansicht=LEHRVERANSTALTUNGEN&lang=de',
          },
        ],
      },
    ],
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: 'all',
  }),
  getters: {

  },
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

    removeSubject(id: number) {
      this.subjects = this.subjects.filter((subject) => subject.id !== id)
    },

    // add a subject last
    addSubject(subject: Subject) {
      this.subjects = [...this.subjects, { ...subject,  id: Math.random() * 100 }]
    },
  },
  persist: true,
})

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useLinkStore, import.meta.hot))
// }
