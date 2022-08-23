import { defineStore } from 'pinia'
import CSLinks from './templates/links/CS'
import Sem1 from './templates/subjects/semester1'
import Sem2 from './templates/subjects/semester2'
import Sem3 from './templates/subjects/semester3'

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
    subjects: [],
    links: CSLinks as SecondaryLinks[],
    scratchpad: '',
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: 'all',
  }),
  getters: {},
  actions: {
    useSemesterSubjectTemplate (template: string) {
      switch (template) {
        case 'semester1':
          this.subjects = Sem1 as Subject[]
          break
        case 'semester2':
          this.subjects = Sem2 as Subject[]
          break
        case 'semester3':
          this.subjects = Sem3 as Subject[]
          break
      }
    },

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
          if (!subject.schedule) {
            return {
              ...subject,
              schedule: [data],
            }
          }
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
