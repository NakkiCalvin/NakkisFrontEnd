import { handleActions, createActions } from 'redux-actions';

import initialState, * as handlers from './handlers';

export const actions = createActions({
  SHOW_POPUP: undefined,
  SHOW_POPUP_SUCCESS: undefined,
  SHOW_POPUP_FAILURE: undefined,
  ON_CLOSE_ERROR_POP_UP: undefined,
});

const popupsReducer = handleActions(
  new Map([
    [actions.showPopup, handlers.showPopup],
    [actions.showPopupSuccess, handlers.showPopupSuccess],
    [actions.showPopupFailure, handlers.showPopupFailure],
    [actions.onCloseErrorPopUp, handlers.onCloseErrorPopUp],
  ]),
  initialState
);

export default popupsReducer;
