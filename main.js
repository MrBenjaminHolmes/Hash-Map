const HashMap = require("./hashmap.js");

const map = new HashMap(4);
console.log("Initial Map Length:", map.getLength());

map.set("name", "Bob");
console.log("Set name: Bob");
console.log("Get name:", map.get("name"));

map.set("age", 25);
console.log("Set age: 25");
console.log("Get age:", map.get("age"));

map.set("location", "Germany");
console.log("Set location: Germany");
console.log("Get location:", map.get("location"));

console.log("Update name to Dave");
console.log("Get updated name:", map.get("name"));

console.log("Has age:", map.has("age"));
console.log("Has non-existing key:", map.has("non-existing"));

console.log("Remove age:", map.remove("age"));
console.log("Get removed age:", map.get("age"));
console.log("Remove non-existing key:", map.remove("non-existing"));

console.log("Map Length after removing age:", map.getLength());

map.clear();
console.log("Map cleared.");
console.log("Map Length after clear:", map.getLength());

map.set("key1", "value1");
map.set("key2", "value2");
map.set("key3", "value3");
map.set("key4", "value4");
console.log("Set multiple keys to trigger resize");

console.log("Keys:", map.keys());
console.log("Values:", map.values());
console.log("Entries:", map.enteries());

console.log("All tests complete.");
