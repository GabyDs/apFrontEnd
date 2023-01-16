export class Project {
    id?: number;
    name: string;
    description: string;
    img: string;

    constructor(name: string, description: string, img: string){
        this.name = name;
        this.description = description;
        this.img = img;
    }
}