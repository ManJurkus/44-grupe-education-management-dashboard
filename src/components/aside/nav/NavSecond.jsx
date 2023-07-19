import style from '../../aside/nav/NavSecond.module.css';
import { GoHomeFill } from 'react-icons/go';

export function NavSecond() {
    return (
        <nav>
            <div className={style.title}>
                <p>Setting</p>
            </div>
            <div className={style.meniu}>
                <GoHomeFill />
                <p>Profile</p>
            </div>

            <div className={style.meniu}>
                <GoHomeFill />
                <p>Setting</p>
            </div>

            <div className={style.meniu}>
                <GoHomeFill />
                <p>Logout</p>
            </div>
        </nav>
    );
}