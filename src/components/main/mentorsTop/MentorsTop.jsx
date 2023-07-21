import { Mentor } from './Mentor';
import style from './MentorsTop.module.css';

export function MentorsTop({dataAllmentors}) {
    return (
        <div className={style.MentorsTop}>
            <h2>Top Mentors</h2>
            <Mentor dataMentor= {dataAllmentors.filter(item => item.subject === 'UI/UX Desinger')} />
            <Mentor dataMentor= {dataAllmentors.filter(item => item.subject === 'Marketer')}/>
            <Mentor dataMentor= {dataAllmentors.filter(item => item.subject === 'Androied Developer')}/>
            <Mentor dataMentor= {dataAllmentors.filter(item => item.subject === 'Fontend Developer')}/>


        </div>
    );
}