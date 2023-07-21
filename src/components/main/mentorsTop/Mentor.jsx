import style from './Mentor.module.css';
import { BsCheck2Square, BsThreeDotsVertical } from 'react-icons/bs';
import { useState } from 'react';


export function Mentor({dataMentor}) {


let showMentor = 0;
let bigestFollow = 0;
for (let i=0; i<dataMentor.length; i++){
    if(dataMentor[i].countFoloewers > bigestFollow){
        bigestFollow = dataMentor[i].countFoloewers;
        showMentor = i;

    }

}

const [isFollow, setFollow] = useState(false);

function updateFollow() {
    setFollow(!isFollow);
}
    
    return (
        <div className={style.Mentor}>
            <div className={style.mentorInfo}>
            <img src={`mentors/${dataMentor[showMentor].photo}`} alt='Mentor Photo' />

            <p>{dataMentor[showMentor].name}</p>
            </div>

            <p>{dataMentor[showMentor].subject}</p>

            <p>Course {dataMentor[showMentor].countCourse}</p>

            <p>{dataMentor[showMentor].countFoloewers} Followers</p>

            <div className={style.options}>

            {isFollow ? <button onClick={updateFollow}>Unfollow</button>  : <button onClick={updateFollow}>Follow</button> }
            

            {isFollow ? <BsCheck2Square color='green' size='30px' /> : <BsCheck2Square size='30px'/>}

            <BsThreeDotsVertical size='30px' />
            </div>







        </div>
    );
}