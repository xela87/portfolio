import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routes} from "../data/routes";
import AboutMe from "../pages/AboutMe";

const AppRouter = () => {
    return (
        <Routes>{routes.map(({path, element}) =>
            <Route key={path} path={path} element={element} exact/>
        )}
            <Route path="*" element={<AboutMe/>} exact/>
        </Routes>
    );
};

export default AppRouter;
