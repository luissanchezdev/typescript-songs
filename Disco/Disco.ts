import {DiscoParams, Song} from "./interface/interface"

export default abstract class Disco {
    protected _name : string
    protected _pvp : number
    protected _songs: Song[]

    public constructor( discoParams : DiscoParams ) {
        this._name = discoParams._name
        this._pvp = discoParams._pvp 
        this._songs = discoParams._songs
    }

    abstract play(): string
} 