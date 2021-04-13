import { makeAutoObservable } from "mobx";

class User {
    user = {
        name: '',
        birthDate: '',
        email: '',
        password: ''
    };

    constructor() {
        makeAutoObservable(this);
    };

    addUserName(data) {
        this.user.name = data.name;
        this.user.birthDate = data.date;
        return this.user;
    };

    addUserEmail(data) {
        this.user.email = data.email;
        return this.user
    };

    addUserPassword(data) {
        this.user.password = data.password;
        return this.user;
    };
}

const user = new User();

export default user;