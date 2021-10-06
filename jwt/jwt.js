const jwt = require("jsonwebtoken");

const token = jwt.sign({test:true},'testkey');

console.log(token);

//const decodel = jwt.verify(token,"tesey");
const decodel2 = jwt.decode(token)
console.log(decodel2)