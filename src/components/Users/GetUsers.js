import create from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";




const userStore = create(set => ({
    urlNotes: "https://zatta1.herokuapp.com/api/notes/",
    urlUsers: "https://zatta1.herokuapp.com/api/users/",
    isLoggedIn: false,
    notes: [],
    currentUser: {},
    setCurrentUser: (currentUser) => set(state => ({...state, currentUser})),
    setLoggedIn: (isLoggedIn) => set(state => ({...state, isLoggedIn})),
    setNotes: (notes) => set(state => ({...state, notes}))
}))

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Store', userStore);
  }

export default userStore

