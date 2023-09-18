import Menu from "../../Resources/icons/Menu.png";
import vector from "../../Resources/icons/Vector.png";
import Shadow from "../../Resources/icons/shadow.png";
import circle from "../../Resources/icons/Ellipse 114.png";
function Reports() {
  return (
    <div className='report'>
      <span id='text'>Reports</span>

      <div id='img'>
        <img src={Menu} alt='Menu' />
      </div>
      <div id='numbers'>
        <span>100</span>
        <span>80</span>
        <span>60</span>
        <span>40</span>
        <span>20</span>
        <span>0</span>
      </div>
      <img className='vector' src={vector} alt='vector' />
      <img src={Shadow} alt='Shadow' id='Shadow' />
      <img src={circle} alt='circle' id='circle1' className='circle' />
      <img src={circle} alt='circle' id='circle2' className='circle' />
      <img src={circle} alt='circle' id='circle3' className='circle' />
      <img src={circle} alt='circle' id='circle4' className='circle' />
      <img src={circle} alt='circle' id='circle5' className='circle' />
      <div id='lines'>
        <div className='100'></div>
        <div className='80'></div>
        <div className='60'></div>
        <div className='40'></div>
        <div className='20'></div>
        <div className='0'></div>
      </div>
      <div id='am'>
        <span>10am</span>
        <span>11am</span>
        <span>12am</span>
        <span>01am</span>
        <span>02am</span>
        <span>03am</span>
        <span>04am</span>
        <span>05am</span>
        <span>06am</span>
        <span>07am</span>
      </div>
    </div>
  );
}

export default Reports;
