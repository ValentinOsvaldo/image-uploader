import { useContext, useRef } from 'react';
import { ImageContext } from '../context';
import { Button } from './';
import image from '../assets/image.svg';
import styles from '../styles/Uploader.module.css';
import { useDropzone } from 'react-dropzone';

export const UploadImage = () => {
  const { uploadImage } = useContext(ImageContext);
  const inputFile = useRef<HTMLInputElement>(null);
  const { getInputProps, getRootProps, isDragActive } = useDropzone({
    noClick: true,
    accept: {
      'image/*': ['.jpeg', '.png'],
    },
    onDropAccepted: (files) => {
      uploadImage(files as any);
    },
  });

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;

    uploadImage(target.files!);
  };

  return (
    <>
      <h1 className="title" style={{ marginBottom: 0, textAlign: 'center' }}>
        Upload your image
      </h1>
      <p className={styles.subtitle}>File should be Jpeg, Png...</p>
      <div
        {...getRootProps({
          className: styles['dropzone'],
          style: { opacity: isDragActive ? 0.5 : 1 },
        })}
      >
        <input {...getInputProps()} />
        <img
          src={image}
          alt="uploader"
          className={styles['image-icon']}
          width={115}
        />
        <p>Drag & Drop your image here</p>
      </div>

      <p style={{ fontSize: '0.75rem', color: '#BDBDBD' }}>Or</p>

      <Button onClick={() => inputFile.current?.click()}>Choose a file</Button>

      <input
        type="file"
        accept="image/png, image/jpeg"
        ref={inputFile}
        onChange={onInputChange}
        style={{ display: 'none' }}
      />
    </>
  );
};
