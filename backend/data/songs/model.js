import { saveDocument } from '../../utils/filestorage.js';

export function Song(item) {
  this.title = item.title;
  this.group = item.group;
  this.album = item.album;
  this.genre = item.genre;
  this.release = item.release;
  this.mv = item.mv;
  this.collection = 'song';
  this.save = async function () {
    await saveDocument({
      title: this.title,
      group: this.group,
      album: this.album,
      genre: this.genre,
      release: this.release,
      mv: this.mv,
      collection: this.collection,
    });
  };
}
