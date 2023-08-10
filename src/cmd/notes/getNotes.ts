import { Pool } from 'mysql2/promise';
import { queries } from '../../lib/query';
import type { Note } from 'solace-demo-common/dist/types';

export const getNotes = async (client: Pool): Promise<Note[]> => {

  const query = await queries;
  const [results] = await client.execute(query.select_all_notes);
  return results as Note[];
}

