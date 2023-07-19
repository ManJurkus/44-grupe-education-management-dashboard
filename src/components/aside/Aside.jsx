import style from './Aside.module.css';
import { Nav } from './nav/Nav';
import { NavSecond } from './nav/NavSecond';
import logo from '../../img/logo.png';


export function Aside() {
    return (
        <aside>
            <img src={logo} alt="logo" />

            <Nav />
            <NavSecond />
            


        </aside>
    );
}