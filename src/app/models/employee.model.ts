export interface Employee {
    id: string;
    firstName: string;
    lastName: string;
    departmentId: number;
    role?: string;
    contact?: {
        email: string;
        address?: string;
        phone?: string;
    }
}