import React from 'react'
import styles from './LatestBlog.module.scss'
import { blogsData } from '@/utils/data.ts'

const LatestBlog: React.FC = () => {
    return (
        <section className={`${styles.blog} container`}>
          <div className={styles.blogTitle}>
            <h2>Latest Blog</h2>
          </div>
          <div className={styles.blogItems}>
            {blogsData.map(blog =>(
              <div key={blog.id} className={styles.blogItem}>
                <img src={blog.src} alt="blog img"/>
                  <div className={styles.blogWidget}>
                    <div className={styles.blogDate}>February 17, 2019</div>
                    <a href="#" className={styles.tag}>#Gym</a>
                  </div>
                  <h4><a href="#">10 States At Risk of Rural Hospital Closures</a></h4>
              </div>
            ))}
          </div>
        </section>
    );
};

export default LatestBlog;
