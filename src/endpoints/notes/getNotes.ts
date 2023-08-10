import { Request, Response } from 'express';
import { Pool } from 'mysql2/promise';
import { getClient } from '../../lib/mysql-client';
import { getNotes as getAllNotes } from '../../cmd/notes';
import type { Note } from 'solace-demo-common/dist/types';

export const getNotes = async (
  req: Request,
  res: Response
) => {

  try {
    const client = await getClient();
    const notes = await getAllNotes(client);
    res.status(200).json({ success: true, notes });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Could not get notes."
    });
  }
}

