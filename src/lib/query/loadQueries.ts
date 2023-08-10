import { promises as fs } from 'fs';

type Queries = { [key: string]: string };

export const loadQueriesFromFiles = async (
  dir: string,
  filenames: string[]
): Promise<Queries> => (

  Promise.all(
    filenames.map(filename => (
      fs.readFile(dir+filename, 'utf8').then(query => ([filename, query]))
    ))
  ).then((results: [string, string][]) => {
    const dict = {};
    for (const [filename, query] of results) {
      const key = filename.slice(0, -4); // Remove file extension.
      dict[key] = query;
    }
    return dict;
  })
);

