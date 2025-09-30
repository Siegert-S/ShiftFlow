export interface Shift {
    id: string;
    startTime: string;
    endTime: string;
    assignmentId: string;
    status: 'planning' | 'confirmed' | 'changed';
}