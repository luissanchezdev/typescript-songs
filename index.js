import Vinilo from "./Disco/Vinilo.js";
import CD from "./Disco/CD.js";
const vinilo = new Vinilo({ _name: "The Dark Side of the Moon", _pvp: 30, _songs: [{ name: "Speak to Me", price: 3 }] });
const cd = new CD({ _name: "The Dark Side of the Moon", _pvp: 30, _songs: [{ name: "Speak to Me", price: 3 }] });
console.log(vinilo.play());
console.log(cd.play());
