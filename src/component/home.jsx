import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { instagramIdOption, selectStyles } from 'utils/select-option';
import Select from 'react-select';
import 'style/home.scss'
const left_icons = ['Office', 'Word', 'Excel', 'PowerPoint', 'Outlook', 'OneDrive', 'OneNote', 'ToDo', 'Calendar', 'Skype'];
const middle_icons = ['profile', 'category', 'guest-book'];
const bottom_icons = ['Office', 'Word', 'Excel', 'PowerPoint', 'Outlook', 'OneDrive', 'OneNote', 'ToDo', 'OneNote', 'ToDo', 'OneNote', 'ToDo'];

const Home = () => {
  useEffect(()=>{
  });

  return(
    <section className='home'>
      <div className='left-rail'>
        <li className='nine-dots'></li>
        {left_icons.map((left_icons,index) =>
          <Link to='/ex'><li className={left_icons} key={index}></li></Link>
        )}
        <li className='three-dots'></li>
      </div>
      <div className="high-bar">
        <Select options={instagramIdOption} styles={selectStyles} noOptionsMessage={()=>'관리자와 팔로우 된 아이디가 아닙니다.'} placeholder="INPUT YOUR ID"/>
        <li className='voice'></li>
        <li className='search'></li>
      </div>
      <div className="middle-bar">
        <div className="profile-wrap">
          <div className="profile"></div>
          <div className="middle-label">PROFILE</div>
        </div>
        <div className="category-wrap">
          <div className="categories">
            <span className="category"></span>
            <span className="category"></span>
          </div>
          <div className="middle-label">CATEGORY</div>
        </div>
        <div className="guest-book-wrap">
          <div className="guest-book"></div>
          <div className="middle-label">GUEST-BOOK</div>
        </div>
      </div>
      <div className='bottom-bar'>
        <ul>
          {bottom_icons.map((bottom_icon,index) =>
            <li className='content-container'>
              <span className={bottom_icon} key={index}></span>
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}

export default Home