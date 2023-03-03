import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styling/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faPortrait } from '@fortawesome/free-solid-svg-icons';



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

                            <ul className={'list-unstyled'}>

                            <FontAwesomeIcon icon={faEnvelope} className={'fa-3x'}/>
                            <li><a className={'contact text-light'} href="{mailto}"> christld50@yahoo.com </a></li>

                            <FontAwesomeIcon icon={faPhone} className={'fa-3x'}/>
                            <li><a className={'contact text-light'} href="{tel}"> 734-709-4162 </a></li>

                            <FontAwesomeIcon icon={faPortrait} className={'fa-3x'}/>
                            <li><a className={'contact text-light'} href="https://github.com/Chrisld50"> Github </a></li>

                            <FontAwesomeIcon icon={faPortrait} className={'fa-3x'}/>
                            <li><a className={'contact text-light'} href="https://www.linkedin.com/in/christian-quarles-71436a226/"> Linkedin </a> </li>

                            </ul>

                    </div>
            </div>

            <div className='footer'>
            <Footer />
            </div>

        </div>
    )
}




