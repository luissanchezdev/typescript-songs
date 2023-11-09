export interface DiscoParams {
    _name : string
    _pvp: number
    _songs : Song[]
}

export type Song = {
    name: string
    price: number
}