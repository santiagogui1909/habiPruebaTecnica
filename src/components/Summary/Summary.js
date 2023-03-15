import { useSelector} from 'react-redux';

import '../style.css';

import userImage from '../../images/hombre.png';
import { Link } from 'react-router-dom';

const Summary = () => {

    // get of state global
    const dataUser = useSelector(state => state.formReducer);

    return (
        <>
            <h2 className='titleSumary'>Resumen de datos</h2>
            <hr className='hrLine' />

            <div className='containerSumary'>
                <section className='targetData user'>
                    <img src={userImage} alt='imageUser'></img>
                    <article className='infoUser'>
                        <span>nombre</span>
                        <p>{dataUser.name}</p>
                        <span>correo</span>
                        <p>{dataUser.email}</p>
                        <span>direccion</span>
                        <p>{dataUser.adress}</p>
                        <span>piso</span>
                        <p>{dataUser.numberFloor}</p>
                    </article>
                </section>

                <section className='targetData'>
                    <article className='infoUser'>
                    </article>

                    <h4 className='listElementTitle'>Lista de elemento</h4>

                    <ul className='listElementHome'>
                        {dataUser.arraySpace.map((value) => {
                           return <li><span className='icon-home'></span>{value}</li>
                        })}
                    </ul>

                    <Link to='/'><button className='btnFinish'>Finalizar</button></Link>
                </section>
            </div>
        </>
    );
};

export default Summary;