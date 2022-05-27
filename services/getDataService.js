//TODO crear estructura de datos para los personajes
var http = require("http");

class Character {
  constructor(id, cname, species, type, gender, origin) {
    this.id = id;
    this.cname = cname;
    this.species = species;
    this.type = type;
    this.gender = gender;
    this.origin = origin;
  }

  async requestData() {
    var req;
    var options = {
      host: "https://rickandmortyapi.com",
      path: "/api/character",
    };

    let callback = function (response) {
      var str = "";

      //another chunk of data has been received, so append it to `str`
      response.on("data", function (chunk) {
        str += chunk;
      });

      //the whole response has been received, so we just print it out here
      response.on("end", function () {
        console.log(str);
      });
    };

    req = http.request(options, callback).end();
    return req;
  }

  async info() {
    return `${this.id} ${this.cname}, ${this.species}`;
  }
}

module.exports = Character;
