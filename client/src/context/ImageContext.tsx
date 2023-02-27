import { createContext } from 'react';

export interface ImageContextProps {
  url: string | null;
  error?: unknown;
  isLoading: boolean;
  uploadImage: (files: FileList) => Promise<void>;
}

export const ImageContext = createContext({} as ImageContextProps);
