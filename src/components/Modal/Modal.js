import React from 'react';
import './Modal.scss'

const Modal = ({active, setActive, skills, id}) => {
    const content = skills.filter(skill => skill.id === id);

    return (
        <div className={active ? 'modal active' : 'modal'}
             onClick={() => setActive(false)}
        >
            <div className={'modal__content'}
                onClick={e => e.stopPropagation()}
            >
                {content[0]?.content}
            </div>
        </div>
    );
};

export default Modal;
