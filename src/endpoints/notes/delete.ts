import { Request, Response } from 'express';
import { Pool } from 'mysql2/promise';
import { getClient } from '../../lib/mysql-client';
import { deleteNote as _delete } from '../../cmd/notes';
import type { Note } from 'solace-demo-common/dist/types';

type DeleteNoteRequest = Request<any, any, any, { id: number }>;

export const deleteNote = async (
  req: DeleteNoteRequest,
  res: Response
) => {

  try {
    const client = await getClient();
    await _delete(client, req.query.id);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Could not delete note."
    });
  }
}

