import React from 'react';
import styles from './Form.module.css';

export default function Form() {
    return(
       <div className={styles.all}>
        <h2 className={styles.title}>Form</h2>
        <input type='range' className={styles.input} min='1' max='100'/>
        <input type='range' className={styles.input} min='1' max='100'/>
        <input type='range' className={styles.input} min='1' max='100'/>
        <input type='range' className={styles.input} min='1' max='100'/>
       </div>
    )
}