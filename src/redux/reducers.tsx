import { START_LOOKUP, FINISH_LOOKUP, SAVE_COORDS } from "./actions";
import { combineReducers, AnyAction } from "redux";

function lookup(state = {}, action: AnyAction) {
  switch (action.type) {
    case START_LOOKUP: {
      const { word } = action.payload;
      if (!word) {
        return {
          ...state,
          currentWord: null
        };
      }

      return {
         ...state, 
         [word]: null,
      };
    }

    case FINISH_LOOKUP: {
      const { word, definition } = action.payload;
      if (!word) return state;

      return {
        ...state,
        [word]: definition,
        currentWord: word
      }
    }

    default: return state;
  }
}

function coords(state = {x: 0, y: 0}, action: AnyAction) {
  switch (action.type) {
    case SAVE_COORDS: {
      return action.payload;
    }
    default: return state;
  }
}

const lookupApp = combineReducers({ lookup, coords })

export default lookupApp;