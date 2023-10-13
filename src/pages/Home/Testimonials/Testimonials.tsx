import React from 'react'
import Slider from "react-slick"
import styles from './Testimonials.module.scss'
import { testimonialsData } from '@/utils/data.ts'

const Testimonials: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    arrows: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    return (
        <section className={styles.testimonials}>
          <div className='container'>
            <div className={styles.title}>
              <h2>success stories</h2>
            </div>
            <div>
              <Slider {...settings}>
                {testimonialsData.map(item =>(
                  <div key={item.id} className={styles.tsItem}>
                    <p>{item.desc}</p>
                    <div className={styles.tsImg}>
                      <img src={item.src} alt={item.name}/>
                      <div className={styles.tsQuote}>
                        <img src="assets/testimonial/quote-left.png" alt="quote"/>
                      </div>
                    </div>
                    <div className={styles.tsAuthor}>
                      <h4>{item.name}</h4>
                      <span>{item.position}</span>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>
    );
};

export default Testimonials;
