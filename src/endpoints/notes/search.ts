import { Request, Response } from 'express';
import { Pool } from 'mysql2/promise';
import { getClient } from '../../lib/mysql-client';
import { searchNotes } from '../../cmd/notes';
import type { Note } from 'solace-demo-common/dist/types';

type AddNoteRequest = Request<any, any, any, { keyphrase: string }>;

export const search = async (
  req: AddNoteRequest,
  res: Response
) => {

  try {
    const client = await getClient();
    const notes = await searchNotes(client, req.query.keyphrase);
    res.status(200).json({ success: true, notes });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Could not find notes."
    });
  }
}

