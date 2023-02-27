import { useContext } from 'react';
import { Loader, Uploader } from './components';
import { ImageContext } from './context';
import styles from './styles/Container.module.css';

export const ImageUploader = () => {
  const { isLoading } = useContext(ImageContext);

  return (
    <main className={styles['container']}>
      {!isLoading ? <Uploader /> : <Loader />}
    </main>
  );
};
