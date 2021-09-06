import { UPDATE_MATCHID } from "./types";

const INIT_STATE = {
  matchId: "",
};

export default function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case UPDATE_MATCHID:
      return {
        ...state,
        matchId: action.payload.matchId,
      };
    default:
      return { ...state };
  }
}
