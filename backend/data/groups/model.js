import { saveDocument } from '../../utils/filestorage.js';

export function Group(item) {
  this.name = item.name;
  this.members = item.members;
  this.debut = item.debut;
  this.label = item.label;
  this.collection = 'group';
  this.save = async function () {
    await saveDocument({
      name: this.name,
      members: this.members,
      debut: this.debut,
      label: this.label,
      collection: this.collection,
    });
  };
}
