import Services from '../../Pages/Services/Services'
import './Hone.css'
const Home = () => {

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center container bg_img">
                <h1 className='text-white'>Live Healthy</h1>
            </div>
            <div className="container">
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;