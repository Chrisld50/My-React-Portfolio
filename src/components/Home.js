import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Project from './Project';


export default function Home () {

    return (
        <div>
            <div>
            <Header />
            </div>
            <div>
            <Navbar />
            </div>
            <div>
            <Project />
            </div>
            <div>
            <Footer />
            </div>
        </div>
    )

}