import React from 'react'

import styles from "./LandingPage.module.css"

const LandingPage = () => {
    
    return (
        <div className={styles.Container}>
            <div className={styles.Modal}>
                <input style={styles.Input} placeholder="First Name..." className={styles.FirstName} type="string" />
                <input style={styles.Input} placeholder="Last Name..." className={styles.LastName} type="string" />
                <input style={styles.Input} placeholder="Email" className={styles.Email} type="string" />
            </div>
        </div>
    )
}

export default LandingPage;


