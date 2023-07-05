import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);


    const toggleTab = (index) => {
        setToggleState(index);

    }
    return (
        <section className="qualification__sections">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container">

                <div className="qualification__tabs">
                    <div onClick={() => toggleTab(1)} className={toggleState === 1
                        ? "qualification_button qualification_active button-flex"
                        : "qualification__button button-flex"
                    }>
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div>

                    <div onClick={() => toggleTab(2)} className={toggleState === 2
                        ? "qualification_button qualification_active button-flex"
                        : "qualification__button button-flex"
                    }>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>


                <div className="qualification__sections">
                    <div className={toggleState === 1
                        ? "qualification_content qualification_content-active "
                        : "qualification__content "
                    }>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web designer</h3>
                                <span className="qualification__subtitle">Spain - Institute </span>
                                <div className="qualification__calendar">
                                    <i className="ui uil-calendar-alt"></i>
                                    &nbsp;2023 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Art Director</h3>
                                <span className="qualification__subtitle">Spain - Institute </span>
                                <div className="qualification__calendar">
                                    <i className="ui uil-calendar-alt"></i>
                                    &nbsp;2020 - 21
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web developer</h3>
                                <span className="qualification__subtitle">Spain - Institute </span>
                                <div className="qualification__calendar">
                                    <i className="ui uil-calendar-alt"></i>
                                    &nbsp;2005 - 2017
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">UX Expert</h3>
                                <span className="qualification__subtitle">Spain - Institute </span>
                                <div className="qualification__calendar">
                                    <i className="ui uil-calendar-alt"></i>
                                    2021-2018
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2
                        ? "qualification_content qualification_content-active "
                        : "qualification__content "
                    }>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Product Designer</h3>
                                <span className="qualification__subtitle">Microsoft- spain </span>
                                <div className="qualification__calendar">
                                    <i className="ui uil-calendar-alt"></i>
                                    2023 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">UX Designer</h3>
                                <span className="qualification__subtitle">apple INC - Institute </span>
                                <div className="qualification__calendar">
                                    <i className="ui uil-calendar-alt"></i>
                                    2020 - 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Designer</h3>
                                <span className="qualification__subtitle">Figma -spain </span>
                                <div className="qualification__calendar">
                                    <i className="ui uil-calendar-alt"></i>
                                    2005 - 2017
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Qualification