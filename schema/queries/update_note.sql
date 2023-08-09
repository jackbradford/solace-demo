UPDATE
  notes
SET
  title=?,
  body=?,
  updated_at=CURRENT_TIMESTAMP
WHERE
  id=?;

