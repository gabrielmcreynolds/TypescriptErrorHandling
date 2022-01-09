import {User} from "./user";
import {ErrorMessages, MyError} from "./error";

export const getUserTraditional = (): Promise<User> => {
    throw new Error("bad db error")
}

export const getUser = (): Promise<User | MyError> => {
    return Promise.resolve({
        message: ErrorMessages.DBError,
        resolution: "check db connection"
    });
}
