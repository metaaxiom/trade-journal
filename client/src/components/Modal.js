import React, { useEffect } from 'react'

export default function Modal(props){
    const {show, toggle, children, title, goBack = null, classes=''} = props;

    useEffect(() => {
        show && (document.body.style.overflow = 'hidden');
        !show && (document.body.style.overflow = 'unset');
     }, [show]);
    
    

    return (
        show && <>
            <div className="modal-overlay" onClick={toggle}></div>
            <div className="modal-wrapper">
                <div className={`modal ${classes}`}>
                    <div className="modal__header">
                        {(goBack != null) && (
                            <button type="button" className="modal__header-control modal__back-btn" onClick={goBack}>
                                <i className="fa-solid fa-arrow-left"></i>
                            </button>
                        )}

                        <h2 className="modal__title">{title}</h2>

                        <button type="button" className="modal__header-control modal__close-btn" onClick={toggle}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>

                    {children}
                </div>
            </div>
        </>
    );
}