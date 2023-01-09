import { DataTypes, Model, Optional } from 'sequelize';
import { sequelizeDb as sequelize } from '../db';

interface IRole {
    id: number;
    name: string;
    createAt: Date;
    updateAt: Date;
}

export type RoleCreationAttributes = Optional<IRole, 'id'>

export class Role extends Model<IRole, RoleCreationAttributes> {
    declare id: number;
    declare name: string;
    declare createAt: Date;
    declare updateAt: Date;
}

Role.init (
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          name: {
            type: new DataTypes.STRING(20),
            allowNull: false,
          },
          createAt: {
            type: DataTypes.DATE,
          },
          updateAt: {
            type: DataTypes.DATE,
          },
        },
        {
          sequelize,
          tableName: 'roles',
          modelName: 'role',
        }
)