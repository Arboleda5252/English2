import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import uno from './imgs/11.jpeg';
import dos from './imgs/22.jpeg';
import tres from './imgs/33.jpeg';
import cuatro from './imgs/44.jpeg';
import cinco from './imgs/55.jpeg';
import seis from './imgs/66.jpeg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <header class="bg-gradient-to-r from-lime-400 to-green-800 text-black rounded-lg">
      <div class="container mx-auto flex items-center justify-between py-2">
        <img src="https://www.elpalpitar.com/wp-content/archivos/2015/09/Sede_Oriente_UdeA.jpg"
          alt="Logo"
          className="w-40 h-40 rounded-full" />
        <div>
          <h1 className="text-center flex-grow text-5xl decoration-solid font-serif	">Universidad de Antioquia</h1>
          <h2 className='text-center text-xl'>
            Campus El Carmen del Viboral
          </h2>
        </div>
        <div>
          <img src="https://www.udea.edu.co/wps/wcm/connect/udea/39d1aba1-d268-4143-b8c8-6689286195ea/logosimbolo-vertical-negro-png.png?MOD=AJPERES&CVID=ljeQHdq"
            alt="Logo"
            className="w-28" />
        </div>
      </div>
    </header>
    <div className='bg-gradient-to-r from-green-200 to-slate-300 flex flex-col'>
      <div>
        <p className='text-center text-orange-600 decoration-solid p-3 px-7 text-xl font-serif italic'>
          My university is located on the main road between La Ceja and rionegro (kilometer 6), and the university is a place to study, also it is a place quiet and with lots of nature for relaxation.
        </p>
      </div>
      <div className='flex justify-around my-4'>
        <div className='border-2 border-x-green-900 snap-y w-5/12 h-96 p-4 overflow-y-auto'>
          <article class="text-wrap">
            <h2 className='text-orange-800 decoration-solid italic text-4xl'>Place</h2>
            <br></br>
            <p>The university have many places such as classrooms, auditorium, computer rooms, laboratories, food area, sports areas, library, etc.</p>
            <br></br>
            <img src='https://actualidad.com.co/wp-content/uploads/2023/07/udea-oriente-1024x581.jpg'/ >
            <br></br>
            <p>Among the places mentioned, the library is located on the first floor in block one, and it is regularly open from 8 a.m. to 5 p.m. on Monday to Friday.  The library is very quiet and silent, also this place for students and teachers to study, research and read.</p>
            <br></br>
            <img src={cinco} />
            <br></br>
            <p>Also the library is small-medium and it has a single classroom with six shelves and tables, beside the receptionist is helpful for a query. At this place you can find information about multiple books and documents such as areas of administration, health, accounting, law, philosophy, psychology, engineering systems, environmental sanitation, social work, microbiology and bioanalysis.</p>
            <br></br>
            <img src={dos} />
            <br></br>
            <p>Also, you can also access the information online where we can use Opac, a database of books and documents, where you can borrow books.</p>
            <br></br>
            <img src={uno} />
            <br></br>
            <img src={tres} />
            <br></br>
          </article>
        </div>
        <div className='border-2 border-x-green-900 snap-y w-5/12 h-96 p-4 overflow-y-auto'>
          <article class="text-wrap">
            <h2 className='text-orange-800 decoration-solid italic text-4xl'>Event</h2>
            <br></br>
            <p>Teachers, students, and staff keep busy with the different events we have during the year. Some events or activities such as:</p>
            <br></br>
            <ul className='list-disc list-outside mx-4'> 
              <li>Week of Health, Culture and Innovation.</li>
              <li>Nutritional security in the community LGBTI of Eastern Antioquia</li>
              <li>Engineering and innovation </li>
              <li>Explore space with the Club de Astronomía de Oriente</li>
            </ul>
            <br></br>
            <img src='https://www.udea.edu.co/wps/wcm/connect/udea/c5e7ecf9-078a-440b-a13d-c046c41de39a/1/ing_940.png?MOD=AJPERES' alt='event' className='rounded-lg'/> 

            <p>
              My favorite university event is Engineering and innovation. I like it because there are research proposals from invited institutions; in addition to innovations from the region. During this celebration, we have different activities for the community (students, teachers and staff keep) such as: a conference on financial culture with representatives of the Banco Agrario, offers from Innpulsa Colombia, exhibition of classroom projects and guided tour of the laboratories. The objective of the event is to encourage more ideas in the engineering branch with new projects and future endeavors.
            </p>
            <br></br>
            <img src='https://www.udea.edu.co/wps/wcm/connect/udea/dec2ffd8-139d-4503-8ec6-628e2ba03c57/1/bn_oriente.png?MOD=AJPERES' className='rounded-lg' />
            <br></br>
          </article>
        </div>
      </div>
      <div>
        <p className='text-center text-orange-600 decoration-solid p-3 text-xl font-serif'>
          In conclusion, our campus is small compared to the headquarters main. But our community is very participatory in events and we feel like part of a family called university. Any student or teacher is welcome in this wonderful place.
        </p>
        <p className='text-center text-orange-800 decoration-solid text-2xl font-serif p-2 '>
          Thank you
        </p>
      </div>
    </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
