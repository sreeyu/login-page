import styles from './Button.module.css'

function Button(props){
    return(
        <button className={styles.btn} type={props.type} disabled={props.disabled}>{props.children}</button>
    )
};

export default Button;