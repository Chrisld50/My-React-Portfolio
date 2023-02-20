import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Profilepic from '../images/Portfolio_image.png';




export default function AboutMe () {
    return(
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Navbar />
            </div>
                        <div className={'card w-50 display-inline text-center mx-auto'}>
                            <div className={'profile text-center'}>
                                <img className={''} style= {{height: 400}} src={Profilepic}
                                    alt='profilePicture' />
                            </div>
                            <div className={'text-center card-body'}>
                                <h3 className={'p-3 card-title text-center'}> About Me </h3>
                            <div className={'card-text'}>
                                    <p>Hello! my name is Christian Quarles and I have recently graduated < br/> from the UT Austin Fullstack Web Development Bootcamp! <br /> Here are some facts about me:</p><br />
                                    <p>I have had a passion for computers since an early age < br/> and have spent most of my life working or playing on them.
                                    <br />My two favorite passions: Video games and Music (very unique I know)< br/>
                                    I am an avid metal head and go to many concers in the Austin area, < br/> My favorite bands at the moment: The Ghost Inside, Polaris and Malevolence.
                                    < br/>Some of my favorite games: World of Warcraft, Rust, Old School FPS and the Forest.
                                    < br/>I am in recovery, my sobriety date is April 4th of 2015 and I have spent <br /> the last 6 years in the field of Addiction Recovery.</p>
                                </div>
                            </div>
                        </div>               
            <div>
                <Footer />
            </div>
        </div>
    )
}