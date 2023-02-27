import React, { useReducer } from 'react';
import { ImageContext, ImageReducer, ImageState } from './';

type ImageResponse = {
  url: string;
};

const INITIAL_STATE: ImageState = {
  isLoading: false,
  url: null,
};

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const ImageProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(ImageReducer, INITIAL_STATE);

  const uploadImage = async (files: FileList) => {
    if (files.length === 0) return;

    const form = new FormData();
    form.append('image', files[0]);

    try {
      dispatch({ type: '[image] set loading', payload: true });
      const resp = await fetch('http://localhost:8080/api/image', {
        method: 'post',
        body: form,
      });
      const { url }: ImageResponse = await resp.json();

      dispatch({ type: '[image] set url', payload: url });
    } catch (error) {
      console.error({ error });
      dispatch({ type: '[image] set error', payload: error });
    } finally {
      dispatch({ type: '[image] set loading', payload: false });
    }
  };

  return (
    <ImageContext.Provider
      value={{
        ...state,
        uploadImage,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};
