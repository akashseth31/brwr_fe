import { UPGRADE_VERSION } from './actionTypes';


export const upgradeVersion = () => (dispatch, getState) => {
  const { project: { version }} = getState();
  dispatch({ type: UPGRADE_VERSION, payload: version + 1 });
}
