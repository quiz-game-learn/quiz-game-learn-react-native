import {ActionCreator} from 'redux';
import {UPDATE_USER, User, UserActionTyp} from '../types/users';

export const updateStoredUser: ActionCreator<UserActionTyp> = (user: User) => {
  return {type: UPDATE_USER, payload: user};
};
