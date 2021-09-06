export class Entity {
  matchId = "";
  timestamp = "";
  data = {
    mainClock: {
      type: "main",
      seconds: 0,
      limit: 0,
      running: 0,
      active: 0,
      direction: 1,
    },
    penalties: [
      {
        type: 1,
        seconds: 0,
        limit: 0,
        running: 0,
        active: 0,
        direction: -1,
      },
      {
        type: 2,
        seconds: 0,
        limit: 0,
        running: 0,
        active: 0,
        direction: -1,
      },
      {
        type: 3,
        seconds: 0,
        limit: 0,
        running: 0,
        active: 0,
        direction: -1,
      },
      {
        type: 4,
        seconds: 0,
        limit: 0,
        running: 0,
        active: 0,
        direction: -1,
      },
      {
        type: 5,
        seconds: 0,
        limit: 0,
        running: 0,
        active: 0,
        direction: -1,
      },
      {
        type: 6,
        seconds: 0,
        limit: 0,
        running: 0,
        active: 0,
        direction: -1,
      },
    ],
    score: {
      type: "score",
      scoreHome: 0,
      scoreAway: 0,
    },
    teamTimeout: [
      {
        type: 2,
        active: 0,
      },
      {
        type: 1,
        active: 0,
      },
    ],
    emptyGoal: [
      {
        type: 2,
        active: 0,
      },
      {
        type: 1,
        active: 0,
      },
    ],
  };
  constructor(matchId) {
    this.matchId = matchId;
  }
}
