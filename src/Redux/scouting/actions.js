import { UPDATE_MATCHID } from "./types";

export const updateMatchID = (matchId) => ({
  type: UPDATE_MATCHID,
  payload: {
    matchId,
  },
});
