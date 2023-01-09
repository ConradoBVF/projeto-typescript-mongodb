import { sequelizeDb } from '../db';

interface IUser {
    id: number;
    username: string;
    email: string;
    password: string;
    role_id: number;
}