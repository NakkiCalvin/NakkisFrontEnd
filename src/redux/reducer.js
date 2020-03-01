const initialState = {
  modalStatus: false,
  accountStatus: 'active',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HANDLE_MODAL': {
      const { modalStatus } = state;
      return {
        ...state,
        modalStatus: !modalStatus,
      };
    }
    default:
      return state;
  }
};

export default reducer;
