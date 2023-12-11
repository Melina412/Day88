import { Song } from './model.js';

// export function addSong(req, res) {
//   const song = new Song({
//     title: "90's Love",
//     group: 'NCT U',
//     album: 'NCT RESONANCE Pt. 2',
//     genre: ['R&B', 'Hip Hop'],
//     release: '11.2020',
//     mv: 'https://www.youtube.com/watch?v=A5H8zBb3iao',
//   });
//   song.save();
//   res.end();
// }

// - form version:

export function addSong(req, res) {
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
  song.save();
  res.end();
}
