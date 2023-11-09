import Disco from "./Disco.js";
export default class Vinilo extends Disco {
    constructor(discoParams) {
        super(discoParams);
    }
    play() {
        return `Sonando el vinilo ${this._name} y su precio es ${this._pvp}`;
    }
}
