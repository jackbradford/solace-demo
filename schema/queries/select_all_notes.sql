SELECT
  id,
  title,
  body,
  created_at,
  updated_at
FROM
  notes
WHERE
  active=1
ORDER BY
  created_at DESC;

