import { useEffect } from 'react'
import {Link} from "react-router-dom";
import '../style/home.scss'
const left_icons = ['Office', 'Word', 'Excel', 'PowerPoint', 'Outlook', 'OneDrive', 'OneNote', 'ToDo', 'Calendar', 'Skype'];
const middle_icons = ['Office', 'Word', 'Excel', 'PowerPoint', 'Outlook', 'OneDrive', 'OneNote', 'ToDo', 'Calendar', 'Skype'];

const Home = () => {
  useEffect(()=>{
  });

  return(
    <section className='home'>
      <div className='leftRail'>
        <li className='nineDots'></li>
        {left_icons.map((left_icons,index) =>
          <Link to='/about' className={left_icons} key={index}></Link>  
        )}
        <li className='threeDots'></li>
      </div>
      <div className="highBar">
        <input type="text" className='select-box' placeholder='웹 검색'/>
        {/* <li className='welcome'>웹 검색</li> */}
        <li className='voice'></li>
        <li className='search'></li>
      </div>
      <div className='middleBar'>
        {middle_icons.map((middle_icons,index) =>
        <li>
          <div className='content-container'>
            <span className={middle_icons} key={index}></span>
          </div>
        </li>
        )}
      </div>


      <div className='backgroundImageOverlay'></div>
    </section>
  )
}

export default Home