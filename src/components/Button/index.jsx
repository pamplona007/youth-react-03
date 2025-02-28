import './styles.css'

const Button = (props) => {
    const {
        variant
    } = props;

    const classNames = 'default-button ' + variant

    return (
        <button className={classNames}>
            {props.children}
        </button>
    )
}

export default Button;