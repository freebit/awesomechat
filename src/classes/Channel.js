export default class Channel {
  constructor({ title, users = [], messages = [] }) {
    this.id = this.generatorId();
    this.title = title;
    this.users = users;
    this.messages = messages;
  }

  generatorId() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
  }
}
