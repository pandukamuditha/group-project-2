export class Task {
    id?: number;
    title: string;
    description: string;
    startDate: Date;
    duration: number;
    type: string;
    skillRequirement?: object;
    teamRequirement?: number;

    constructor() {}
}
