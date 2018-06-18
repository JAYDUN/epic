import React from 'react';
import s from './Container.css';
import AddItem from '../AddItemBox/AddItemBox';

const Container = () => {
    return(
        <div className={s.container}>
            <p className={s.title}>Marvelous!</p>
            <p className={s.intro}>Lorem lpsum is simply dummy text of the printing and typesetting industry. Lorem lpsum has been the
                industry standard dummy text ever since.
            </p>
            <AddItem/>
        </div>
    )
}

export default Container;