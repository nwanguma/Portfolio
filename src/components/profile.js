import React from "react"
import styles from "./profile.module.scss"

export default props => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        I am a 26 year old Frontend Web Developer based in Lagos, Nigeria. I
        have a background in the sciences having earned a bachelors degree in
        Microbiology in 2015. I joined a mid-tier FMCG firm a month after
        mandatory youth service and spent two years from Jan 2017 to Jan 2019
        as the principal logistics officer essentially coordinating all
        transfers of inventory nationwide.
        I left my position at
        the firm to pursue a career in tech which is something I have always wanted to do.<br></br>
        <br></br> My quest to learn web development the right way has exposed me to
        some of the best resources and tutors available on the web. I talk in
        detail about my motivations and journey{" "}
        <a
          href="blog"
          onClick={e => {
            e.preventDefault()
            window.scrollTo(0, 4550)
          }}
        >
          <em>here.</em>
        </a>
      </p>
    </div>
  )
}
