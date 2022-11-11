import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import 'style/home.scss'
const left_icons = ['Office', 'Word', 'Excel', 'PowerPoint', 'Outlook', 'OneDrive', 'OneNote', 'ToDo', 'Calendar', 'Skype'];
const middle_icons = ['Office', 'Word', 'Excel'];
const bottom_icons = ['Office', 'Word', 'Excel', 'PowerPoint', 'Outlook', 'OneDrive', 'OneNote', 'ToDo', 'OneNote', 'ToDo', 'OneNote', 'ToDo'];

const Home = () => {
  useEffect(()=>{
  });

  return(
    <section className='home'>
      <div className='left-rail'>
        <li className='nine-dots'></li>
        {left_icons.map((left_icons,index) =>
          <Link to='/about'><li className={left_icons} key={index}></li></Link>
        )}
        <li className='three-dots'></li>
      </div>
      <div className="high-bar">
        <input type="text" className='select-box' placeholder='웹 검색'/>
        <li className='voice'></li>
        <li className='search'></li>
      </div>
      <div className="middle-bar">
        <div className="profile"></div>
        <div className="category"></div>
        <div className="guest-book"></div>
      </div>
      <div className='bottom-bar'>
        <ul>
          {bottom_icons.map((middle_icons,index) =>
            <li className='content-container'>
              <span className={middle_icons} key={index}></span>
            </li>
          )}
        </ul>
      </div>


      <div className='background-image-overlay'></div>
    </section>
  )
}

export default Home