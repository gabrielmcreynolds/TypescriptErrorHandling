import {getUserTraditional, getUser} from "./db";
import {ErrorMessages, isError} from "./error";

const mainTraditional = async () => {
    try {
        const user = await getUserTraditional();
        console.log(`Got user: ${JSON.stringify(user)}`)
    } catch (e) {
        console.log(`Caught error: ${e}`)
    }
}

const main = async () => {
    const user = await getUser();
    if(isError(user)) {
        if(user.message === ErrorMessages.DBError) {
            console.log(`Returned DB error: ${JSON.stringify(user)}`);
        } else {
            console.log(`Returned general error: ${JSON.stringify(user)}`);
        }
    }
    else {
        console.log(`Got user: ${JSON.stringify(user)}`)
    }
}

main();
