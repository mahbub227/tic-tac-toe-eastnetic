export const startGame = () => ({
  type: "startGame",
});

const initialState = {
  start: false,
};

const updateGame = (state = initialState, action) => {
  switch (action.type) {
    case "startGame":
      return { ...state, start: true };
    default:
      return state;
  }
};

export default updateGame;
