import React from 'react'

import styles from "./LandingPage.module.css"
import workoutPic from '../../assets/images/karsten-winegeart-0Wra5YYVQJE-unsplash.jpg';

const LandingPage = () => {
    
    return (
        <div>
            <img className={styles.Workout} src={workoutPic} alt="workout pic" />
        </div>
    )
}

export default LandingPage;


