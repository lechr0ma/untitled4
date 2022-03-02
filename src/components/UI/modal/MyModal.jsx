import React from 'react';
import classes from './MyModal.module.css'


const MyModal = (props) => {
    let modalClasses = [classes.myModal];
    if(props.visible){
        modalClasses.push(classes.active)
    }
    return (
        <div className={modalClasses.join(' ')} onClick={() => props.set(false)}>
            <div className={classes.myModal__content}
                 onClick={(event => event.stopPropagation())}
            >
                {props.children}
            </div>
        </div>
    );
};

export default MyModal;