export class Snow_Linux {
    isThisALinux(){
        let data = Deno.build.os
        if(data == "linux"){
            return true
        }
        return false
    }
}