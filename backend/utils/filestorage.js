import fs from 'fs/promises';
import { v4 } from 'uuid';
const DB = './storage/';

// export function createStorage() {
//   fs.access(DB)
//     .then(() => console.log('storage ordner ist bereits vorhanden'))
//     .catch(() => {
//       fs.mkdir(DB);
//       console.log('storage ordner wurde erstellt');
//     });
// }

export async function createStorage() {
  try {
    await fs.access(DB);
    console.log(`folder ${DB} already exists.`);
  } catch (error) {
    fs.mkdir(DB);
    console.log(`folder ${DB} was created successfully.`);
  }
}

// export function saveDocument(document) {
//   document.id = v4();
//   fs.mkdir(DB + document.collection)
//     .then(() => {
//       fs.writeFile(
//         DB + document.collection + '/' + document.id,
//         JSON.stringify(document)
//       );
//     })
//     .catch(() =>
//       fs.writeFile(
//         DB + document.collection + '/' + document.id,
//         JSON.stringify(document)
//       )
//     );
// }

export async function saveDocument(document) {
  document.id = v4();
  try {
    await fs.mkdir(DB + document.collection);
  } catch (error) {
    console.log(
      `folder ${DB + document.collection} was not created. reason: `,
      error.message
    );
  } finally {
    await fs.writeFile(
      DB + document.collection + '/' + document.id,
      JSON.stringify(document)
    );
    console.log(
      `file ${
        DB + document.collection + '/' + document.id
      } was created successfully.`
    );
  }
}
