import { useDispatch } from 'react-redux';

// reducers
import { insertSpaces } from '../Reducer/FormReducer';
import { activeBtn } from '../Reducer/EstateReducer';

import './style.css';
const FormCheks = () => {

    const dispatch = useDispatch();
    let array = [];

    const getSpaces = () => {
        let checksElements = document.querySelectorAll('.checks');

        checksElements.forEach((value) => {
            if (value.checked === true) {
                if (!array.includes(value.value)){ array.push(value.value); }

            } else {
                if (array.includes(value.value)){
                    let index = array.indexOf(value.value);
                    array.splice(index, 1);
                }
            }
        })

        dispatch(insertSpaces(array));
        dispatch(activeBtn(false));
    }

    return (
        <>
            <section>
                <label>
                    <input className='checks' type="checkbox" value="zona BBQ"></input>
                zona BBQ</label>
                <label>
                    <input className='checks' type="checkbox" value="zona de juegos"></input>
                zona de juegos</label>
                <label>
                    <input className='checks' type="checkbox" value="parque para perros"></input>
                parque para perros</label>
                <label>
                    <input className='checks' type="checkbox" value="gym"></input>
                gym</label>
                <label>
                    <input className='checks' type="checkbox" value="parque para niños"></input>
                parque para niños</label>
                <label>
                    <input className='checks' type="checkbox" value="salon comunal"></input>
                salon comunal</label>
                <label>
                    <input className='checks' type="checkbox" value="parqueadero"></input>
                parqueadero</label>
            </section>
            
            <button onClick={() => getSpaces()}>guardar seleccion</button>
        </>
    );
};

export default FormCheks;