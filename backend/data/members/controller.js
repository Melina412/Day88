import { Member } from './model.js';

export async function addMember(req, res) {
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
  try {
    await member.save();
    console.log(`member '${groupData.title}' was saved sucessfully.`);
    res.end();
  } catch (error) {
    console.error('error while saving member:', error);
    res.status(500).end();
  }
}
