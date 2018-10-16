export class Project {
    id?: number;
    title: string;
    description: string;
    client: string;

    constructor() {
        this.title = null;
        this.description = null;
        this.client = null;
    }
}
