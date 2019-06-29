import { START_LOOKUP, FINISH_LOOKUP, SHOW_POPUP, HIDE_POPUP } from "./actions";
import { combineReducers, AnyAction } from "redux";

function lookup(state = {}, action: AnyAction) {
  switch (action.type) {
    case START_LOOKUP: {
      const { word } = action.payload;
      if (!word) return state;

      return {
         ...state,
         [word]: null 
      };
    }

    case FINISH_LOOKUP: {
      const { word, definition } = action.payload;
      if (!word) return state;

      return {
        ...state,
        [word]: definition
      }
    }

    default: return state;
  }
}

function popup(state = null, action: AnyAction) {
  switch (action.type) {
    case SHOW_POPUP: {
      return action.payload;
    }
    case HIDE_POPUP: {
      return null;
    }
    default: return state;
  }
}

const lookupApp = combineReducers({ lookup, popup })

export default lookupApp;