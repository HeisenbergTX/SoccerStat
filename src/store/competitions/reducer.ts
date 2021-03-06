import {
  FETCH_COMPETITION_REQUEST,
  FETCH_COMPETITION_SUCCESS,
  FETCH_COMPETITION_ERROR,
} from "./competitionTypes";

interface IState {
  pending: boolean;
  competitions: object;
  error: null | string;
}

const initialState: IState = {
  pending: false,
  competitions: [],
  error: null,
};

export default (state = initialState, { type, payload }: any) => {
  switch (type) {
    case FETCH_COMPETITION_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_COMPETITION_SUCCESS:
      return {
        ...state,
        pending: false,
        competitions: payload.competitions,
        error: null,
      };
    case FETCH_COMPETITION_ERROR:
      return {
        ...state,
        pending: false,
        competitions: [],
        error: payload.error,
      };

    default:
      return state;
  }
};
