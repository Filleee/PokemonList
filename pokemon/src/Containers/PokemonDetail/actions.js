import { CATCH } from "./constants";

export const setCatch = (pokemon) => {
    return {
        type: CATCH,
        pokemon
    }
}