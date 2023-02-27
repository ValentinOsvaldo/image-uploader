import toast, { Toaster } from 'react-hot-toast';
import { MdCheckCircle } from 'react-icons/md';
import { Button } from './';
import styles from '../styles/Image.module.css';

interface Props {
  url: string;
}

export const Image: React.FC<Props> = ({ url }) => {
  const copyUrl = () => {
    navigator.clipboard.writeText(url);
    toast.success('Copy to clipboard');
  };

  return (
    <>
      <MdCheckCircle size={55} color="#219653" />
      <h1 className="title" style={{ textAlign: 'center' }}>Uploaded Successfully!</h1>
      <img src={url} alt={url} width={350} className={styles.image} />

      <div className={styles['link-container']}>
        <p>{url}</p>
        <Button onClick={copyUrl}>Copy Link</Button>
      </div>
      <Toaster position="bottom-right" />
    </>
  );
};
