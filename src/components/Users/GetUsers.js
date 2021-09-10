import create from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";




const userStore = create(set => ({
    urlNotes: "https://zatta1.herokuapp.com/api/notes/",
    urlTodos: "https://zatta1.herokuapp.com/api/todos/",
    urlUsers: "https://zatta1.herokuapp.com/api/users/",
    isLoggedIn: false,
    notes: [],
    todos: [],
    currentUser: {},
    notesFilter: '',
    todosFilter: '',
    setCurrentUser: (currentUser) => set(state => ({...state, currentUser})),
    setLoggedIn: (isLoggedIn) => set(state => ({...state, isLoggedIn})),
    setNotes: (notes) => set(state => ({...state, notes})),
    setTodos: (todos) => set(state => ({...state, todos})),
    setNotesFilter: (notesFilter) => set(state => ({...state, notesFilter})),
    setTodosFilter: (todosFilter) => set(state => ({...state, todosFilter}))
}))

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Store', userStore);
  }

export default userStore

