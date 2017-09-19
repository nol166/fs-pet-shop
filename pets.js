function error() {
  return "Usage: node pets.js [read | create | update | destroy]"
}


let command = process.argv[2];

if (command !== "undefined"){
  console.error(error());
  process.exit(1);
} else if (command === "read") {
  let parsesPetsToObject = JSON.parse('pets');
  console.log(parsesPetsToObject);
}



// console.log("very bottom");
