import { UploaderLayout } from '../layouts';
import styles from '../styles/Loader.module.css';

export const Loader = () => {
  return (
    <UploaderLayout>
      <h1 className='title' style={{ width: '100%' }}>Uploading Image</h1>
      <span className={styles.loader}></span>
    </UploaderLayout>
  );
};
