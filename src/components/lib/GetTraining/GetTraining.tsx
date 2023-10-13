import React from 'react'
import styles from './GetTraining.module.scss'
import { Link } from 'react-router-dom'
import Button from '@/components/lib/Button'

const GetTraining: React.FC = () => {
    return (
        <section className={styles.training}>
            <div className={`${styles.wrapper} container`}>
              <div className={styles.trainingText}>
                <h2>Get training today</h2>
                <p>Gimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry’s standard.</p>
                <Link to="/">
                  <Button>Contact Now</Button>
                </Link>
              </div>
              <div className={styles.trainingImg}>
                <img src="assets/banner-person.png" alt="person"/>
              </div>
            </div>
        </section>
    );
};

export default GetTraining;
