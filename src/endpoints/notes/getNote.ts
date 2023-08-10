import { Request, Response } from 'express';
import { Pool } from 'mysql2/promise';
import { getClient } from '../../lib/mysql-client';
import { getNote as getNoteCmd } from '../../cmd/notes';
import { noteIsValid } from 'solace-demo-common/dist/noteIsValid';
import type { Note } from 'solace-demo-common/dist/types';

type GetNoteRequest = Request<any, any, any, { id: number }>;

export const getNote = async (
  req: GetNoteRequest,
  res: Response
) => {

  try {
    const client = await getClient();
    const note = await getNoteCmd(client, req.query.id);
    res.status(200).json({ success: true, note });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Could not get note."
    });
  }
}

