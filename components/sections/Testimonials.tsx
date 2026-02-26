import styles from './Testimonials.module.css';

export default function Testimonials() {
    return (
        <section id="depoimentos" className={styles.testimonials}>
            <div className={styles.videoContainer}>
                <video
                    src="/assets/portifolio01/motion_nt_1_site.mp4"
                    controls
                    className={styles.video}
                    playsInline
                />
            </div>
        </section>
    );
}
