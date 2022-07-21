export const initialState: AppState = {
    showMessage: false
  };
  
  export enum EReduxActionTypes {
    TOGGLE_MESSAGE = "TOGGLE_MESSAGE"
  }
  
  export function rootReducer(
    state: AppState = initialState,
    action: IReduxBaseAction
  ) {
    switch (action.type) {
      case EReduxActionTypes.TOGGLE_MESSAGE:
        return { ...state, showMessage: !state.showMessage };
      default:
        return state;
    }
  }
  
  export interface IReduxBaseAction {
    type: EReduxActionTypes;
  }
  
  export interface AppState {
    showMessage: boolean;
  }
  