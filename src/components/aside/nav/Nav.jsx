import style from '../../aside/nav/Nav.module.css';
import { GoHomeFill } from 'react-icons/go';

export function Nav() {
    return (
        <nav>
            <div className={style.title}>
                <p>Main meniu</p>
            </div>
            <div className={style.meniu}>
                <GoHomeFill />
                <p>Overview</p>
            </div>

            <div className={style.meniu}>
                <GoHomeFill />
                <p>E-Book</p>
            </div>

            <div className={style.meniu}>
                <GoHomeFill />
                <p>My Course</p>
            </div>

            <div className={style.meniu}>
                <GoHomeFill />
                <p>Purchase Course</p>
            </div>

            <div className={style.meniu}>
                <GoHomeFill />
                <p>Complete Courses</p>
            </div>

            <div className={style.meniu}>
                <GoHomeFill />
                <p>Community</p>
            </div>

            
        </nav>
    );
}