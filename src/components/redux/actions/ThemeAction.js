const setMode = (mode) => {
  return {
    type: "SET_MODE",
    payload: mode,
  };
};
const getTheme = (mode) => {
  return {
    type: "GET_THEME",
  };
};

const exportDefault = {
  setMode,
  getTheme,
};

export default exportDefault;
