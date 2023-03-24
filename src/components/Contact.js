import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styling/Contact.css';
import '../font-awesome-4.7.0/css/font-awesome.min.css';



export default function Contact () { 
    return (
        <div>
            <div>
                <Header />
            </div>

            <div className={'w-50 mx-auto'}>

                <h3 className={'p-3 m-3 card-title text-center text-light'}>Contact</h3>
                    <div className={'text-center text-light'}>
                        <p> Below is my contact information and links to both my Github and my Linkedin. < br/> I am currently looking for a front-end jr. developer position and I am hungry to get into the field!</p>

                            <ul className={'list-unstyled m-3 p-3'}>

                            <i className={["fa fa-regular fa-envelope fa-3x"]}></i>
                            <li><a className={'contact text-light'} href="mailto:chrisld50@yahoo.com" target="_blank" rel="noreferrer"> christld50@yahoo.com </a></li>

                            <i className={["fa fa-regular fa-phone fa-3x"]}></i>
                            <li><a className={'contact text-light'} href="tel:+7347094162"target="_blank" rel="noreferrer" > 734-709-4162 </a></li>

                            <i className={["fa fa-regular fa-github fa-3x"]}></i>
                            <li><a className={'contact text-light'} href="https://github.com/Chrisld50" target="_blank" rel="noreferrer"> Github </a></li>

                            <i className={["fa fa-regular fa-linkedin fa-3x"]}></i>
                            <li><a className={'contact text-light'} href="https://www.linkedin.com/in/christian-quarles-71436a226/"target="_blank" rel="noreferrer" > Linkedin </a> </li>

                            </ul>

                    </div>
            </div>

            <div className='footer'>
            <Footer />
            </div>

        </div>
    )
}




