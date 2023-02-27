import styles from '../styles/Container.module.css'

interface Props {
  children: React.ReactNode;
}

export const UploaderLayout: React.FC<Props> = ({ children }) => {
  return (
    <section className={styles.wrapper}>
      { children }
    </section>
  )
}
