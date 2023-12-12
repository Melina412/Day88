import { Song } from './model.js';

export async function addSong(req, res) {
  const songData = req.body;
  const song = new Song({
    title: songData.title,
    group: songData.group,
    album: songData.album,
    genre: songData.genre.split(', '), // falls die genres mit , getrennt eigegeben werden
    release: songData.release,
    wins: songData.wins,
    mv: songData.mv,
  });
  try {
    await song.save();
    console.log(`song '${songData.title}' was saved successfully.`);
    res.end();
  } catch (error) {
    console.error('error while saving song:', error);
    res.status(500).end();
  }
}
