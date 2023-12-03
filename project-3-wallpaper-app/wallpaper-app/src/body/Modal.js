import React from 'react';

const Modal = ({selectedImg, setselectedImg}) => {
    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setselectedImg(null);
        }
    }
    return(
        <div className="backdrop" onClick={handleClick}>
            <img src={selectedImg} alt="selected img"></img>
        </div>
    )
}
export default Modal;