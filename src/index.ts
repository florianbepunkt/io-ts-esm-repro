
import * as COD from "io-ts/Codec"
import * as DEC from "io-ts/lib/Decoder.js"

const a = COD.string;
const b = a.decode(1);  // b resolves to correct Either
const c = DEC.union(DEC.string, DEC.number); // resolves correctly to DEC.Decoder<unknown, string | number>
