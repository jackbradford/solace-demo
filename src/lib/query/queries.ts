import { loadQueriesFromFiles, QUERIES_DIR } from './';

export const queries = loadQueriesFromFiles(QUERIES_DIR, [
  "delete_note.sql",
  "insert_note.sql",
  "select_all_notes.sql",
  "select_note.sql",
  "select_notes.sql",
  "update_note.sql"
]);

