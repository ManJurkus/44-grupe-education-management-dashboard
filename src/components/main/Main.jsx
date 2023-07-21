// import { BsPlusCircleDotted } from 'react-icons/bs';
import style from './Main.module.css';
import { Header } from './header/Header';
import { MentorsTop } from './mentorsTop/MentorsTop';
import { PopularCategories } from './popularCategories/PopularCategories';
import { ProgressTabsEmpty } from './progressTabs/ProgresTabEmpty';
import { ProgressTabs } from './progressTabs/ProgressTabs';
import { Title } from './title/Title';


export function Main({dataProgress, datamentors}) {
    return (
        <main>
           <Header />
           <Title />
           <ProgressTabs infoTabProgress = {dataProgress.filter(item => item.id === 1)} />
           <ProgressTabs infoTabProgress = {dataProgress.filter(item => item.id === 2)}/>
           <ProgressTabs infoTabProgress = {dataProgress.filter(item => item.id === 3)}/>
           <ProgressTabsEmpty />
           <PopularCategories />
           <MentorsTop dataAllmentors = {datamentors}/>

           
        </main>
    );
}