import Disco from "./Disco.js";
export default class CD extends Disco {
    constructor(discoParams) {
        super(discoParams);
    }
    play() {
        return `Sonando el CD ${this._name} y su precio es ${this._pvp}`;
    }
}
