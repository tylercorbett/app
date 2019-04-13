import React from 'react';
import styles from './Form.module.css';

export default function Form() {
    return(
       <div className={styles.all}>
        <div className={styles.inputOption}>
            <div className={styles.header}>
                <span className={styles.icon}>
                    <i class="fas fa-trash"></i>
                </span>
                <h3 className={styles.h3}>Garbage</h3>
                <button className={styles.upload}>Upload Photo</button>
            </div>
            <input type='range' step='25' defaultValue='0' className={styles.input} min='0' max='100'/>
            <div className={styles.label}>
                <span className={styles.percentage}>0%</span>
                <span className={styles.percentage}>25%</span>
                <span className={styles.percentage}>50%</span>
                <span className={styles.percentage}>75%</span>
                <span className={styles.percentage}>100%</span>
            </div>
        </div>
        <div className={styles.inputOption}>
            <div className={styles.header}>
                <span className={styles.icon}>
                    <i class="fas fa-recycle"></i>
                </span>
                <h3 className={styles.h3}>Recycling</h3>
                <button className={styles.upload}>Upload Photo</button>
            </div>
            <input type='range' step='25' defaultValue='0' className={styles.input} min='0' max='100'/>
            <div className={styles.label}>
                <span className={styles.percentage}>0%</span>
                <span className={styles.percentage}>25%</span>
                <span className={styles.percentage}>50%</span>
                <span className={styles.percentage}>75%</span>
                <span className={styles.percentage}>100%</span>
            </div>
        </div>
        <div className={styles.inputOption}>
            <div className={styles.header}>
                <span className={styles.icon}>
                    <i class="fas fa-wine-bottle"></i>
                </span>
                <h3 className={styles.h3}>Glass Recycling</h3>
                <button className={styles.upload}>Upload Photo</button>
            </div>
            <input type='range' step='25' defaultValue='0' className={styles.input} min='0' max='100'/>
            <div className={styles.label}>
                <span className={styles.percentage}>0%</span>
                <span className={styles.percentage}>25%</span>
                <span className={styles.percentage}>50%</span>
                <span className={styles.percentage}>75%</span>
                <span className={styles.percentage}>100%</span>
            </div>
        </div>
        <div className={styles.inputOption}>
            <div className={styles.header}>
                <span className={styles.icon}>
                    <i class="fas fa-apple-alt"></i>
                </span>
                <h3 className={styles.h3}>Yard Waste</h3>
                <button className={styles.upload}>Upload Photo</button>
            </div>
            <input type='range' step='25' defaultValue='0' className={styles.input} min='0' max='100'/>
            <div className={styles.label}>
                <span className={styles.percentage}>0%</span>
                <span className={styles.percentage}>25%</span>
                <span className={styles.percentage}>50%</span>
                <span className={styles.percentage}>75%</span>
                <span className={styles.percentage}>100%</span>
            </div>
        </div>
        <div className={styles.buttonContainer}>
            <a className={styles.link} href='https://github.com/tylercorbett'><button className={styles.submit}>Submit</button></a>
        </div>
       </div>
    )
}