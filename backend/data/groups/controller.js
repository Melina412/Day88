import { Group } from './model.js';

export async function addGroup(req, res) {
  const groupData = req.body;
  const group = new Group({
    name: groupData.name,
    members: groupData.members,
    debut: groupData.debut,
    label: groupData.label,
  });
  try {
    await group.save();
    console.log(`group '${groupData.title}' was saved sucessfully.`);
    res.end();
  } catch (error) {
    console.error('error while saving group:', error);
    res.status(500).end();
  }
}
