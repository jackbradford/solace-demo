import { Pool } from 'mysql2/promise';
import { queries } from '../../lib/query';
import type { Note } from 'solace-demo-common/dist/types';

export const updateNote = async (
  client: Pool,
  note: Note
): Promise<void> => {

  const query = await queries;
  const { body, id, title } = note;
  await client.execute(query.update_note, [title, body, id]);
}

