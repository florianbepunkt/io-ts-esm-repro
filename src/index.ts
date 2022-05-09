import * as COD from "io-ts/lib/Codec.js"

const a = COD.string;
const b = a.decode(1);  // b resolves to Kind2<M, E, A>

