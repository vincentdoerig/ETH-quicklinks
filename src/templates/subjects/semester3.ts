import { nanoid } from 'nanoid'

export default [
  {
    id: nanoid(5),
    name: 'Theoretische Informatik',
    lecturer: 'Prof. Juraj Hromkovic',
    mainLink: 'https://courses.ite.inf.ethz.ch/theo_inf_22/',
    links: [
      {
        id: nanoid(5),
        label: 'Moodle',
        href: 'https://moodle-app2.let.ethz.ch/course/view.php?id=18439',
      },
      {
        id: nanoid(5),
        label: 'VVZ',
        href: 'http://vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?semkez=2022W&ansicht=LEHRVERANSTALTUNGEN&lerneinheitId=163672&lang=de',
      },
    ],
    schedule: [
      {
        id: nanoid(5),
        day: 2,
        startsAt: '08:15',
        endsAt: '10:00',
        room: 'HG E7',
        secondRoom: '',
        type: 'lecture',
        roomCode: 'hg/hg-e-7',
      },
      {
        id: nanoid(5),
        day: 5,
        startsAt: '08:15',
        endsAt: '10:00',
        room: 'HG E7',
        secondRoom: '',
        type: 'lecture',
        roomCode: 'hg/hg-e-7',
      },
    ],
  },
  {
    id: nanoid(5),
    name: 'Analysis II',
    lecturer: 'Prof. Özlem Imamoglu',
    mainLink: 'https://metaphor.ethz.ch/x/2022/hs/401-0213-16L/',
    links: [
      {
        id: nanoid(5),
        label: 'Ex. hand-in',
        href: 'https://sam-up.math.ethz.ch/',
      },
      {
        id: nanoid(5),
        label: 'VVZ',
        href: 'http://vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lerneinheitId=162699&semkez=2022W&ansicht=LEHRVERANSTALTUNGEN&lang=de',
      },
    ],
    schedule: [
      {
        id: nanoid(5),
        day: 4,
        startsAt: '14:15',
        endsAt: '16:00',
        room: 'HG E7',
        secondRoom: '',
        type: 'lecture',
        roomCode: 'hg/hg-e-7',
      },
    ],
  },
  {
    id: nanoid(5),
    name: 'Numerical Methods for Computer Science',
    lecturer: 'Prof. Ralf Hiptmair',
    mainLink: 'https://moodle-app2.let.ethz.ch/course/view.php?id=17727',
    links: [
      {
        id: nanoid(5),
        label: 'Code Expert',
        href: 'https://expert.ethz.ch/',
      },
      {
        id: nanoid(5),
        label: 'VVZ',
        href: 'http://vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lerneinheitId=162598&semkez=2022W&ansicht=LEHRVERANSTALTUNGEN&lang=de',
      },
    ],
    schedule: [
      {
        id: nanoid(5),
        day: 4,
        startsAt: '10:15',
        endsAt: '12:00',
        room: 'HG F1',
        secondRoom: '',
        type: 'lecture',
        roomCode: 'hg/hg-f-1',
      },
    ],
  },
  {
    id: nanoid(5),
    name: 'Systems Programming and Computer Architecture',
    lecturer: 'Prof. Timothy Roscoe',
    mainLink:
      'https://systems.ethz.ch/education/courses/2022-autumn/systems-programming-and-computer-architecture.html',
    links: [
      {
        id: nanoid(5),
        label: 'Moodle',
        href: 'https://moodle-app2.let.ethz.ch/course/view.php?id=18098',
      },
      {
        id: nanoid(5),
        label: 'VVZ',
        href: 'http://vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lerneinheitId=162562&semkez=2022W&ansicht=LEHRVERANSTALTUNGEN&lang=de',
      },
    ],
    schedule: [
      {
        id: nanoid(5),
        day: 2,
        startsAt: '10:15',
        endsAt: '12:00',
        room: 'HG E7',
        secondRoom: '',
        type: 'lecture',
        roomCode: 'hg/hg-e-7',
      },
      {
        id: nanoid(5),
        day: 3,
        startsAt: '10:15',
        endsAt: '12:00',
        room: 'NO C60',
        secondRoom: '',
        type: 'lecture',
        roomCode: 'no/no-c-60',
      },
    ],
  },
]
