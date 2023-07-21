
import './App.css';
import { Aside } from './components/aside/Aside';
import { Main } from './components/main/Main';
import { TbDeviceMobileHeart } from 'react-icons/tb';
import { BsCalendar3 } from 'react-icons/bs';
import { PiProjectorScreenChartFill } from 'react-icons/pi';




function App() {
 const data = [
  {
    id: 1,
    createdAt: 'Dec, 15, 2020',
    title: 'App Design',
    subtopic: 'Learn App design from our expert trainer',
    text: 'Finaly bla bla bla',
    percentages: 20,
    amblem:<TbDeviceMobileHeart />

  },
  {
    id: 2,
    createdAt: 'Dec, 15, 2020',
    title: 'Web Design',
    subtopic: 'Learn Web design from our expert trainer',
    text: 'Finaly bla bla bla',
    percentages: 80,
    amblem:<BsCalendar3 />

  },
  {
    id: 3,
    createdAt: 'Dec, 15, 2020',
    title: 'Dashboard',
    subtopic: 'Learn Typography from our expert trainer',
    text: 'Finaly bla bla bla',
    percentages: 50,
    amblem: <PiProjectorScreenChartFill />

  }
 ];

 const mentors = [
  {
    mentorId:1,
    name: 'Simas Klaunas',
    photo: 'mentor1.jpg',
    subject: 'UI/UX Desinger',
    countCourse : 18,
    countFoloewers : 1200,
  
  },
  {
    mentorId:2,
    name: 'Simas Juokdarys',
    photo: 'mentor2.jpg',
    subject: 'Marketer',
    countCourse : 24,
    countFoloewers : 900,
  
  },
  {
    mentorId:3,
    name: 'Simas Kavnka',
    photo: 'mentor3.jpg',
    subject: 'Androied Developer',
    countCourse : 64,
    countFoloewers : 1590,
  
  },
  {
    mentorId:4,
    name: 'Simas Mimas',
    photo: 'mentor4.jpg',
    subject: 'Fontend Developer',
    countCourse : 85,
    countFoloewers : 3400,
  
  }

 ];

  return (
    <div className="App">
      <Aside />
      <Main dataProgress={data} datamentors= {mentors}/>
        
      

    </div>
  );
}

export default App;
