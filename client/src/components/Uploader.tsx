import { useContext } from 'react';
import { ImageContext } from '../context';
import { UploaderLayout } from '../layouts';
import { Image, UploadImage } from './';

export const Uploader = () => {
  const { url } = useContext(ImageContext);

  return (
    <UploaderLayout>
      {!!url ? <Image url={ url } /> : <UploadImage />}
    </UploaderLayout>
  );
};
