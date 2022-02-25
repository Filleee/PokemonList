import { RENAME, RELEASE } from "./constants";

export const setRename = (pokemon) => {
    return {
        type: RENAME,
        pokemon
    };
}

export const setRelease = (pokemon) => {
    return {
        type: RELEASE,
        pokemon
    };
}