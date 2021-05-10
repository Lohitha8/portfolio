import TextLoop from "react-text-loop";

function Body() {
    return (
        <div className='row body-container'>
            {/* <img className='home-image' width='350' src={home} /> */}
            <div className='m-auto'>
                <h1>
                    <span className='iam'>I am </span>{' '}
                    <TextLoop
                        // springConfig={{ stiffness: 1, damping: 1 }} adjustingSpeed={10}
                    >
                        <span>Lohitha Goddati</span>
                        <span>Frontend Developer</span>
                    </TextLoop>
                </h1>
            </div>
        </div>

    )
}
export default Body;