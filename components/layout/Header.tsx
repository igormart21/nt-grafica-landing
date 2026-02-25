'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/images/logo.png"
                        alt="NT Gráfica Logo"
                        style={{ height: '40px', width: 'auto', display: 'block' }}
                    />
                </Link>

                <button
                    className={`${styles.mobileToggle} ${isMenuOpen ? styles.active : ''}`}
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <ul className={styles.navList}>
                        <li><Link href="#servicos" onClick={closeMenu}>Serviços</Link></li>
                        <li><Link href="#portfolio" onClick={closeMenu}>Portfólio</Link></li>
                        <li><Link href="#como-funciona" onClick={closeMenu}>Como funciona</Link></li>
                        <li><Link href="#depoimentos" onClick={closeMenu}>Depoimentos</Link></li>
                        <li><Link href="#faq" onClick={closeMenu}>FAQ</Link></li>
                        <li><Link href="#contato" onClick={closeMenu}>Contato</Link></li>
                    </ul>

                    <Link
                        href="https://wa.me/5527999999999"
                        target="_blank"
                        className={styles.mobileCta}
                        onClick={closeMenu}
                    >
                        <i className="bi bi-whatsapp"></i> Orçar no WhatsApp
                    </Link>
                </nav>

                <Link href="https://wa.me/5527999999999" target="_blank" className={styles.ctaButton}>
                    <i className="bi bi-whatsapp"></i> Orçar no WhatsApp
                </Link>
            </div>
        </header>
    );
}
