import { UPGRADE_VERSION } from './actionTypes';

export const initialState = {
  name: 'Borrower platform',
  version: 1,
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPGRADE_VERSION:
      return { ...state, version: payload };
    default:
      return state;
  }
};

export default reducer;
