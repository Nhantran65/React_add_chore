import clsx from 'clsx'
import styles from './Button.module.css';


function Button({primary, secondary,success, danger, warning, info, light, dark,link}){
    const classes= clsx (styles.btn, 
    {
        [styles.primary]: primary,
        [styles.secondary]: secondary,
        [styles.success]: success,
        [styles.danger]: danger,
        [styles.warning]: warning,
        [styles.info]: info,
        [styles.light]: light,
        [styles.dark]: dark,
        [styles.link]: link
    })

    return (
        <button className={classes}>
            click me!
        </button>
    )
}
export default Button