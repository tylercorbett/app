import React from 'react';
import styles from './Form.module.css';

export default function Form() {
    return(
       <div className={styles.all}>
       <h2 className={styles.title}>Form</h2>
       <input type='range'>
       </input>
       </div>
    )
}