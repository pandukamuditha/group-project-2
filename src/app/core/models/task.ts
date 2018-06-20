export class Task {
    id: number;
    title: string;
    description: string;
    role: string;
    numEmployees: number;
    skillLevel: number;
    startDate: Date;
    duration: number;

    constructor(
        id: number,
        title: string,
        description: string,
        role: string,
        numEmployees: number,
        skillLevel: number,
        startDate: Date,
        duration: number
    ) {
        this.title = title;
    }
}
