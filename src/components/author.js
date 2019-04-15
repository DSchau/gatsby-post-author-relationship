import React from 'react'

import styles from './author.module.css'

export default function Author({ name, bio, showBio = false }) {
  return (
    <React.Fragment>
      <h4 className={styles.name}>{name}</h4>
      {showBio && <h5 className={styles.bio}>{bio}</h5>}
    </React.Fragment>
  )
}
