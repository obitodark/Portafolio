const BtnDeleteImage = ({ action }) => {
    return (
        <>
            <button onClick={() => action} style={{ ...btnStyled }}>
                X
            </button>
        </>
    );
};

export const btnStyled = {
    position: 'absolute',
    background: '#D6533F ',
    color: 'white',
    border: 'none',
    top: '0px',
    right: '0px',
    width: '20px',
    height: '20px',
    textAlign: 'center',
    borderRadius: '5px',
    cursor: 'pointer',
    '&:hover': {
        background: 'blue'
    }
};
export default BtnDeleteImage;
