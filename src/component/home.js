import { useEffect } from 'react'
import '../style/home.scss'

const icons = ['Office', 'Word', 'Excel', 'PowerPoint', 'Outlook', 'OneDrive', 'OneNote', 'ToDo', 'Calendar', 'Skype'];

const Home = () => {
  useEffect(()=>{
  });

  return(
    <section className='home'>
      <div className='leftRail'>
        <li className='nineDots'></li>
        {icons.map((icons,index) =>
          <li className={icons} key={index}></li>  
        )}
        <li className='threeDots'></li>
      </div>
      <div className="highBar">
        <li className='welcome'>웹 검색</li>
        <li className='voice'></li>
        <li className='search'></li>
      </div>


      <div className='backgroundImageOverlay'></div>
    </section>
  )
}

export default Home