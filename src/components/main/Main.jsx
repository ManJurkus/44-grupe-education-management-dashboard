// import { BsPlusCircleDotted } from 'react-icons/bs';
import style from './Main.module.css';
import { Header } from './header/Header';
import { PopularCategories } from './popularCategories/PopularCategories';
import { ProgressTabsEmpty } from './progressTabs/ProgresTabEmpty';
import { ProgressTabs } from './progressTabs/ProgressTabs';
import { Title } from './title/Title';


export function Main() {
    return (
        <main>
           <Header />
           <Title />
           <ProgressTabs />
           <ProgressTabs />
           <ProgressTabs />
           <ProgressTabsEmpty />
           <PopularCategories />

           
        </main>
    );
}