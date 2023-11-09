import Disco from "./Disco.js";
import {DiscoParams} from "./interface/interface.js";

export default class CD extends Disco {
    public constructor( discoParams : DiscoParams ) {
        super( discoParams)
    }

    play() : string {
        return `Sonando el CD ${this._name} y su precio es ${ this._pvp }`
    }
}