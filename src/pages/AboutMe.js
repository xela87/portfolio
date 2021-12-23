import React from 'react';
import style from'../styles/about.module.css'
import photo from "../images/photo.webp";

const AboutMe = () => {
    return (
        <div className={style.container}>
            <img className={style.myPhoto} src={photo} alt=''/>
            <div className={style.text_container}>
                <p>Hi, my name is Oleksii (Alex) Khohklov</p>
                <p>I'm junior frontend web developer</p>
                <p>I specialize in writing websites and applications in React</p>
                <p>I present to your attention my small portfolio</p>
            </div>
        </div>
    );
};

export default AboutMe;
