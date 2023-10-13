import React from 'react'
import styles from './ClassesCard.module.scss'

interface IProps{
  bg:string
  name: string
  trainer: string
  sx?: React.CSSProperties
}
const ClassesCard: React.FC<IProps> = ({bg,trainer,name, sx}) => {
    return (
        <div style={{backgroundImage:`url("public/${bg}")`, ...sx}} className={styles.card}>
            <div className={styles.text}>
              <h4>{name}</h4>
              <span>
                <i className="fa fa-user"></i>
                {trainer}
              </span>
            </div>
        </div>
    );
};

export default ClassesCard;
