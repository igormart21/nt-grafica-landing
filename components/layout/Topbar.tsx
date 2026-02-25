import Link from 'next/link';
import styles from './Topbar.module.css';

export default function Topbar() {
    return (
        <div className={styles.topbar}>
            <div className={styles.container}>
                <p className={styles.text}>
                    <span style={{ color: 'var(--color-primary-yellow)' }}>•</span> ESTRATÉGIA{' '}
                    <span style={{ color: 'var(--color-primary-yellow)' }}>•</span> CRIATIVIDADE{' '}
                    <span style={{ color: 'var(--color-primary-yellow)' }}>•</span> RESULTADO
                </p>
                <div className={styles.actionGroup}>
                    <a
                        href="https://www.instagram.com/nt.comunicacao_?igsh=NW93b2VsZ3hwdnZo"
                        target="_blank"
                        className={styles.instagramLink}
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-instagram"></i> Siga nosso instagram
                    </a>
                </div>
            </div>
        </div>
    );
}
