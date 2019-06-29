import { AnyAction } from "redux";

export interface ActionType extends AnyAction {
  type: string;
  payload: {
    word?: string;
    definition?: string;
    x?: number;
    y?: number;
  };
}

export const START_LOOKUP = "START_LOOKUP";
export const FINISH_LOOKUP = "FINISH_LOOKUP";
export const SAVE_COORDS = "SAVE_COORDS";

export const startLookup = (word: string): ActionType => ({
  type: START_LOOKUP,
  payload: { word }
});

export const saveCoords = (x: number, y: number): ActionType => ({
  type: SAVE_COORDS,
  payload: { x, y }
});

export const finishLookup = (word: string, definition: string): ActionType => ({
  type: FINISH_LOOKUP,
  payload: { word, definition }
});
