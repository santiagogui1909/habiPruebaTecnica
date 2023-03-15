import { Link } from 'react-router-dom';
import '../../App.css';

import imageHome from '../../images/insurance.png';

const Home = () => {
    return (
        <div className="containerHome">
            <section className="columnOption">
                <p className="slogan">Si necesitas vender tu vivienda en 10 días habi te lo compra</p>
                <span>Llena el formulario y cuéntanos de tu inmueble </span> 
                <article className='boxBtns'>
                    <Link to='/forms'><button>Llenar formulario</button></Link>
                    <a href='https://habi.co/' target='_blank'><button>Conocer mas de habi</button></a>
                </article>
            </section>
            <figure>
                <img className='imageHome' src={imageHome} alt="imageHome"></img>
            </figure>
        </div>
    );
};

export default Home;