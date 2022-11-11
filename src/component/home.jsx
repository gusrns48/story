import { useEffect } from 'react'
import {Link} from "react-router-dom";
import '../style/home.scss'
const left_icons = ['Office', 'Word', 'Excel', 'PowerPoint', 'Outlook', 'OneDrive', 'OneNote', 'ToDo', 'Calendar', 'Skype'];
const middle_icons = ['Office', 'Word', 'Excel', 'PowerPoint', 'Outlook', 'OneDrive', 'OneNote', 'ToDo'];

const Home = () => {
  useEffect(()=>{
  });

  return(
    <section className='home'>
      <div className='left-rail'>
        <li className='nine-dots'></li>
        {left_icons.map((left_icons,index) =>
          <Link to='/about' className={left_icons} key={index}></Link>  
        )}
        <li className='three-dots'></li>
      </div>
      <div className="high-bar">
        <input type="text" className='select-box' placeholder='웹 검색'/>
        <li className='voice'></li>
        <li className='search'></li>
      </div>
      <div className='middle-bar'>
        {middle_icons.map((middle_icons,index) =>
        <li>
          <div className='content-container'>
            <span className={middle_icons} key={index}></span>
          </div>
        </li>
        )}
      </div>


      <div className='background-image-overlay'></div>
    </section>
  )
}

export default Home