
import './App.css';
import { Aside } from './components/aside/Aside';
import { Main } from './components/main/Main';
import { TbDeviceMobileHeart } from 'react-icons/tb';
import { BsCalendar3 } from 'react-icons/bs';
import { PiProjectorScreenChartFill } from 'react-icons/pi';




function App() {
const users = [
  {
    usersID:1,
    name: 'Simas Galvocius',
    dateSartedApp: 1669037742156,
    dateSartedWeb: 1619037142156,
    dateSartedDashbord: 1611017142156,
  }
  
];

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
    createat: 1669037742156,
  
  },
  {
    mentorId:2,
    name: 'Simas Juokdarys',
    photo: 'mentor2.jpg',
    subject: 'Marketer',
    countCourse : 24,
    countFoloewers : 900,
    createat: 1669017742156,
  
  },
  {
    mentorId:3,
    name: 'Simas Kavnka',
    photo: 'mentor3.jpg',
    subject: 'Androied Developer',
    countCourse : 64,
    countFoloewers : 1590,
    createat: 1661037742156,
  
  },
  {
    mentorId:4,
    name: 'Simas Mimas',
    photo: 'mentor4.jpg',
    subject: 'Fontend Developer',
    countCourse : 85,
    countFoloewers : 3400,
    
  
  },
  {
    mentorId:5,
    name: 'Simas Simas',
    photo: 'mentor1.jpg',
    subject: 'UI/UX Desinger',
    countCourse : 40,
    countFoloewers : 900,
  
  },
  {
    mentorId:6,
    name: 'Simas Apsauginis',
    photo: 'mentor2.jpg',
    subject: 'Marketer',
    countCourse : 12,
    countFoloewers : 500,
  
  },
  {
    mentorId:7,
    name: 'Simas Lepsis',
    photo: 'mentor3.jpg',
    subject: 'Androied Developer',
    countCourse : 24,
    countFoloewers : 1420,
  
  },
  {
    mentorId:8,
    name: 'Simas Kilimas',
    photo: 'mentor4.jpg',
    subject: 'Fontend Developer',
    countCourse : 45,
    countFoloewers : 2500,
  
  }

 ];

  return (
    <div className="App">
      <Aside />
      <Main dataProgress={data} datamentors= {mentors} users={users}/>
        
      

    </div>
  );
}

export default App;
