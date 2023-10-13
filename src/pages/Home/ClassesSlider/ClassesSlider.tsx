import React from 'react'
import Slider from 'react-slick'
import { classesData } from '@/utils/data'
import styles from './ClassesSlider.module.scss'

const ClassesSlider: React.FC = () => {
  const sliderItems = classesData.slice(0, -1)

  const settings = {
    className: 'center',
    infinite: true,
    autoplay:true,
    arrows: false,
    dots: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    dotsClass: `slick-dots dots`,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
        }
      },
    ]
  }

  return (
    <section className={`${styles.slider} container`}>
      <div className={styles.sliderTitle}>
        <h2>UNLIMITED CLASSES</h2>
      </div>
      <div>
        <Slider {...settings}>
          {sliderItems.map(item=>{
            return(
              <div key={item.id}>
                <div style={{background:`url(${item.src})`}} className={styles.card}>
                  <div className={styles.text}>
                    <h4>{item.name}</h4>
                    <span>
                <i className="fa fa-user"></i>
                      {item.trainer}
              </span>
                  </div>
                </div>

              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}

export default ClassesSlider
