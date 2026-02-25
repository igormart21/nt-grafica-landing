'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Portfolio.module.css';

export default function Portfolio() {
    const [filter, setFilter] = useState('todos');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const categories = [
        { id: 'todos', name: 'Todos' },
        { id: 'fachadas', name: 'Fachadas' },
        { id: 'adesivos', name: 'Lonas e Adesivo' },
        { id: 'plotagens', name: 'Plotagens' },
        { id: 'impressos', name: 'Comunicação 360°' },
        { id: 'endomarketing', name: 'Endomarketing' },
        { id: 'totens', name: 'Totens' }
    ];

    const items = [
        // Fachadas
        { id: 1, category: 'fachadas', title: 'Fachada 01', src: '/assets/portifolio01/01.jpeg' },
        { id: 2, category: 'fachadas', title: 'Fachada 02', src: '/assets/portifolio01/02.jpeg' },
        { id: 3, category: 'fachadas', title: 'Fachada 03', src: '/assets/portifolio01/03.jpeg' },
        { id: 4, category: 'fachadas', title: 'Fachada 04', src: '/assets/portifolio01/04.jpeg' },
        { id: 5, category: 'fachadas', title: 'Fachada 05', src: '/assets/portifolio01/05.jpeg' },
        { id: 6, category: 'fachadas', title: 'Fachada 06', src: '/assets/portifolio01/06.jpeg' },
        { id: 7, category: 'fachadas', title: 'Fachada 07', src: '/assets/portifolio01/07.jpeg' },
        { id: 8, category: 'fachadas', title: 'Fachada 08', src: '/assets/portifolio01/08.jpeg' },
        { id: 30, category: 'fachadas', title: 'Fachada 09', src: '/assets/portifolio01/fachada-emeb.jpg' },
        // Lonas e Adesivo — 09, 10, 12, 13, 14, 19, 20
        { id: 9, category: 'adesivos', title: 'Lona/Adesivo 01', src: '/assets/portifolio01/09.jpeg' },
        { id: 10, category: 'adesivos', title: 'Lona/Adesivo 02', src: '/assets/portifolio01/10.jpeg' },
        { id: 11, category: 'adesivos', title: 'Lona/Adesivo 03', src: '/assets/portifolio01/12.jpeg' },
        { id: 12, category: 'adesivos', title: 'Lona/Adesivo 04', src: '/assets/portifolio01/13.jpeg' },
        { id: 13, category: 'adesivos', title: 'Lona/Adesivo 05', src: '/assets/portifolio01/14.jpeg' },
        { id: 14, category: 'adesivos', title: 'Lona/Adesivo 06', src: '/assets/portifolio01/19.jpeg' },
        { id: 15, category: 'adesivos', title: 'Lona/Adesivo 07', src: '/assets/portifolio01/20.jpeg' },
        { id: 35, category: 'adesivos', title: 'Lona/Adesivo 08', src: '/assets/portifolio01/adesivo_new_1.jpg' },
        { id: 36, category: 'adesivos', title: 'Lona/Adesivo 09', src: '/assets/portifolio01/adesivo_new_2.jpg' },
        { id: 37, category: 'adesivos', title: 'Lona/Adesivo 10', src: '/assets/portifolio01/adesivo_new_4.jpg' },
        { id: 38, category: 'adesivos', title: 'Lona/Adesivo 11', src: '/assets/portifolio01/adesivo_new_5.jpg' },
        { id: 39, category: 'adesivos', title: 'Lona/Adesivo 12', src: '/assets/portifolio01/adesivo_new_6.jpg' },
        // Plotagens — 21 a 27
        { id: 16, category: 'plotagens', title: 'Plotagem 01', src: '/assets/portifolio01/21.jpeg' },
        { id: 17, category: 'plotagens', title: 'Plotagem 02', src: '/assets/portifolio01/22.jpeg' },
        { id: 18, category: 'plotagens', title: 'Plotagem 03', src: '/assets/portifolio01/23.jpeg' },
        { id: 19, category: 'plotagens', title: 'Plotagem 04', src: '/assets/portifolio01/24.jpeg' },
        { id: 20, category: 'plotagens', title: 'Plotagem 05', src: '/assets/portifolio01/25.jpeg' },
        { id: 21, category: 'plotagens', title: 'Plotagem 06', src: '/assets/portifolio01/26.jpeg' },
        { id: 22, category: 'plotagens', title: 'Plotagem 07', src: '/assets/portifolio01/27.jpeg' },
        { id: 23, category: 'plotagens', title: 'Plotagem 08', src: '/assets/portifolio01/28.jpeg' },
        { id: 24, category: 'plotagens', title: 'Plotagem 09', src: '/assets/portifolio01/29.jpeg' },
        { id: 25, category: 'plotagens', title: 'Plotagem 10', src: '/assets/portifolio01/30.jpeg' },
        // Comunicação 360° — 31 a 34
        { id: 26, category: 'impressos', title: 'Comunicação 360° 01', src: '/assets/portifolio01/31.jpeg' },
        { id: 27, category: 'impressos', title: 'Comunicação 360° 02', src: '/assets/portifolio01/32.jpeg' },
        { id: 28, category: 'impressos', title: 'Comunicação 360° 03', src: '/assets/portifolio01/33.jpeg' },
        { id: 29, category: 'impressos', title: 'Comunicação 360° 04', src: '/assets/portifolio01/34.jpeg' },
        // Endomarketing — 39 a 42
        { id: 31, category: 'endomarketing', title: 'Endomarketing 01', src: '/assets/portifolio01/39.jpeg' },
        { id: 32, category: 'endomarketing', title: 'Endomarketing 02', src: '/assets/portifolio01/40.jpeg' },
        { id: 33, category: 'endomarketing', title: 'Endomarketing 03', src: '/assets/portifolio01/41.jpeg' },
        { id: 34, category: 'endomarketing', title: 'Endomarketing 04', src: '/assets/portifolio01/42.jpeg' },
    ];

    const filteredItems = filter === 'todos'
        ? items
        : items.filter(item => item.category === filter);

    return (
        <section id="portfolio" className={styles.portfolio}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Nosso Portfólio</h2>
                    <p className={styles.subtitle}>Confira alguns de nossos trabalhos recentes.</p>

                    <div className={styles.filters}>
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                className={`${styles.filterBtn} ${filter === cat.id ? styles.active : ''}`}
                                onClick={() => setFilter(cat.id)}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.grid}>
                    {filteredItems.map(item => (
                        <div key={item.id} className={styles.item} onClick={() => setSelectedImage(item.src)}>
                            <Image
                                src={item.src}
                                alt={item.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className={styles.image}
                                style={{ objectFit: 'cover' }}
                            />
                            <div className={styles.overlay}>
                                <i className="bi bi-zoom-in"></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div className={styles.modal} onClick={() => setSelectedImage(null)}>
                    <button className={styles.closeModal} onClick={() => setSelectedImage(null)} aria-label="Fechar">
                        <i className="bi bi-x"></i>
                    </button>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={selectedImage}
                            alt="Imagem Ampliada"
                            fill
                            className={styles.modalImage}
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
