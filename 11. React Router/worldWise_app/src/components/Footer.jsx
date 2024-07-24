import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        ©️ {new Date().getFullYear()} by Claudiu
      </p>
    </footer>
  );
}
