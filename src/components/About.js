import christmaslogo from '../assets/christmas.jpg'

import { Image } from 'react-bootstrap'

function About() {
    return (
        <div>
            <div className='row justify-content-center' style={{ padding: '20px 0px 20px 0px' }}>
                <div className="m-auto">
                    <h6 style={{textAlign:'center'}}>Get to Know me</h6>
                    <h1>About Me</h1>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-2'></div>
                <div className='col-3'>
                    <Image src={christmaslogo} width='250' height='280' roundedCircle />

                </div>
                <div className='col-5 margin-80'>
                    <h5>Who am i ?</h5>
                    <h3>I'm Lohitha Goddati</h3>
                    <p>I am a FrontEnd developer who is well versed with HTML,CSS,JavaScript and React.
                  Seeking for an opportunity to prove my skills and to explore new technologies as i am flexible to adatpt to any environment.</p>
                </div>

            </div>
        </div>
    )
}
export default About;