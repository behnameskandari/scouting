export const getTimeFormat = (time) => {
  return time.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
};

export const getActiveHalf = (start, end, time) => {
  return start <= time && time < end;
};

export const updateHalf = (time, handler) => {
  switch (time) {
    case 1800:
      handler(3600);
      break;
    case 3600:
      handler(4500);
      break;
    case 4500:
      handler(5400);
      break;
    default:
      break;
  }
};

export const getPenalty = (penalty) => {
  switch (penalty) {
    case 1:
      return "First Penalty - Home";
    case 2:
      return "Second Penalty - Home";
    case 3:
      return "Third Penalty - Home";
    case 4:
      return "First Penalty - Away";
    case 5:
      return "Second Penalty - Away";
    case 6:
      return "Third Penalty - Away";
    default:
      break;
  }
};
