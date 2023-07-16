class Namespace {
  constructor(id, name, image, endpoints) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.endpoints = endpoints;
    this.rooms = [];
  }

  addRoom(roomObj) {
    this.rooms.push(roomObj);
  }
}

module.exports = Namespace;
