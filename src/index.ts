
import * as COD from "io-ts/Codec"

const a = COD.string;
const b = a.decode(1);  // b resolves to correct Either

