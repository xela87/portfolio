import React, {useState} from 'react';
import style from '../styles/skills.module.css'
import {skills} from '../data/skills'
import Modal from "../components/Modal/Modal";

const MySkills = () => {
    const [modalActive, setModalActive] = useState(false)
    const [contentID, setContentId] = useState(0)
    return (
        <div className={style.container}>
            <div className={style.skill_container}>
                {skills.map(skill =>
                    <div className={style.skill_item}
                         key={skill.id}
                         onClick={() => {
                             setModalActive(true);
                             setContentId(skill.id)
                         }}
                    >
                        <p className={style.skill_item_title}>{skill.title}</p>
                        <img className={style.skill_item_img} src={skill.img} alt=''/>
                    </div>
                )}
                <Modal active={modalActive}
                       setActive={setModalActive}
                       id={contentID}
                       skills={skills}
                />
            </div>
        </div>
    );
};

export default MySkills;
