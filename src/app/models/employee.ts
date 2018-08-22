export class Employee {
    emp_id?: number;
    emp_name?: string;
    emp_address?: string;
    emp_contactno?: number;
    username?: string;
    password?: string;
    emp_role?: string;

    constructor(
        username,
        password
    ) {
        this.username = username;
        this.password = password;
    }
}
