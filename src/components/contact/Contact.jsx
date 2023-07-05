import React from 'react'

const Contact = () => {
  return (
    <section className="Contact section" id ="contact">

<h2 className="section__title">Get in touch</h2>
    <span className="section__subtitle">Contact Me</span>

    <div className="contact__container container grid">
        <div className="contact__content">
            <h3 className="contact__title">Talk to </h3>

            <div className="contact__info">
                <div className="contact__card">
                    <i className="bx bx-mail-send contact__card-icon"></i>

                    <h3 className="contact__card-title">Email</h3>
                    <span className="contact__card-data">rohitpgundeti@gmail.com</span>

                    <a href="mailto:examplemail@gmail.com.com" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                </div>

                <div className="contact__card">
                    <i className="bx bxl-whatsaap contact__card-icon"></i>

                    <h3 className="contact__card-title">Whatsaap</h3>
                    <span className="contact__card-data">80104-10993</span>

                    <a href="https://api.whatsapp.com/send?phone=62214408789&text=Hello, more information" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                </div>

                <div className="contact__card">
                    <i className="bx bx-messenger contact__card-icon"></i>

                    <h3 className="contact__card-title">Messenger</h3>
                    <span className="contact__card-data">user.fb123</span>

                    <a href="https://m.me/crypticalcoder" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                </div>

                
            </div>
        </div>


        <div className="contact__content">
            <h3 className="contact__title">Write me your project</h3>
        </div>
    </div>
    </section>
  )
}

export default Contact