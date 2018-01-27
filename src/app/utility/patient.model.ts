
export class Patient {
    public name: string;
    public surname: string;
    public gender: string;
    public age: number;

    constructor (name: string, surname: string, gender: string, age: number ) {
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.age = age;
    }
}
