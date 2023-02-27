import styles from '../styles/Button.module.css';

interface Props {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: React.FC<Props> = ({
  children,
  className,
  disabled,
  loading,
  onClick,
}) => {
  return (
    <button
      className={`${styles['button']} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {loading && <span className={styles.loader}></span>}
      {children}
    </button>
  );
};
