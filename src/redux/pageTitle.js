import { CHANGE_TITLE } from "../constants/actionTypes";

export const changeTitle = (title) => ({
  type: CHANGE_TITLE,
  payload: title,
});

const Title = (state = "", action) => {
  switch (action.type) {
    case CHANGE_TITLE:
      return (state = action.payload);
    default:
      return state;
  }
};

export default Title;
