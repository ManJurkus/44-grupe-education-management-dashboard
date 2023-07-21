import { Mentor } from './Mentor';
import style from './MentorsTop.module.css';

export function MentorsTop({dataAllmentors}) {
    return (
        <div className={style.MentorsTop}>
            <h2>Top Mentors</h2>
            <Mentor dataMentor= {dataAllmentors.filter(item => item.mentorId === 1)} />
            <Mentor dataMentor= {dataAllmentors.filter(item => item.mentorId === 2)}/>
            <Mentor dataMentor= {dataAllmentors.filter(item => item.mentorId === 3)}/>
            <Mentor dataMentor= {dataAllmentors.filter(item => item.mentorId === 4)}/>


        </div>
    );
}