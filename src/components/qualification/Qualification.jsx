import React from 'react'
import "./qualification.css"

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
    <span className="section__subtitle">My personal journey
    </span>

    <div className="qualification__container container">
      <div className="qualification__tabs">
        <div className="qualification_button qualification__active button-flex">
          <i className="uil uil-graduation-cap qualification__icon"></i>Education
        </div>

        <div className="qualification_button button-flex">
          <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
        </div>
      </div>


      <div className="qualification__sections">
      <div className="qualification__content qualification__content-active">
            <div className="qualification__data">
              <div>
                <h3 className="qualification title">Web designer</h3>
                <span 
                className="qualification__subtitle">Spain - Institute </span>
                <div className="qualification_calender">
                  <i className="ui uil-calender-alt"></i>
                  2023 - Present 
                </div>
              </div>
<div>
   <span className="qualification__rounder"></span>
   <div className="qualification_line"></div>
</div>

            </div>

            <div className="qualification__data">
              <div></div>

              <div>
   <span className="qualification__rounder"></span>
   <span className="qualification_line"></span>
</div>
              <div>
                <h3 className="qualification title">Art Director</h3>
                <span 
                className="qualification__subtitle">Spain - Institute </span>
                <div className="qualification_calender">
                  <i className="ui uil-calender-alt"></i>
                  2020 - 21
                </div>
              </div>

              <div>
   <span className="qualification__rounder"></span>
   <span className="qualification_line"></span>
</div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification title">Web developer</h3>
                <span 
                className="qualification__subtitle">Spain - Institute </span>
                <div className="qualification_calender">
                  <i className="ui uil-calender-alt"></i>
                  2005 - 2017
                </div>
              </div>
<div>
   <span className="qualification__rounder"></span>
   <div className="qualification_line"></div>
</div>

            </div>

            <div className="qualification__data">
              <div></div>

              <div>
   <span className="qualification__rounder"></span>
   <span className="qualification_line"></span>
</div>
              <div>
                <h3 className="qualification title">UX Expert</h3>
                <span 
                className="qualification__subtitle">Spain - Institute </span>
                <div className="qualification_calender">
                  <i className="ui uil-calender-alt"></i>
                  2021-2018
                </div>
              </div>

              <div>
   <span className="qualification__rounder"></span>
   <span className="qualification_line"></span>
</div>
            </div>
      </div>

      <div className="qualification__content">
            <div className="qualification__data">
              <div>
                <h3 className="qualification title">Product Designer</h3>
                <span 
                className="qualification__subtitle">Microsoft- spain </span>
                <div className="qualification_calender">
                  <i className="ui uil-calender-alt"></i>
                  2023 - Present 
                </div>
              </div>
<div>
   <span className="qualification__rounder"></span>
   <div className="qualification_line"></div>
</div>

            </div>

            <div className="qualification__data">
              <div></div>

              <div>
   <span className="qualification__rounder"></span>
   <span className="qualification_line"></span>
</div>
              <div>
                <h3 className="qualification title">UX Designer</h3>
                <span 
                className="qualification__subtitle">apple INC - Institute </span>
                <div className="qualification_calender">
                  <i className="ui uil-calender-alt"></i>
                  2020 - 2021
                </div>
              </div>

              <div>
   <span className="qualification__rounder"></span>
   <span className="qualification_line"></span>
</div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification title">Web Designer</h3>
                <span 
                className="qualification__subtitle">Figma -spain </span>
                <div className="qualification_calender">
                  <i className="ui uil-calender-alt"></i>
                  2005 - 2017
                </div>
              </div>
<div>
   <span className="qualification__rounder"></span>
   <div className="qualification_line"></div>
</div>

            </div>
      </div>
      </div>
    </div>
    </section>
    
  )
}

export default Qualification