var events = require("events");
var util = require("util");

var Person = function(name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var phu = new Person("Phu");
var hiep = new Person("Hiep");
var canh = new Person("Canh");

var people = [phu, hiep, canh];

//on is declare what we want to do
people.forEach(person => {
  person.on("speak", function(mess) {
    console.log(person.name + " said: " + mess);
  });
});

// emit is use
phu.emit("speak", "hey dudes");
hiep.emit("speak", "what's up");
