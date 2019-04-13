export default class Message {
  constructor({ author, message }) {
    this.time = this.timeStamp();
    this.message = message;
    this.author = author;
  }

  timeStamp() {
    return (new Date()).toLocaleTimeString();
  }
}
