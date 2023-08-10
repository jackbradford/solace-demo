import { Pool } from 'mysql2/promise';
import { queries } from '../../lib/query';
import type { Note } from 'solace-demo-common/dist/types';

export const addNote = async (
  client: Pool,
  note: Note
): Promise<Note> => {

  const query = await queries;
  const { body, title } = note;
  const result = await client.execute(query.insert_note, [title, body]);
  return note;
}

