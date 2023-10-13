import React from 'react'
import { Link } from 'react-router-dom'

import HomeHero from '@/pages/Home/HomeHero/HomeHero.tsx'
import AboutUs from '@/components/lib/AboutUs'
import GetTraining from '@/components/lib/GetTraining'
import Button from '@/components/lib/Button'
import Trainers from '@/components/lib/Trainers'
import NewMember from '@/components/lib/NewMember'
import RegisterForm from '@/components/lib/RegisterForm'
import ClassesSlider from '@/pages/Home/ClassesSlider'
import Services from '@/pages/Home/Services'
import Testimonials from '@/pages/Home/Testimonials'
import MemberShip from '@/pages/Home/MemberShip'

import styles from './styles.module.scss'
import LatestBlog from '@/pages/Home/LatestBlog'

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <HomeHero/>
      <AboutUs>
        <div className={styles.aboutText}>
        <p >Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean pretium
          sollicitudin, nascetur auci elit consequat ipsutissem niuis sed odio sit amet nibh vulputate
          cursus a amet.</p>
        <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida
          quam semper libero sit amet. Etiam rhoncus. Maecenas tempus, tellus eget condimentum
          rhoncus, gravida quam semper libero sit amet.</p>
        </div>
        <Link to={'about'}>
          <Button>Read More</Button>
        </Link>
      </AboutUs>
      <Services/>
      <ClassesSlider/>
      <Trainers/>
      <Testimonials/>
      <GetTraining/>
      <MemberShip/>
      <section className={styles.register}>
        <RegisterForm bgColor={'#f5f4f4'}/>
      </section>
      <LatestBlog/>
      <NewMember/>
    </div>
  )
}

export default Home
