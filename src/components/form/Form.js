import React from 'react';
import styles from './Form.module.css';

export default function Form() {
    return(
       <div className={styles.all}>
        <h2 className={styles.title}>Form</h2>
        <div>
            <h3>Garbage</h3>
            <input type='range' defaultValue='0' className={styles.input} min='0' max='100'/>
        </div>
        <div>
            <h3>Recycling</h3>
            <input type='range' defaultValue='0' className={styles.input} min='0' max='100'/>
        </div>
        <div>
            <h3>Glass Recycling</h3>
            <input type='range' defaultValue='0' className={styles.input} min='0' max='100'/>
        </div>
        <div>
            <h3>Yard Waste/Compost</h3>
            <input type='range' defaultValue='0' className={styles.input} min='0' max='100'/>
        </div>
       </div>
    )
}