import {ActionCreator} from 'redux';
import {Config, UPDATE_CONFIG, UpdateConfigAction} from "../types/config";

export const updateStoredConfig: ActionCreator<UpdateConfigAction> = (config: Config) => {
  return {type: UPDATE_CONFIG, payload: config};
};
