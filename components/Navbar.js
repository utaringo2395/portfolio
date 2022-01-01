import Link from "next/link";
import stylesNav from "../styles/Nav.module.css";

const Navbar = () => {
    return(
        <nav className={stylesNav.navigation}>
          <Link href="/" className={stylesNav.logo}>
              <a className={stylesNav.logo}>mmmacias</a>
          </Link>
          <ul className={stylesNav.navList}>
            <li className={`${stylesNav.navItem} ${stylesNav.hoverAnimation}`}>
              <Link className={stylesNav.navLink} href="/about">
                about me
              </Link>
            </li>
            <li className={`${stylesNav.navItem} ${stylesNav.hoverAnimation}`}>
              <Link className={stylesNav.navLink} href="/contact">
                contact
              </Link>
            </li>
          </ul>
        </nav>
    );
}

export default Navbar;