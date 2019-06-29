import { AnyAction } from "redux";

export interface ActionType extends AnyAction {
  type: string;
  payload: { word?: string, definition?: string };
}

export const START_LOOKUP = "START_LOOKUP";
export const FINISH_LOOKUP = "FINISH_LOOKUP";
export const SHOW_POPUP = "SHOW_POPUP";
export const HIDE_POPUP = "HIDE_POPUP";

export const startLookup = (word: string): ActionType => ({
  type: START_LOOKUP,
  payload: { word }
});

export const finishLookup = (word: string, definition: string): ActionType => ({
  type: FINISH_LOOKUP,
  payload: { word, definition }
});

export const hidePopup = (): ActionType => ({ 
  type: HIDE_POPUP,
  payload: {}
});

export const showPopup = (word: string): ActionType => ({ 
  type: SHOW_POPUP,
  payload: { word }
});