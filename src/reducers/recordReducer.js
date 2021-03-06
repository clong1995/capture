import { RECORD_START, RECORD_STOP } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECORD_START:
      return { recording: true };
    case RECORD_STOP:
      return { recording: false, blob: action.payload };
    default:
      return state;
  }
};
