import create from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";




const userStore = create(set => ({
    isLoggedIn: false,
    notes: [],
    users: [],
    currentUser: {},
    setUsers: (users) => set(state => ({...state, users})),
    setCurrentUser: (currentUser) => set(state => ({...state, currentUser})),
    setLoggedIn: (isLoggedIn) => set(state => ({...state, isLoggedIn})),
    setNotes: (notes) => set(state => ({...state, notes}))
}))

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Store', userStore);
  }

export default userStore

