import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { easeQuadInOut } from "d3-ease";

var htmlSkills = {
    // Customize the root svg element
    root: {},
    // Customize the path, i.e. the "completed progress"
    path: {
        // Path color
        stroke: `#f00`,
        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        strokeLinecap: 'round',
        // Customize transition animation
        transition: 'stroke-dashoffset 0.5s ease 0s',
        // Rotate the path
        transform: 'rotate(0.0turn)',
        transformOrigin: 'center center',
    },
    // Customize the circle behind the path, i.e. the "total progress"
    trail: {
        // Trail color
        stroke: '#fff',
        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        strokeLinecap: 'butt',
        // Rotate the trail
        transform: 'rotate(0.25turn)',
        transformOrigin: 'center center',
    },
    // Customize the text
    text: {
        // Text color
        fill: '#fff',
        // Text size
        fontSize: '16px',
    },
    // Customize background - only used when the `background` prop is true
    background: {
        fill: '#3e98c7',
    },
}


function Skills() {
    return (
        <div className='row' style={{ padding: '150px' }}>
            <div className='col' style={{ width: 200, height: 200, padding: '25px' }}>
                <CircularProgressbarWithChildren value={90} styles={buildStyles({
                    pathTransition:
                        90 === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s",
                    pathColor: '#f00',
                    textColor: '#fff'
                })} >
                    <h1>HTML</h1>
                    <div style={{ fontSize: 12, marginTop: -5 }}>
                        <strong>90%</strong> </div>
                </CircularProgressbarWithChildren>
            </div>

            <div className='col' style={{ width: 200, height: 200, padding: '25px' }}>
                <CircularProgressbarWithChildren value={85} styles={buildStyles({
                    pathTransition:
                        90 === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s",
                    pathColor: '#f00',
                    textColor: '#fff'
                })} >
                    <h1>CSS</h1>
                    <div style={{ fontSize: 12, marginTop: -5 }}>
                        <strong>85%</strong> </div>
                </CircularProgressbarWithChildren>
            </div>

            <div className='col' style={{ width: 200, height: 200, padding: '25px' }}>
                <CircularProgressbarWithChildren value={75} styles={buildStyles({
                    pathTransition:
                        90 === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s",
                    pathColor: '#f00',
                    textColor: '#fff'
                })} >
                    <h1>JS</h1>
                    <div style={{ fontSize: 12, marginTop: -5 }}>
                        <strong>75%</strong> </div>
                </CircularProgressbarWithChildren>
            </div>
            <div className='col' style={{ width: 200, height: 200, padding: '25px' }}>
                <CircularProgressbarWithChildren value={75} styles={buildStyles({
                    pathTransition:
                        90 === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s",
                    pathColor: '#f00',
                    textColor: '#fff'
                })} >
                    <h1>React</h1>
                    <div style={{ fontSize: 12, marginTop: -5 }}>
                        <strong>75%</strong> </div>
                </CircularProgressbarWithChildren>
            </div>
            {/* <div className='col' style={{ width: 200, height: 200, padding: '25px' }}>
                <CircularProgressbar value={75} text='Node' styles={buildStyles({
                    pathTransition:
                        90 === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s",
                    pathColor: '#f00',
                    textColor: '#fff'
                })} />
            </div> */}
        </div>
    );
}

export default Skills;