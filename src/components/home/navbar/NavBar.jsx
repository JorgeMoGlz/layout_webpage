import styles from './navbar.module.css';
import Image from 'next/image';

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <div className={`${styles.navContainer} ${styles.wrapper}`}>
                <div className={styles.logo}>
                    <a href="#">
                        <Image src="/logoRAISA.svg" width={100} height={50} />
                    </a>
                </div>
                <div className={styles.navLinks}>
                    <ul className={styles.nav}>
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Nosotros</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar