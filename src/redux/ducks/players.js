export const updateX = (value) => ({
  type: "updateX",
  value,
});

export const updateO = (value) => ({
  type: "updateO",
  value,
});

const initialState = {
  playerX: "",
  playerO: "",
};

const updatePlayers = (state = initialState, action) => {
  switch (action.type) {
    case "updateX":
      return { ...state, playerX: action.value };
    case "updateO":
      return { ...state, playerO: action.value };
    default:
      return state;
  }
};

export default updatePlayers;
