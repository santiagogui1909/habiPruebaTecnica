import { useDispatch } from 'react-redux';
import { useState } from 'react';

// reducers
import { insertAdress } from '../Reducer/FormReducer';
import { activeBtn } from '../Reducer/EstateReducer';

import './style.css';

const FormAdress = () => {

    const dispatch = useDispatch();

    const [adress, setAdress] = useState("");

    const setInformation = () => {
        dispatch(insertAdress(adress));
        dispatch(activeBtn(false));
    }

    return (
        <>  
            <div>
                <input className='inputsForms' type="text" onKeyUp={(e)=> setAdress(e.target.value)} onChange={() => setInformation()}/>
                <label className="label">Direccion del inmueble</label>
            </div>
        </>
    );
};

export default FormAdress;