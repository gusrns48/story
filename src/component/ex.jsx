import { useEffect } from 'react'
import '../style/home.scss'

const Home = () => {
  useEffect(()=>{
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleWindowResize);
  
    const spansSlow = document.querySelectorAll('.spanSlow');
    const spansFast = document.querySelectorAll('.spanFast');
  
    let width = window.innerWidth;
  
    function handleMouseMove(e) {
      let normalizedPosition = e.pageX / (width/2) - 1;
      let speedSlow = 100 * normalizedPosition;
      let speedFast = 200 * normalizedPosition;
      spansSlow.forEach((span) => {
        span.style.transform = `translate(${speedSlow}px)`;
      });
      spansFast.forEach((span) => {
        span.style.transform = `translate(${speedFast}px)`
      })
    }
    function handleWindowResize() {
      width = window.innerWidth;
    }
  });

  return(
    <div class="wrap">
      <div class="line">
        <div class="left">
          <div class="content">
            <span class="spanSlow">Welcome</span>
          </div>
        </div>
        <div class="right">
          <div class="content">
            <span class="spanSlow">Welcome</span>
          </div>
        </div>
      </div>
      <div class="line">
        <div class="left">
          <div class="content">
            <span class="spanSlow">TO</span>
          </div>
        </div>
        <div class="right">
          <div class="content">
            <span class="spanSlow">TO</span>
          </div>
        </div>
      </div>
      <div class="line">
        <div class="left">
          <div class="content">
            <span class="spanFast">GUS48</span>
          </div>
        </div>
        <div class="right">
          <div class="content">
            <span class="spanFast">GUS48</span>
          </div>
        </div>
      </div>
      <div class="line">
        <div class="left">
          <div class="content">
            <span class="spanSlow">BLOG</span>
          </div>
        </div>
        <div class="right">
          <div class="content">
            <span class="spanSlow">BLOG</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home