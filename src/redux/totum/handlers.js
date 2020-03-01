const initialState = {
  isLoading: false,
  popupView: false,
  showError: false,
};

export const showPopup = (state, action) => {
  return { ...state, isLoading: true, showError: action.payload };
};

export const showPopupSuccess = state => {
  return { ...state, isLoading: false, popupView: !state.popupView };
};

export const showPopupFailure = state => ({
  ...state,
  isLoading: false,
  error: 'RIP',
});

export const onCloseErrorPopUp = (state, action) => {
  return { ...state, showError: action.payload };
};

export default initialState;
