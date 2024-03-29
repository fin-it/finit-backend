import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db";
import { User } from "./user.model";

class FoundItem extends Model {
	public foundId!: string;
	public uid!: string;
	public itemName!: string;
	public itemDescription?: string;
	public foundDate!: Date;
	public foundTime!: Date;
	public category!: string;
	public latitude!: string;
	public longitude!: string;
	public locationDetail?: string;
	public status!: boolean;
	public foundOwner!: User;
}

class LostItem extends Model {
	public lostId!: string;
	public uid!: string;
	public itemName!: string;
	public itemImage!: string;
	public itemDescription?: string;
	public lostDate!: Date;
	public lostTime!: Date;
	public category!: string;
	public latitude!: string;
	public longitude!: string;
	public status!: boolean;
	public lostOwner!: User;


}

FoundItem.init({
	foundId: {
		type: DataTypes.STRING,
		primaryKey: true,
	},
	uid: {
		type: DataTypes.STRING,
		references: {
			model: User,
			key: "uid",
		},
		allowNull: false,
	},
	itemName: {
		type: DataTypes.STRING,
		allowNull: false        
	},
	itemDescription: {
		type: DataTypes.STRING,
		allowNull: false
	},
	foundDate: {
		type: DataTypes.DATEONLY,
		allowNull: false
	},
	foundTime: {
		type: DataTypes.TIME,
		allowNull: false
	},
	category: {
		type: DataTypes.STRING,
		allowNull: false
	},
	latitude: {
		type: DataTypes.STRING,
		allowNull: false
	},
	longitude: {
		type: DataTypes.STRING,
		allowNull: false
	},
	locationDetail: {
		type: DataTypes.STRING,
	},
	status: {
		type: DataTypes.BOOLEAN,
		defaultValue: false
	},
}, {
	sequelize,
	modelName: "foundItem",
});

LostItem.init({
	lostId: {
		type: DataTypes.STRING,
		primaryKey: true,
	},
	uid: {
		type: DataTypes.STRING,
		references: {
			model: User,
			key: "uid",
		},
		allowNull: false,
	},
	itemName: {
		type: DataTypes.STRING,
		allowNull: false        
	},
	itemImage: {
		type: DataTypes.STRING,
		allowNull: false
	},
	itemDescription: {
		type: DataTypes.STRING,
		allowNull: true
	},
	lostDate: {
		type: DataTypes.DATEONLY,
		allowNull: false
	},
	lostTime: {
		type: DataTypes.TIME,
		allowNull: false
	},
	category: {
		type: DataTypes.STRING,
		allowNull: false
	},
	latitude: {
		type: DataTypes.STRING,
		allowNull: false
	},
	longitude: {
		type: DataTypes.STRING,
		allowNull: false
	},
	status: {
		type: DataTypes.BOOLEAN,
		defaultValue: false
	}
}, {
	sequelize,
	modelName: "lostItem",
});

export { FoundItem, LostItem };
