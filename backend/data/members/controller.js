import { Member } from './model.js';

// export function addMember(req, res) {
//   const member = new Member({
//     name: '',
//     group: '',
//     position: [],
//     birthday: '',
//     mbti: '',
//     zodiac: '',
//     bias: true,
//   });
//   member.save();
//   res.end();
// }

// - form version:

export function addMember(req, res) {
  const memberData = req.body;
  const member = new Member({
    name: memberData.name,
    group: memberData.group,
    position: memberData.position.split(', '),
    birthday: memberData.birthday,
    mbti: memberData.mbti,
    zodiac: memberData.zodiac,
    bias: Boolean(memberData.bias),
  });
  member.save();
  res.end();
}
