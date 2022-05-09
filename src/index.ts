import * as COD from "io-ts/lib/Codec.js"

const a = COD.string
const b = a.decode(1)