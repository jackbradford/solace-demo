import { Pool } from 'mysql2/promise';
import { queries } from '../../lib/query';
import type { Note } from 'solace-demo-common/dist/types';

export const searchNotes = async (
  client: Pool,
  keyphrase: string
): Promise<Note[]> => {

  const query = await queries;
  const term = `%${keyphrase}%`;
  const [results] = await client.execute(query.select_notes, [term]);
  return results as Note[];
}

