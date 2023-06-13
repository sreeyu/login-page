import React from "react";
import styles from './Input.module.css'

function Input(props){

    return (
        <div className={styles["input-fields"]}>
            <label htmlFor={props.id}>{props.id}</label>
            <input value={props.value} className={`${props.isValid === false ? styles.invalid : ''}`} id={props.id} type={props.type} onChange={props.onChange} onBlur={props.onBlur} />
        </div>
    )
}

export default Input;