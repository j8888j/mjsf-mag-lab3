import { BaseModel } from "@/models/base.model";
import type { User } from "@/types";

export class UserModel extends BaseModel implements User {
    id: number;
    email: string;
    password: string;
    name: string;
    role: string;
    avatar: string;

    constructor(data: User) {
        super(data);
        this.init(data);
    }

    /**
     * Initialize user properties
     * @param data
     */
    init(data: User): void {
        this.id = data.id;
        this.email = data.email;
        this.password = data.password;
        this.name = data.name;
        this.role = data.role;
        this.avatar = data.avatar;
    }
}
