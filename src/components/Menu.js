import React from 'react';
import style from "../styles/menu.module.css";
import {routes} from "../data/routes";
import {contacts} from "../data/contacts"
import {NavLink} from "react-router-dom";


const Menu = ({active, setActive}) => {
    active ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible";

    return (
        <div
            className={active ? style.active : style.menu}
            onClick={() => setActive(false)}
        >
            <div className={style.blur}/>
            <div
                className={style.menuContent}
                onClick={e => {
                    e.stopPropagation()
                    setActive(false)
                }}>
                <ul>
                    {routes.map(route =>
                        <li key={route.id}>
                            <NavLink
                                className={style.link}
                                key={route.id}
                                to={route.path}
                                element={route.element}
                            >
                                {route.name}
                                <img src={route.icon} alt={route.id}/>
                            </NavLink>
                        </li>
                    )}
                    <h2 style={{fontSize: "32px", margin: "10%"}}>Contacts</h2>

                    {contacts.map(contact =>
                        <li key={contact.id}>
                            <a className={style.link} href={contact.link} target="_blank"
                               rel="noreferrer">{contact.title}<img src={contact.icon} alt={contact.title}/></a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Menu;
