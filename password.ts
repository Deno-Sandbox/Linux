export class passwordGenerator {
    private password: string;
    private id: number = 6;

    constructor(password: string, id?: number) {
        this.password = password;
        if(id) {
            this.id = id;
        }
    }


    public async getPassword(): Promise<string> {
        // calculate password: $ID$SALT$HASH
        const salt = this.generateSalt();
        // generate the hash
        const p = await Deno.run({
            cmd: ["openssl", "passwd", "-6", "--salt", salt, "-stdin", "<<<", '"'+this.password+'"' ],
            stdin: "piped",
            stdout: "piped",
        });
        await p.status();
        const hash = await p.output();
        
        // return the password
        return `\$${this.id}\$${salt}\$${hash}`;
    }



    private generateSalt(): string {
        return this.generateRandomString(16);
    }

    private generateRandomString(length:number): string {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

}