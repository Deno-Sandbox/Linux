# Linux 🐧

## Main script: 
Just check if the running platform of deno is a linux os or not

```ts
import { Snow_Linux } from "./mod.ts";
let data = new Snow_Linux();
console.log(data.isThisALinux())
```

## password.ts
Allow you to create valid linux password (require onpenssl)
```ts
import { passwordGenerator } from "./password.ts";
let password = new passwordGenerator("password");
console.log(await password.getPassword());
```