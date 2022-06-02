import { useEffect } from 'react'
import '../style/home.scss'

const icons = ['Office', 'Word', 'Excel', 'PowerPoint', 'Outlook', 'OneDrive', 'OneNote', 'ToDo', 'Calendar', 'Skype'];

const Home = () => {
  useEffect(()=>{
  });

  return(
    <section className='home'>
      <div className='leftRail'>
        <li className='Nine_Dots'></li>
        {icons.map(icons =>
          <li className={icons}></li>  
        )}
        <li className='Three_Dots'></li>
      </div>
      <div className='backgroundImageOverlay'></div>
    </section>
  )
}

export default Home