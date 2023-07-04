import React, { useState } from 'react'
import "./services.css"

const Services = () => {

    const[toggleState,setToggleState] = useState(0);


    const toggleTab = (index) => {
            setToggleState(index);

    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>
      <div className="services__container container grid">

<div className="services__content">
        <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Product <br /> Designer</h3>
        <div>
            <span className="services__button" onClick={() =>toggleTab(1)}>
                View More
                <i class='bx bx-right-arrow-alt' ></i>
                </span>

            <div className={toggleState === 1 ? " services__modal  active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">Product Designer</h3>
                    <p className="services__modal-description">I am a computer science engineer focused in Providing quality work to clients and companies.</p>
                <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                    <i class='bx bx-badge-check'></i>

                        <p className="services__model-info">I help in User interface.
                        </p>
                    </li>

                    <li className="services__modal-service">
                    <i class='bx bx-badge-check'></i>

                        <p className="services__model-info">Web page developemnt.
                        </p>
                    </li>

                    <li className="services__modal-service">
                    <i class='bx bx-badge-check'></i>

                        <p className="services__model-info">I create UX element interactions.
                        </p>
                    </li>

                    <li className="services__modal-service">
                    <i class='bx bx-badge-check'></i>

                        <p className="services__model-info">I help in Problem solving.
                        </p>
                    </li>
                </ul>
                
                </div>
            </div>
        </div>
        </div>
    </div>

    <div className="services__content">
        <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">Ui/Ux  <br /></h3>
        <div>
            <span onClick={() =>toggleTab(2)} className="services__button">
                View More
                <i class='bx bx-right-arrow-alt' ></i>
                </span>

            <div className={toggleState === 2 ? " services__modal  active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() =>toggleTab(0)}className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">Ui/Ux Designer</h3>
                    <p className="services__modal-description">I am a computer science engineer focused in Providing quality work to clients and companies.</p>
                <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                    <i class='bx bx-badge-check'></i>

                        <p className="services__model-info">I help in User interface.
                        </p>
                    </li>

                    <li className="services__modal-service">
                    <i class='bx bx-badge-check'></i>

                        <p className="services__model-info">Web page developemnt.
                        </p>
                    </li>

                    <li className="services__modal-service">
                    <i class='bx bx-badge-check'></i>

                        <p className="services__model-info">I create UX element interactions.
                        </p>
                    </li>

                    <li className="services__modal-service">
                    <i class='bx bx-badge-check'></i>

                        <p className="services__model-info">I help in Problem solving.
                        </p>
                    </li>
                </ul>
                
                </div>
            </div>
        </div>
        </div>
    </div>

    <div className="services__content">
        <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">Visual <br/> Designer</h3>
        <div>
            <span onClick={() =>toggleTab(3)}className="services__button">View More
            <i class='bx bx-right-arrow-alt' ></i>
            </span>

            <div className={toggleState === 3 ? " services__modal  active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() =>toggleTab(0)}className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">Visual Designer</h3>
                    <p className="services__modal-description">I am a computer science engineer focused in Providing quality work to clients and companies.</p>
                <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                    <i class='bx bx-badge-check'></i>

                        <p className="services__model-info">I help in User interface.
                        </p>
                    </li>

                    <li className="services__modal-service">
                    <i class='bx bx-badge-check'></i>

                        <p className="services__model-info">Web page developemnt.
                        </p>
                    </li>

                    <li className="services__modal-service">
                    <i class='bx bx-badge-check'></i>

                        <p className="services__model-info">I create UX element interactions.
                        </p>
                    </li>

                    <li className="services__modal-service">
                    <i class='bx bx-badge-check'></i>

                        <p className="services__model-info">I help in Problem solving.
                        </p>
                    </li>
                </ul>
                
                </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    </section>
  )
}

export default Services