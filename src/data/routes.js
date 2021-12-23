import {ABOUT_ME_ROUTE, MY_SKILLS_ROUTE, MY_WORKS_ROUTE} from "./consts";
import AboutMe from "../pages/AboutMe";
import MySkills from "../pages/MySkills";
import MyWorks from "../pages/MyWorks";
import skill from '../icons/skills.png'
import works from '../icons/works.png'
import about from '../icons/about.png'

export const routes = [
    {
        id: 0,
        path: ABOUT_ME_ROUTE,
        element: <AboutMe/>,
        name: 'About me',
        icon: about
    },
    {
        id: 1,
        path: MY_SKILLS_ROUTE,
        element: <MySkills/>,
        name: 'Skills',
        icon: skill
    },
    {
        id: 2,
        path: MY_WORKS_ROUTE,
        element: <MyWorks/>,
        name: 'Works',
        icon: works
    },
]
