import {Config, UPDATE_CONFIG, UpdateConfigAction} from "../types/config";

const initialConfigState: Config = {} as Config;

export function configReducer(
    state: Config = initialConfigState,
    action: UpdateConfigAction,
): Config {
    switch (action.type) {
        case UPDATE_CONFIG: {
            return {
                ...state,
                ...action.payload,
            };
        }
        default:
            return state;
    }
}
