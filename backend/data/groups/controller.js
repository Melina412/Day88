import { Group } from './model.js';

// export function addGroup(req, res) {
//   const group = new Group({
//     name: '',
//     members: '',
//     debut: '',
//     label: '',
//   });
//   group.save();
//   res.end();
// }

// - form version:

export function addGroup(req, res) {
  const groupData = req.body;
  const group = new Group({
    name: groupData.name,
    members: groupData.members,
    debut: groupData.debut,
    label: groupData.label,
  });
  group.save();
  res.end();
}
