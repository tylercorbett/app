import React from 'react';
import styles from './FootPrint.module.css';
import tylerUrl from './tylerGraduationHeadshot-min.png';

export default function Footprint() {
    return(
      <div className={styles.all}>
        <div className={styles.profile}>
            <div>
                <div className={styles.imgContainer}>
                    <img className={styles.img} src={tylerUrl} alt='tyler'/>
                </div>
                <h4 className={styles.h4}>Tyler Corbett</h4>
            </div>
            <div className={styles.footprint}>
                <i class="fas fa-shoe-prints"></i>
            </div>
        </div>
        <div className={styles.city}>
            <div className={styles.figure}>
                <div className={styles.imgContainerPortland}>
                    <img className={styles.imgPortland} alt='portland' src='https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.travelportland.com%2Fwp-content%2Fuploads%2F2014%2F09%2FDavid-Grant-Downtown.jpg&f=1'/>
                </div>
                <h4 className={styles.h4}>Portland</h4>
            </div>
            <div className={styles.footprintPortland}>
                <i class="fas fa-shoe-prints"></i>
            </div>
        </div>
        <div className={styles.neighborhood}>
            <div className={styles.figure}>
                <div className={styles.imgContainerNeighborhood}>
                    <img className={styles.imgNeighborhood} alt='houses' src='https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.iconfinder.com%2Fdata%2Ficons%2Freal-estate-set-5%2F512%2F41-512.png&f=1'/>
                </div>
                <h4 className={styles.h4}>Neighborhood</h4>
            </div>
            <div className={styles.footprintNeighborhood}>
                <i class="fas fa-shoe-prints"></i>
            </div>
        </div>
      </div>
    )
}