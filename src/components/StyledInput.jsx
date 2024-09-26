const StyledInput = ({ type, placeholder, value, onChangeHandler }) => {

    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChangeHandler}
            className='poppins-regular border border-gray-300 p-2 rounded-md'
            required
        />
    )
}

export default StyledInput;
