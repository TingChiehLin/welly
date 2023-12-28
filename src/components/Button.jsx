const Button = ({...props}) => {
    // eslint-disable-next-line react/prop-types
    const {title} = props;
    return (
        <button {...props}>{title}</button>
    );
}

export default Button;