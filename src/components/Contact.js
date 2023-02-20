import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar'

export default function Contact () { 
    return (
        <div className="contact_me">
            <div>
                <Header />
            </div>
            <div>
                <Navbar />
            </div>

<h3> Below is my contact information and links to both my Github and my Linkedin. I am currently looking for a front-end jr. developer position and I am hungry to get into the field!</h3>

        <ul class='unstyled'>
            <li>Email: <a href="{mailto}"> christld50@yahoo.com </a></li>

            <li>Cell Phone: <a href="{tel}"> 734-709-4162 </a></li>

            <li><a href="https://github.com/Chrisld50"> Github </a></li>

            <li><a href="https://www.linkedin.com/in/christian-quarles-71436a226/"> Linkedin </a> </li>
        </ul>

            <div>
            <Footer />
            </div>
        </div>
    )
}




