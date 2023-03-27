import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
  import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()


  export const eventAtom = atom({
    key: "event",
    default: [
        {
          title : "Big Meeting",
          allDay : true,
          start : new Date(2023,2,21),
          end : new Date(2023,2,24),
          cat: "red"
        }
      ],
      effects_UNSTABLE: [persistAtom],
  })

  export const journalAtom = atom({
    key: "journal",
    default: [],
    effects_UNSTABLE: [persistAtom],
  });

  export const tasksAtom = atom({
    key: "tasks",
    default: [],
    effects_UNSTABLE: [persistAtom],
  })

  export const userAtom = atom({
    key: "user",
    default: undefined,
    effects_UNSTABLE: [persistAtom],
  })

  export const userName = atom({
    key: "userName",
    default: undefined,
    effects_UNSTABLE: [persistAtom],
  })

  export const userEmail = atom({
    key: "userEmail",
    default: undefined,
    effects_UNSTABLE: [persistAtom],
  })

  export const userPassword = atom({
    key: "userPassword",
    default: undefined,
    effects_UNSTABLE: [persistAtom],
  })



