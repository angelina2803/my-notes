import React from 'react';
import classes from './MyInput.module.css'

const Myinput = (props) => {
    return (
       <input {...props} className={classes.myInput}>
    
       </input>
    );
};

export default Myinput;