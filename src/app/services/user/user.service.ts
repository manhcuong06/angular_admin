import { Injectable } from '@angular/core';
import { User } from '../../models/user/user.model';
import { MockUsers } from '../../mocks/user/user.mock';

@Injectable()
export class UserService {

    constructor() { }

    getMockUsers() {
        return MockUsers;
    }

    getPromiseUsers(): Promise<User[]> {
        return Promise.resolve(MockUsers);
    }

    getuser(id: number): Promise<User> {
        return this.getPromiseUsers()
            .then((users: User[]) => users.find(user => user.id == id));
    }
}