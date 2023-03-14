import { useDispatch } from 'react-redux';
import { useState } from 'react';

// reducers
import { insertEmailUser } from '../Reducer/FormReducer';
import { activeBtn } from '../Reducer/EstateReducer';

import './style.css';

const FormEmail = () => {

    const dispatch = useDispatch();
    const [alertEmail, setAlertEmail] = useState('');

    // Regex for emails
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // Gets email and tests whit regex to see if it is a correct email format
    const getEmail = (e) => {
        let email = e.target.value;
    
        if (regexEmail.test(email)) {
            dispatch(insertEmailUser(email));
            setAlertEmail('');
            dispatch(activeBtn(false));
        } else {
            setAlertEmail('Esto no es un formato de correo valido');
            dispatch(activeBtn(true));
        }
    }

    return (
        <>
            <input className='inputsForms' type="text" onKeyUp={(e) => getEmail(e)} />
            <label className="label">Correo Electronico</label>

            <p className='alertEmail'>{alertEmail}</p>
        </>
    );
};

export default FormEmail;