import { saveDocument } from '../../utils/filestorage.js';

export function Member(item) {
  this.name = item.name;
  this.group = item.group;
  this.position = item.position;
  this.birthday = item.birthday;
  this.mbti = item.mbti;
  this.zodiac = item.zodiac;
  this.bias = item.bias;
  this.collection = 'member';
  this.save = function () {
    saveDocument({
      name: this.name,
      group: this.group,
      position: this.position,
      birthday: this.birthday,
      mbti: this.mbti,
      zodiac: this.zodiac,
      bias: this.bias,
      collection: this.collection,
    });
  };
}
