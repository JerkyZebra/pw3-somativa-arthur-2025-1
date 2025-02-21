import style from './Button.module.css'

const Button = ({label})=>{
    return(
        
    <div className = {buttonContainer}>
        <button>{label}</button>
    </div>
    )
}

export default Button