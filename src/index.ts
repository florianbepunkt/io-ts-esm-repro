import * as COD from "io-ts/Codec"
import * as E from "fp-ts/Either"
import * as DEC from "io-ts/Decoder"
import { identity } from "fp-ts/lib/function";

const a = COD.string;
const b = a.decode(1);  // b resolves to Kind2<M, E, A>

const c: COD.Codec<unknown, string, string> = {
    decode: (i) => typeof i === "string" ? DEC.success(i) : DEC.failure(i, "Expected string"),
    encode: identity
}

const d = c.decode("")