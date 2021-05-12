import {UPDATE_USER, UpdateUserAction, User} from '../types/users';

const initialUserState: User = {} as User;

export function userReducer(
  state: User = initialUserState,
  action: UpdateUserAction,
): User {
  switch (action.type) {
    case UPDATE_USER: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
