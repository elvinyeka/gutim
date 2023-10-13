import React from 'react'
import styles from './TimeTable.module.scss'
import { TabType } from '@/store/types.ts'
import { getClasses } from '@/utils/helperFunctions.ts'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'
import { appState, setActiveTab } from '@/store/appReducer.ts'

const TimeTable: React.FC = () => {
  const {activeTab} = useAppSelector(appState)
  const dispatch = useAppDispatch()

  const handleActiveTab = (tabName: TabType) =>{
    dispatch(setActiveTab(tabName))
  }
  return (
    <section className={styles.tTable}>
      <div className='container'>
        <div className={styles.title}>
          <h2>CLASS TIMETABLE</h2>
        </div>
        <div className={styles.navControls}>
          <ul>
            <li
              className={activeTab === 'all' ? styles.active : ''}
              onClick={() =>handleActiveTab('all')}
            >
              All Class
            </li>
            <li
              className={activeTab === 'gym' ? styles.active : ''}
              onClick={() =>handleActiveTab('gym')}
            >
              Gym
            </li>
            <li
              className={activeTab === 'crossfit' ? styles.active : ''}
              onClick={() =>handleActiveTab('crossfit')}
            >
              Crossfit
            </li>
            <li
              className={activeTab === 'cardio' ? styles.active : ''}
              onClick={() =>handleActiveTab('cardio')}
            >
              Cardio
            </li>
            <li
              className={activeTab === 'body' ? styles.active : ''}
              onClick={() =>handleActiveTab('body')}
            >
              Body
            </li>
            <li
              className={activeTab === 'yoga' ? styles.active : ''}
              onClick={() =>handleActiveTab('yoga')}
            >
              Yoga
            </li>
          </ul>
        </div>
        <div className={styles.table}>
          <table>
            <thead>
            <tr>
              <th></th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td className={styles.workoutTime}>10.00</td>
              <td
                className={getClasses([styles.hoverBg, styles.tableItem], [styles.show], 'gym', activeTab)}
              >
                <h6>Gym</h6>
                <span>10.00 - 11.00</span>
                <div className={styles.trainerName}>
                  John Smith
                </div>
              </td>
              <td></td>
              <td
                className={getClasses([styles.hoverBg, styles.tableItem], [styles.show], 'yoga', activeTab)}
              >
                <h6>Yoga</h6>
                <span>10.00 - 12.00</span>
                <div className={styles.trainerName}>
                  John Smith
                </div>
              </td>
              <td></td>
              <td
                className={getClasses([styles.hoverBg, styles.tableItem], [styles.show], 'body', activeTab)}
              >
                <h6>Body</h6>
                <span>10.00 - 12.00</span>
                <div className={styles.trainerName}>
                  John Smith
                </div>
              </td>
              <td></td>
              <td
                className={getClasses([styles.hoverBg, styles.tableItem], [styles.show], 'cardio', activeTab)}
              >
                <h6>Cardio</h6>
                <span>10.00 - 11.00</span>
                <div className={styles.trainerName}>
                  John Smith
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.workoutTime}>14.00</td>
              <td></td>
              <td
                className={getClasses([styles.hoverBg, styles.tableItem], [styles.show], 'all', activeTab)}
              >
                <h6>Running</h6>
                <span>14.00 - 16.00</span>
                <div className={styles.trainerName}>
                  John Smith
                </div>
              </td>
              <td></td>
              <td
                className={getClasses([styles.hoverBg, styles.tableItem], [styles.show], 'all', activeTab)}
              >
                <h6>Box</h6>
                <span>14.00 - 15.00</span>
                <div className={styles.trainerName}>
                  John Smith
                </div>
              </td>
              <td></td>
              <td
                className={getClasses([styles.hoverBg, styles.tableItem], [styles.show], 'gym', activeTab)}
              >
                <h6>Gym</h6>
                <span>14.00 - 16.00</span>
                <div className={styles.trainerName}>
                  John Smith
                </div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td className={styles.workoutTime}>16.00</td>
              <td
                className={getClasses([styles.hoverBg, styles.tableItem], [styles.show], 'cardio', activeTab)}
              >
                <h6>Cardio</h6>
                <span>16.00 - 18.00</span>
                <div className={styles.trainerName}>
                  John Smith
                </div>
              </td>
              <td></td>
              <td
                className={getClasses([styles.hoverBg, styles.tableItem], [styles.show], 'gym', activeTab)}
              >
                <h6>Gym</h6>
                <span>16.00 - 19.00</span>
                <div className={styles.trainerName}>
                  John Smith
                </div>
              </td>
              <td></td>
              <td
                className={getClasses([styles.hoverBg, styles.tableItem], [styles.show], 'yoga', activeTab)}
              >
                <h6>Yoga</h6>
                <span>16.00 - 18.00</span>
                <div className={styles.trainerName}>
                  John Smith
                </div>
              </td>
              <td></td>
              <td
                className={getClasses([styles.hoverBg, styles.tableItem], [styles.show], 'gym', activeTab)}
              >
                <h6>Gym</h6>
                <span>16.00 - 20.00</span>
                <div className={styles.trainerName}>
                  John Smith
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.workoutTime}>18.00</td>
              <td
                className={getClasses([styles.hoverBg, styles.tableItem], [styles.show], 'all', activeTab)}
              >
                <h6>Box</h6>
                <span>18.00 - 22.00</span>
                <div className={styles.trainerName}>
                  John Smith
                </div>
              </td>
              <td
                className={getClasses([styles.hoverBg, styles.tableItem], [styles.show], 'body', activeTab)}
              >
                <h6>Body</h6>
                <span>18.00 - 20.00</span>
                <div className={styles.trainerName}>
                  John Smith
                </div>
              </td>
              <td></td>
              <td
                className={getClasses([styles.hoverBg, styles.tableItem], [styles.show], 'crossfit', activeTab)}
              >
                <h6>Crossfit</h6>
                <span>18.00 - 21.00</span>
                <div className={styles.trainerName}>
                  John Smith
                </div>
              </td>
              <td></td>
              <td
                className={getClasses([styles.hoverBg, styles.tableItem], [styles.show], 'cardio', activeTab)}
              >
                <h6>Cardio</h6>
                <span>18.00 - 22.00</span>
                <div className={styles.trainerName}>
                  John Smith
                </div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td className={styles.workoutTime}>20.00</td>
              <td></td>
              <td
                className={getClasses([styles.hoverBg, styles.tableItem], [styles.show], 'gym', activeTab)}
              >
                <h6>Gym</h6>
                <span>20.00 - 12.00</span>
                <div className={styles.trainerName}>
                  John Smith
                </div>
              </td>
              <td
                className={getClasses([styles.hoverBg, styles.tableItem], [styles.show], 'body', activeTab)}
              >
                <h6>Body</h6>
                <span>20.00 - 21.00</span>
                <div className={styles.trainerName}>
                  John Smith
                </div>
              </td>
              <td></td>
              <td
                className={getClasses([styles.hoverBg, styles.tableItem], [styles.show], 'cardio', activeTab)}
              >
                <h6>Cardio</h6>
                <span>20.00 - 22.00</span>
                <div className={styles.trainerName}>
                  John Smith
                </div>
              </td>
              <td></td>
              <td
                className={getClasses([styles.hoverBg, styles.tableItem], [styles.show], 'crossfit', activeTab)}
              >
                <h6>Crossfit</h6>
                <span>20.00 - 21.00</span>
                <div className={styles.trainerName}>
                  John Smith
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default TimeTable
