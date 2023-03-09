import styles from './Header.module.css'
import logo from './logo.svg'

const Header = () => {
  return <header className={styles.header}>
    <img src={logo} className={styles.logo} alt="logo"/>
    <p>
      Edit <code>src/App.jsx</code> and save to reload.
    </p>
    <a
      className={styles.link}
      href="https://github.com/solidjs/solid"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn Solid
    </a>
  </header>
}

export default Header
