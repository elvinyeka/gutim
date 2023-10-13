import React from 'react'
import styles from './GymAward.module.scss'

const GymAward: React.FC = () => {
    return (
        <section className={styles.award}>
            <div className={`container ${styles.awardInner}`}>
              <div className={styles.awardText}>
                <h2>Best gym award</h2>
                <p>Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean pretium sollicitudin,
                  nascetur auci elit consequat ipsutissem niuis sed odio sit amet nibh vulputate cursus a
                  amet.</p>
                <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida quam semper libero
                  sit amet. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida quam
                  semper libero sit amet.</p>
              </div>
              <div className={styles.awardImg}>
                <img src="assets/award.webp" alt="award"/>
              </div>
            </div>
        </section>
    );
};

export default GymAward;
