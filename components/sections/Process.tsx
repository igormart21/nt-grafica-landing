import styles from './Process.module.css';

export default function Process() {
    const steps = [
        { num: 1, title: 'Contato e Apresentação', desc: 'Traga sua necessidade e ideias pessoalmente ou via Whatsapp.' },
        { num: 2, title: 'Criação e Aprovação', desc: 'Vamos desenvolver seu projeto e elevar seus padrões, após apresentação e aprovação da(o) contratante, seu material será confeccionado.' },
        { num: 3, title: 'Produção', desc: 'Com base em sua necessidade seu projeto sairá do papel com os melhores materiais e equipamentos do mercado.' },
        { num: 4, title: 'Entrega e Aplicação', desc: 'Realizaremos a entrega do seu material e a instalação com profissionais capacitados. Ou você retira em nossa base.' }
    ];

    return (
        <section id="como-funciona" className={styles.process}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Com a NT é Simples!</h2>
                    <p className={styles.subtitle}>Escolha quem te prioriza.</p>
                </div>

                <div className={styles.timeline}>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.step}>
                            <div className={styles.circle}>{step.num}</div>
                            <div className={styles.content}>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                            {index < steps.length - 1 && <div className={styles.line}></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
