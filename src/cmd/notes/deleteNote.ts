import { Pool } from 'mysql2/promise';
import { queries } from '../../lib/query';

export const deleteNote = async (
  client: Pool,
  id: number
): Promise<void> => {

  const query = await queries;
  await client.execute(query.delete_note, [id]);
}
