import { Request, Response } from 'express';
import { Pool } from 'mysql2/promise';
import { getClient } from '../../lib/mysql-client';
import { updateNote } from '../../cmd/notes';
import { noteIsValid } from 'solace-demo-common/dist/noteIsValid';
import type { Note } from 'solace-demo-common/dist/types';

type UpdateNoteRequest = Request<any, any, Note>;

export const update = async (
  req: UpdateNoteRequest,
  res: Response
) => {

  try {
    const [client, isValid] = await Promise.all([
      getClient(),
      noteIsValid(req.body)
    ]);
    if (isValid) {
      await updateNote(client, req.body);
      res.status(200).json({ success: true, note: req.body });
    }
    else throw new Error("Note not valid.");
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Could not update note."
    });
  }
}

