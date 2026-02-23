'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Portfolio.module.css';

export default function Portfolio() {
    const [filter, setFilter] = useState('todos');

    const categories = [
        { id: 'todos', name: 'Todos' },
        { id: 'fachadas', name: 'Fachadas' },
        { id: 'adesivos', name: 'Adesivos' },
        { id: 'placas', name: 'Placas' },
        { id: 'impressos', name: 'Impressos' }
    ];

    const items = [
        // Fachadas — 01 a 08
        { id: 1, category: 'fachadas', title: 'Fachada 01', src: '/assets/portifolio01/01.jpeg' },
        { id: 2, category: 'fachadas', title: 'Fachada 02', src: '/assets/portifolio01/02.jpeg' },
        { id: 3, category: 'fachadas', title: 'Fachada 03', src: '/assets/portifolio01/03.jpeg' },
        { id: 4, category: 'fachadas', title: 'Fachada 04', src: '/assets/portifolio01/04.jpeg' },
        { id: 5, category: 'fachadas', title: 'Fachada 05', src: '/assets/portifolio01/05.jpeg' },
        { id: 6, category: 'fachadas', title: 'Fachada 06', src: '/assets/portifolio01/06.jpeg' },
        { id: 7, category: 'fachadas', title: 'Fachada 07', src: '/assets/portifolio01/07.jpeg' },
        { id: 8, category: 'fachadas', title: 'Fachada 08', src: '/assets/portifolio01/08.jpeg' },
        // Adesivos — 09, 10, 12, 13, 14, 19, 20
        { id: 9, category: 'adesivos', title: 'Adesivo 01', src: '/assets/portifolio01/09.jpeg' },
        { id: 10, category: 'adesivos', title: 'Adesivo 02', src: '/assets/portifolio01/10.jpeg' },
        { id: 11, category: 'adesivos', title: 'Adesivo 03', src: '/assets/portifolio01/12.jpeg' },
        { id: 12, category: 'adesivos', title: 'Adesivo 04', src: '/assets/portifolio01/13.jpeg' },
        { id: 13, category: 'adesivos', title: 'Adesivo 05', src: '/assets/portifolio01/14.jpeg' },
        { id: 14, category: 'adesivos', title: 'Adesivo 06', src: '/assets/portifolio01/19.jpeg' },
        { id: 15, category: 'adesivos', title: 'Adesivo 07', src: '/assets/portifolio01/20.jpeg' },
        // Placas — 21 a 27
        { id: 16, category: 'placas', title: 'Placa 01', src: '/assets/portifolio01/21.jpeg' },
        { id: 17, category: 'placas', title: 'Placa 02', src: '/assets/portifolio01/22.jpeg' },
        { id: 18, category: 'placas', title: 'Placa 03', src: '/assets/portifolio01/23.jpeg' },
        { id: 19, category: 'placas', title: 'Placa 04', src: '/assets/portifolio01/24.jpeg' },
        { id: 20, category: 'placas', title: 'Placa 05', src: '/assets/portifolio01/25.jpeg' },
        { id: 21, category: 'placas', title: 'Placa 06', src: '/assets/portifolio01/26.jpeg' },
        { id: 22, category: 'placas', title: 'Placa 07', src: '/assets/portifolio01/27.jpeg' },
        // Impressos — 28 a 34
        { id: 23, category: 'impressos', title: 'Impresso 01', src: '/assets/portifolio01/28.jpeg' },
        { id: 24, category: 'impressos', title: 'Impresso 02', src: '/assets/portifolio01/29.jpeg' },
        { id: 25, category: 'impressos', title: 'Impresso 03', src: '/assets/portifolio01/30.jpeg' },
        { id: 26, category: 'impressos', title: 'Impresso 04', src: '/assets/portifolio01/31.jpeg' },
        { id: 27, category: 'impressos', title: 'Impresso 05', src: '/assets/portifolio01/32.jpeg' },
        { id: 28, category: 'impressos', title: 'Impresso 06', src: '/assets/portifolio01/33.jpeg' },
        { id: 29, category: 'impressos', title: 'Impresso 07', src: '/assets/portifolio01/34.jpeg' },
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
                        <div key={item.id} className={styles.item}>
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
        </section>
    );
}
