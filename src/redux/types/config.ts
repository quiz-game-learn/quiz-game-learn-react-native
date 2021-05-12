export interface Config {
    selectedQuizz: string
}

export const UPDATE_CONFIG = 'UPDATE_CONFIG';

export interface UpdateConfigAction {
    type: typeof UPDATE_CONFIG;
    payload: Config;
}
