export class Task {
    id?: number;
    title: string;
    description: string;
    progress: number;
    start_date: Date;
    duration: number;
    type: string;
    skillRequirement?: object;
    teamRequirement?: number;
    emp_id: number;

    constructor() {}
}
