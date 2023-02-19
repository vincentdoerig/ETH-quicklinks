import { nanoid } from 'nanoid'

export default [
  {
    id: nanoid(5),
    name: 'Computer Networks',
    lecturer: 'Prof. Adrian Perrig',
    mainLink: 'https://netsec.ethz.ch/courses/cn-2023/',
    links: [
      {
        id: nanoid(5),
        label: 'GitLab',
        href: 'https://gitlab.inf.ethz.ch/PRV-PERRIG/networks-course/cn-2023/resources',
      },
    ],
    schedule: [
      {
        id: nanoid(5),
        day: 1,
        startsAt: '14:15',
        endsAt: '16:00',
        room: 'HG E7',
        secondRoom: '',
        type: 'lecture',
        roomCode: '',
      },
      {
        id: nanoid(5),
        day: 5,
        startsAt: '10:15',
        endsAt: '12:00',
        room: 'HG F1',
        secondRoom: '',
        type: 'lecture',
        roomCode: '',
      },
    ],
  },
  {
    id: nanoid(5),
    name: 'Data Modeling and Databases',
    lecturer: 'Prof. Gustavo Alonso',
    mainLink: 'https://systems.ethz.ch/education/courses/2023-spring/dmdb.html',
    links: [
      {
        id: nanoid(5),
        label: 'Moodle',
        href: 'https://moodle-app2.let.ethz.ch/course/view.php?id=19679',
      },
    ],
    schedule: [
      {
        id: nanoid(5),
        day: 3,
        startsAt: '14:15',
        endsAt: '16:00',
        room: 'ML D28',
        secondRoom: '',
        type: 'lecture',
        roomCode: '',
      },
      {
        id: nanoid(5),
        day: 5,
        startsAt: '08:15',
        endsAt: '10:00',
        room: 'ML D28',
        secondRoom: '',
        type: 'lecture',
        roomCode: '',
      },
    ],
  },
  {
    id: nanoid(5),
    name: 'Formal Methods and Functional Programming',
    lecturer: 'Prof. Peter Müller and Prof. David Basin',
    mainLink: '',
    links: [
      {
        id: nanoid(5),
        label: 'Code Expert',
        href: ' https://expert.ethz.ch/enrolled/SS23/fmfp/exercises',
      },
    ],
    schedule: [
      {
        id: nanoid(5),
        day: 2,
        startsAt: '10:15',
        endsAt: '12:00',
        room: '',
        secondRoom: '',
        type: 'lecture',
        roomCode: '',
      },
      {
        id: nanoid(5),
        day: 4,
        startsAt: '10:15',
        endsAt: '12:00',
        room: '',
        secondRoom: '',
        type: 'lecture',
        roomCode: '',
      },
    ],
  },
  {
    id: nanoid(5),
    name: 'Wahrscheinlichkeit und Statistik',
    lecturer: 'Prof. Josef Teichmann',
    mainLink: 'https://metaphor.ethz.ch/x/2023/fs/401-0614-00L/',
    links: [],
    schedule: [
      {
        id: nanoid(5),
        day: 3,
        startsAt: '08:15',
        endsAt: '10:00',
        room: 'ML D28',
        secondRoom: '',
        type: 'lecture',
        roomCode: '',
      },
    ],
  },
]
