
// Linux check
import { Snow_Linux } from "./mod.ts";
let data = new Snow_Linux();
console.log(data.isThisALinux())

// Password generator
import { passwordGenerator } from "./password.ts";
let password = new passwordGenerator("password");
console.log(await password.getPassword());