export class Profile {
    constructor(name, email){
        this.name = name
        this.email = email
    }

    hello(){
        console.log('Hello ',this.name, this.email)
        
    }
}