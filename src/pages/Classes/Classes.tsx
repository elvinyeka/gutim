import React from 'react'

import Hero from '@/components/lib/Hero/Hero'
import BreadCrumbs from '@/components/lib/Breadcrumbs'
import NewMember from '@/components/lib/NewMember'
import RegisterForm from '@/components/lib/RegisterForm'
import ClassesCard from '@/components/lib/ClassesCard'
import TimeTable from './TimeTable'
import { classesData } from '@/utils/data'

import styles from './styles.module.scss'

const Classes: React.FC = () => {
  return (
    <div className={styles.container}>
      <Hero title={'Classes'}>
        <BreadCrumbs label={'Classes'} />
      </Hero>
      <section className={styles.register}>
        <RegisterForm shadow={'0px 12px 21px rgba(0, 0, 0, 0.15)'} />
      </section>
      <section className={`${styles.classesWrapper} container`}>
        <div className={styles.classesTitle}>
          <h2>UNLIMITED CLASSES</h2>
        </div>
        <div className={styles.classes}>
          {classesData.map(item => (
            <ClassesCard
              key={item.id}
              bg={item.src}
              name={item.name}
              trainer={item.trainer}
              sx={{
                margin: 0,
              }}
            />
          ))}
        </div>
      </section>
      <TimeTable />
      <NewMember />
    </div>
  )
}

export default Classes
