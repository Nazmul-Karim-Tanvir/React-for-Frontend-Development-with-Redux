import {str,obj,arr as array,hello} from "./component.js";
import {app} from "./others.js";
import a from "./component.js";
console.log(str);
console.log(obj);
console.log(array);
console.log(hello());
console.log(a);

let newapp = new app("Some Random Text");
console.log(newapp.printSomething());