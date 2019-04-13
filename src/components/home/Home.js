import React from 'react';
import styles from './Home.module.css';

export default function Home() {
    return(
        <div className={styles.all}>
            <div className={styles.compost}>
                <span class='fas fa-apple-alt'/>
            </div>
            <div className={styles.recycle}>
                <span class='fas fa-recycle'/>
            </div>
            <div className={styles.trash}>
                <span class='fas fa-trash'/>
            </div>
        </div>
    )
}