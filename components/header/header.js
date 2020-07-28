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
              <li>
                <Link href="/productos">
                  <a className={styles.navbarBrand}>Productos</a>
                </Link>
              </li>
              <li>
                <Link href="/contacto">
                  <a className={styles.navbarBrand}>Contacto</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Nav>
    </header>
  )
}