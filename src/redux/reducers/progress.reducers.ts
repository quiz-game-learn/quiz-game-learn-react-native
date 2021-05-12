import {Progress, UPDATE_PROGRESS, UpdateProgressAction} from "../types/progress";

const initialProgressState: Progress = {} as Progress;

export function progressReducer(
    state: Progress = initialProgressState,
    action: UpdateProgressAction,
): Progress {
    switch (action.type) {
        case UPDATE_PROGRESS: {
            return {
                ...state,
                ...action.payload,
            };
        }
        default:
            return state;
    }
}
