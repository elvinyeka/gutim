import React from 'react'

import Hero from '@/components/lib/Hero/Hero'
import BreadCrumbs from '@/components/lib/Breadcrumbs'
import AboutUs from '@/components/lib/AboutUs'
import GetTraining from '@/components/lib/GetTraining'
import Trainers from '@/components/lib/Trainers'
import NewMember from '@/components/lib/NewMember'
import Counters from './Counters'
import GymAward from './GymAward'

import styles from './styles.module.scss'

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <Hero title={'About'}>
        <BreadCrumbs label={'About'}/>
      </Hero>
      <AboutUs>
        <div className={styles.aboutText}>
          <p >Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean pretium
            sollicitudin, nascetur auci elit consequat ipsutissem niuis sed odio sit amet nibh vulputate
            cursus a amet.</p>
          <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida
            quam semper libero sit amet.</p>
        </div>
        <img className={styles.sign} src="assets/about-signature.png" alt="signature"/>
        <div className={styles.author}>
          <h4>Lettie Chavez</h4>
          <span>CEO - Founder</span>
        </div>
      </AboutUs>
      <Counters/>
      <GymAward/>
      <GetTraining/>
      <Trainers/>
      <NewMember/>
    </div>
  )
}

export default About
