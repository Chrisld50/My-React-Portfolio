import React from 'react';
import Header from './Header';
import Footer from './Footer';


export default function Contact () { 
    return (
        <div className="contact_me">
            <div>
                <Header />
            </div>

            <div className={'card w-50 mx-auto'}>

                <h3 className={'card-title text-center'}>Contact</h3>
        <div className={'text-center'}>
        <p> Below is my contact information and links to both my Github and my Linkedin. < br/> I am currently looking for a front-end jr. developer position and I am hungry to get into the field!</p>
        <div className={'container'}>
        <ul className={'list-unstyled'}>
            <li>Email: <a className={'text-dark'} href="{mailto}"> christld50@yahoo.com </a></li>

            <li>Cell Phone: <a className={'text-dark'} href="{tel}"> 734-709-4162 </a></li>

            <li><a className={'text-dark'} href="https://github.com/Chrisld50"> Github </a></li>

            <li><a className={'text-dark'} href="https://www.linkedin.com/in/christian-quarles-71436a226/"> Linkedin </a> </li>
        </ul>
        </div>
        </div>
    </div>
            <div>
            <Footer />
            </div>
        </div>
    )
}




