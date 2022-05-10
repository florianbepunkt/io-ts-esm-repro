import * as COD from "io-ts/lib/Codec.js"
import * as DEC from "io-ts/lib/Decoder.js"

const a = COD.string;
const b = a.decode(1);  // b resolves to Kind2<M, E, A>
const c = DEC.union(DEC.string, DEC.number); // resolves to DEC.Decoder<unknown, unknown>
