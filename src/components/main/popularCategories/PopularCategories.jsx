import style from './PopularCategories.module.css';
import { MdDesignServices } from 'react-icons/md';
import { PiPresentationChartDuotone } from 'react-icons/pi';
import { SiPagespeedinsights } from 'react-icons/si';
import { GiChart } from 'react-icons/gi';





export function PopularCategories({dataAllmentors}) {

    let UIDesingerCount = 0;
    let marketerCount = 0;
    let androiedDeveloperCount = 0;
    let fontendDeveloperCount = 0;

    for(const mentor of dataAllmentors){
        if(mentor.subject === 'UI/UX Desinger'){
            UIDesingerCount+= mentor.countCourse;
        }
        if(mentor.subject === 'Marketer'){
            marketerCount+= mentor.countCourse;
        }
        if(mentor.subject === 'Androied Developer'){
            androiedDeveloperCount+= mentor.countCourse;
        }
        if(mentor.subject === 'Fontend Developer'){
            fontendDeveloperCount+= mentor.countCourse;
        }
    }

    return (
        <div className={style.PopularCategories}>
            <h2>
                Popular Categories
            </h2>
            <div className={style.CategoriesTab}>
                <div className={style.CategoriesInfo}>
                    <p className={style.title}>UI/UX Desinger</p>
                    <p className={style.text}>{UIDesingerCount} Courses</p>
                </div>
                <MdDesignServices size='40px' />

            </div>

            <div className={style.CategoriesTab}>
                <div className={style.CategoriesInfo}>
                    <p className={style.title}>Marketer</p>
                    <p className={style.text}>{marketerCount} Courses</p>
                </div>
                <PiPresentationChartDuotone size='40px'/>

            </div>

            <div className={style.CategoriesTab}>
                <div className={style.CategoriesInfo}>
                    <p className={style.title}>Androied Developer</p>
                    <p className={style.text}>{androiedDeveloperCount} Courses</p>
                </div>
                <SiPagespeedinsights size='40px'/>

            </div>

            <div className={style.CategoriesTab}>
                <div className={style.CategoriesInfo}>
                    <p className={style.title} >Fontend Developer</p>
                    <p className={style.text}>{fontendDeveloperCount} Courses</p>
                </div>
                <GiChart size='40px'/>

            </div>
            

        </div>
    );
}