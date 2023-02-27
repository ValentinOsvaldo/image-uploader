export interface ImageState {
  url: string | null;
  error?: unknown;
  isLoading: boolean;
}

type ImageAction =
  | { type: '[image] set url'; payload: string }
  | { type: '[image] set error'; payload: unknown }
  | { type: '[image] set loading'; payload: boolean };

export const ImageReducer = (
  state: ImageState,
  action: ImageAction
): ImageState => {
  switch (action.type) {
    case '[image] set url':
      return {
        ...state,
        url: action.payload,
        error: undefined,
      };

    case '[image] set loading':
      return {
        ...state,
        isLoading: action.payload,
      };

    case '[image] set error':
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
