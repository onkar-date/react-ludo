import { RootState } from "./../../app/store";
const ludoSelector = {
  selectNoOfPlayers: (state: RootState) => state.ludo.playersCount,
};

export default ludoSelector;
