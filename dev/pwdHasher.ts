import * as bcrypt from "bcrypt";
import "dotenv/config";

console.log(bcrypt.hashSync(process.env.DEV_HASHER as string, 10));
console.log("\n");
