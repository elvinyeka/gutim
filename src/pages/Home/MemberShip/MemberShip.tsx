import React from 'react'
import styles from './MemberShip.module.scss'

const MemberShip: React.FC = () => {
    return (
        <section className={styles.member}>
            <div className='container'>
              <div className={styles.memberTitle}>
                <h2>MEMBERSHIP PLANS</h2>
              </div>
              <div className={styles.memberItems}>
                <div className={styles.memberItem}>
                  <div className={styles.itemTitle}>
                    <h4>Basic</h4>
                    <div className={styles.triangle}></div>
                  </div>
                  <h2 className={styles.itemPrice}>$17<span>/01 mo</span></h2>
                  <ul>
                    <li>
                      <p>Duration</p>
                      <span>12 months</span>
                    </li>
                    <li>
                      <p>Personal trainer</p>
                      <span>00 person</span>
                    </li>
                    <li>
                      <p>Amount of people</p>
                      <span>01 person</span>
                    </li>
                    <li>
                      <p>Number of visits</p>
                      <span>Unlimited</span>
                    </li>
                  </ul>
                  <a href="#_" className={styles.itemBtn}>Sign Up Today</a>
                </div>
                <div className={styles.memberItem}>
                  <div className={styles.itemTitle}>
                    <h4>Standard</h4>
                    <div className={styles.triangle}></div>
                  </div>
                  <h2 className={styles.itemPrice}>$57<span>/01 mo</span></h2>
                  <ul>
                    <li>
                      <p>Duration</p>
                      <span>12 months</span>
                    </li>
                    <li>
                      <p>Personal trainer</p>
                      <span>01 person</span>
                    </li>
                    <li>
                      <p>Amount of people</p>
                      <span>01 person</span>
                    </li>
                    <li>
                      <p>Number of visits</p>
                      <span>Unlimited</span>
                    </li>
                  </ul>
                  <a href="#_" className={styles.itemBtn}>Start Now</a>
                </div>
                <div className={styles.memberItem}>
                  <div className={styles.itemTitle}>
                    <h4>Premium</h4>
                    <div className={styles.triangle}></div>
                  </div>
                  <h2 className={styles.itemPrice}>$98<span>/01 mo</span></h2>
                  <ul>
                    <li>
                      <p>Duration</p>
                      <span>12 months</span>
                    </li>
                    <li>
                      <p>Personal trainer</p>
                      <span>01 person</span>
                    </li>
                    <li>
                      <p>Amount of people</p>
                      <span>01 person</span>
                    </li>
                    <li>
                      <p>Number of visits</p>
                      <span>Unlimited</span>
                    </li>
                  </ul>
                  <a href="#_" className={styles.itemBtn}>Start Now</a>
                </div>
              </div>
            </div>
        </section>
    );
};

export default MemberShip;
