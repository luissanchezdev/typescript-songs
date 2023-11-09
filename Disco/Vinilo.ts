import Disco from "./Disco.js";
import {DiscoParams} from "./interface/interface.js";

export default class Vinilo extends Disco {
    public constructor( discoParams : DiscoParams) {
        super(discoParams)
    }

    play() : string {
        return `Sonando el vinilo ${this._name} y su precio es ${ this._pvp }`
    }
}