import style from './Mentor.module.css';
import { BsCheck2Square, BsThreeDotsVertical } from 'react-icons/bs';


export function Mentor({dataMentor}) {
console.log(dataMentor[0].photo);
    
    return (
        <div className={style.Mentor}>
            <div className={style.mentorInfo}>
            <img src={`mentors/${dataMentor[0].photo}`} alt='Mentor Photo' />

            <p>{dataMentor[0].name}</p>
            </div>

            <p>{dataMentor[0].subject}</p>

            <p>Course {dataMentor[0].countCourse}</p>

            <p>{dataMentor[0].countFoloewers} Followers</p>

            <div className={style.options}>

            <button>Follow</button>

            <BsCheck2Square />

            <BsThreeDotsVertical />
            </div>







        </div>
    );
}