import { Pool } from 'mysql2/promise';
import { queries } from '../../lib/query';
import type { Note } from 'solace-demo-common/dist/types';

export const getNote = async (
  client: Pool,
  id: number
): Promise<Note> => {

  const query = await queries;
  const [result] = await client.execute(query.select_note, [id]);
  if (!result[0]) {
    throw new Error("Could not find note.");
  }
  return result[0];
}

