import { Request, Response } from 'express';
import { Pool } from 'mysql2/promise';
import { getClient } from '../../lib/mysql-client';
import { addNote } from '../../cmd/notes';
import { noteIsValid } from 'solace-demo-common/dist/noteIsValid';
import type { Note } from 'solace-demo-common/dist/types';

type AddNoteRequest = Request<any, any, Note>;

export const add = async (
  req: AddNoteRequest,
  res: Response
) => {

  try {
    const [client, isValid] = await Promise.all([
      getClient(),
      noteIsValid(req.body)
    ]);
    if (isValid) {
      await addNote(client, req.body);
      res.status(200).json({ success: true }); // FIXME: return new note w/ ID.
    }
    else throw new Error("Note not valid.");
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Could not add note."
    });
  }
}

