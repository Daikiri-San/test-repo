// @flow
import {
  ADD_STRING,
  ADD_STRING_SUCCESS,
  ADD_STRING_FAILED,
  UPDATE_STRING,
  UPDATE_STRING_SUCCESS,
  UPDATE_STRING_FAILED,
  DELETE_STRING,
  DELETE_STRING_SUCCESS,
  DELETE_STRING_FAILED,
} from "../../constants/actionTypes";

const INIT_STATE = {
  existStrings: [
    {
      id: 23421,
      identifier: "mobile.profile.generalInfo",
      string: "Базовая информация",
      hasTranslate: ["ru", "en", "es", "ee"],
    },
    {
      id: 23422,
      identifier: "mobile.profile.generalInfo",
      string: "Базовая информация",
      hasTranslate: ["ru", "en", "es", "ee"],
    },
    {
      id: 23423,
      identifier: "mobile.profile.generalInfo",
      string: "Базовая информация",
      hasTranslate: ["ru", "en", "es", "ee"],
    },
    {
      id: 23424,
      identifier: "mobile.profile.generalInfo",
      string: "Базовая информация",
      hasTranslate: ["ru", "en", "es", "ee"],
    },
    {
      id: 23425,
      identifier: "mobile.profile.generalInfo",
      string: "Базовая информация",
      hasTranslate: ["ru", "en", "es", "ee"],
    },
    {
      id: 23426,
      identifier: "mobile.profile.generalInfo",
      string: "Базовая информация",
      hasTranslate: ["ru", "en", "es", "ee"],
    },
    {
      id: 23427,
      identifier: "mobile.profile.generalInfo",
      string: "Базовая информация",
      hasTranslate: ["ru", "en", "es", "ee"],
    },
    {
      id: 23428,
      identifier: "mobile.profile.generalInfo",
      string: "Базовая информация",
      hasTranslate: ["ru", "en", "es", "ee"],
    },
    {
      id: 23429,
      identifier: "mobile.profile.generalInfo",
      string: "Базовая информация",
      hasTranslate: ["ru", "en", "es", "ee"],
    },
    {
      id: 23430,
      identifier: "mobile.profile.generalInfo",
      string: "Базовая информация",
      hasTranslate: ["ru", "en", "es", "ee"],
    },
    {
      id: 23431,
      identifier: "mobile.profile.generalInfo",
      string: "Базовая информация",
      hasTranslate: ["ru", "en", "es", "ee"],
    },
    {
      id: 23432,
      identifier: "mobile.profile.generalInfo",
      string: "Базовая информация",
      hasTranslate: ["ru", "en", "es", "ee"],
    },
    {
      id: 23433,
      identifier: "mobile.profile.generalInfo",
      string: "Базовая информация",
      hasTranslate: ["ru", "en", "es", "ee"],
    },
  ],
  loading: false,
  error: null,
};

const stringsReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case ADD_STRING:
      return { ...state, loading: true };
    case ADD_STRING_SUCCESS:
      return { ...state, existStrings: payload, loading: false, error: null };
    case ADD_STRING_FAILED:
      return { ...state, error: payload, loading: false };
    case UPDATE_STRING:
      return { ...state, loading: true };
    case UPDATE_STRING_SUCCESS:
      return { ...state, existStrings: payload, loading: false, error: null };
    case UPDATE_STRING_FAILED:
      return { ...state, error: payload, loading: false };
    case DELETE_STRING:
      return { ...state, user: null };
    case DELETE_STRING_SUCCESS:
      return { ...state, existStrings: payload, loading: false, error: null };
    case DELETE_STRING_FAILED:
      return { ...state, error: payload, loading: false };

    default:
      return { ...state };
  }
};

export default stringsReducer;
