import Header from './Header';
import Footer from './Footer';
import Familypic from '../images/Family_Photo.jpg';




export default function AboutMe () {
    return(
        <div>
            <div>
                <Header />
            </div>
                        <div className={'w-50 display-inline text-center mx-auto'}>
                            <div className={'profile text-center'}>
                                <img className={''} style= {{height: 350}} src={Familypic}
                                    alt='profilePicture' />
                            </div>
                            <div className={'text-center'}>
                                <h3 className={'p-3 text-center text-light'}> About Me </h3>
                            <div className={'text-light'}>
                                    <p>Hello! my name is Christian Quarles and I have recently graduated from the UT Austin Fullstack Web Development Bootcamp!  
                                    I am currently looking for work as a front-end developer. Though my time in the bootcamp was difficult, 
                                    dedication and metal music pushed me through. My skills are both in front-end and back-end development,
                                    with understanding in HTML, CSS, Javascript, React and APIs on the front end and Node.js, REST, mySQL, Graphql and MongoDB on the back-end.
                                    I am very familiar with teamwork, as I have spent the last 6 years working in the field of drug and alcohol rehabilitation, where teamwork 
                                    is essential. For the past year, I have been the manager of the Recovery department at Nova Recovery Center.</p>
                                     Here are some fun facts about me:
                                    <p>I have had a passion for computers since an early age and have spent most of my life working or playing on them.
                                    My two favorite passions: Video games and Music (very unique I know)
                                    I am an avid metal head and go to many concerts in the Austin area, My favorite bands at the moment: The Ghost Inside, Polaris and Malevolence.
                                    Some of my favorite games: World of Warcraft, Rust, Old School FPS and the Forest.
                                    I am in recovery, my sobriety date is April 4th of 2015 and I spend a lot of my freetime helping other addicts and alcoholics.</p>
                                </div>
                            </div>
                        </div>               
            <div>
                <Footer />
            </div>
        </div>
    )
}