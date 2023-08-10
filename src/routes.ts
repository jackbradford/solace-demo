import {
  add,
  deleteNote,
  getNote,
  getNotes,
  search,
  update
} from './endpoints/notes';

const NOTES_URL = '/notes';

export const routes = {
  add: {
    endpoint: add,
    method: "post",
    path: NOTES_URL
  },
  deleteNote: {
    endpoint: deleteNote,
    method: "delete",
    path: NOTES_URL
  },
  getNote: {
    endpoint: getNote,
    method: "get",
    path: "/note"
  },
  getNotes: {
    endpoint: getNotes,
    method: "get",
    path: NOTES_URL
  },
  search: {
    endpoint: search,
    method: "get",
    path: `${NOTES_URL}/search`
  },
  update: {
    endpoint: update,
    method: "put",
    path: NOTES_URL
  },
}

