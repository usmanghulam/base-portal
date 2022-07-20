import { EReduxActionTypes, IReduxBaseAction } from "./rootReducer";

export interface IReduxToggleMessageAction extends IReduxBaseAction {
  type: EReduxActionTypes.TOGGLE_MESSAGE;
}

export function toggleMessage(): IReduxToggleMessageAction {
  return {
    type: EReduxActionTypes.TOGGLE_MESSAGE
  };
}
