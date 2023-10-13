import React from 'react'
import styles from './Services.module.scss'

const Services: React.FC = () => {
    return (
        <section className={styles.services}>
            <div className={styles.servicesImg}>
              <img src="assets/services/service.webp" alt="services"/>
            </div>
            <div className={styles.servicesItems}>
              <div>
                <div className={`${styles.servicesItem} ${styles.bgGray}`} >
                  <img src="assets/services/service-icon-1.png" alt="strategies"/>
                  <h4>Strategies</h4>
                  <p>Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient
                    montes.</p>
                </div>
                <div className={`${styles.servicesItem} ${styles.bgGray}`}>
                  <img src="assets/services/service-icon-3.png" alt="workout"/>
                  <h4>Workout</h4>
                  <p>Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient
                    montes.</p>
                </div>
              </div>
              <div>
                <div className={styles.servicesItem}>
                  <img src="assets/services/service-icon-2.png" alt="yoga"/>
                  <h4>Yoga</h4>
                  <p>Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient
                    montes.</p>
                </div>
                <div className={styles.servicesItem}>
                  <img src="assets/services/service-icon-4.png" alt="weight loss"/>
                  <h4>Weight Loss</h4>
                  <p>Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient
                    montes.</p>
                </div>
              </div>
            </div>
        </section>
    );
};

export default Services;
