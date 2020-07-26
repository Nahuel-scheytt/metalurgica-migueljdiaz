import React, {useState} from 'react';
import styled from 'styled-components'
import Link from 'next/link'
import styles from './header.module.scss'
import { useWindowSize } from '../../hooks/window-size'

const Nav = styled.nav`
  width: 100%;
`

export default function Header() {
  const { isMobile } = useWindowSize()
  const [isActive, setActive] = useState(false);

  return (
    <header className={styles.header}>
      <Nav className={styles.nav}>
        <div className={`main-navigation ${isActive ? "toggled": ""}`}>
          <div className="button-container">
            <button type="button" onClick = {()=>setActive(!isActive)} id="menu_button" className="menu-button">
              <span className="hamburger"></span>
            </button>
          </div>

          <Link href="/">
            <a className={styles.navbarBrand}>Metalurgica Miguel J Diaz</a>
          </Link>

          <div className="menu-container">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>
        </div>

        {/* {!isMobile && (
          <ul className={styles.navbar}>
            <li className={styles.navItem}>
              <Link href="/">
                <a className={styles.navLink}>Productos</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/">
                <a className={styles.navLink}>Nosotros</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/">
                <a className={styles.navLink}>Contacto</a>
              </Link>
            </li>
          </ul>
        )} */}
      </Nav>
    </header>
  )
}