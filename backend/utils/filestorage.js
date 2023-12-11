import fs from 'fs/promises';
import { v4 } from 'uuid';
const DB = './storage/';

export function createStorage() {
  fs.access(DB)
    .then(() => console.log('storage ordner ist bereits vorhanden'))
    .catch(() => {
      fs.mkdir(DB);
      console.log('storage ordner wurde erstellt');
    });
}

export function saveDocument(document) {
  document.id = v4();
  fs.mkdir(DB + document.collection)
    .then(() => {
      fs.writeFile(
        DB + document.collection + '/' + document.id,
        JSON.stringify(document)
      );
    })
    .catch(() =>
      fs.writeFile(
        DB + document.collection + '/' + document.id,
        JSON.stringify(document)
      )
    );
}
