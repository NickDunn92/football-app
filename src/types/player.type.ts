export interface Player {
    id: string;
    firstname: string;
    lastname: string;
    nationality: string;
    team: string;
    age: number;
    position: string;
    createdAt: number;
    updatedAt: number;
    deletedAt?: number;
}