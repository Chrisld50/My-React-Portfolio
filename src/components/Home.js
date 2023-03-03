import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Project from './Project';
import '../styling/Home.css';


export default function Home () {

    return (
        <div>
            <div>
            <Header />
            </div>
            <div>
            <Project />
            </div>
            <div className='footer'>
            <Footer />
            </div>
        </div>
    )

}