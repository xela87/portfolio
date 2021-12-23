import React, {useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import style from './styles/app.module.css'
import Menu from "./components/Menu";
import menu from "./icons/menu.png";

const App = () => {
    const [menuActive, setMenuActive] = useState(false)
    return (
        <BrowserRouter>
            <section className={style.container}>
                <nav className={style.navBtn} onClick={() => setMenuActive(!menuActive)}>
                    <img src={menu} alt=""/>
                </nav>
                <Menu active={menuActive} setActive={setMenuActive}/>
                <main className={style.content}>
                    <AppRouter/>
                </main>
            </section>
        </BrowserRouter>
    );
};

export default App;
