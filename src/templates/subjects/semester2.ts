import { nanoid } from 'nanoid'

export default [
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
]
