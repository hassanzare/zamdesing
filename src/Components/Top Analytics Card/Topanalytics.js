import Heart from "../../Resources/icons/Icon.png";
import Controller from "../../Resources/icons/Icon (1).png";
import Bag from "../../Resources/icons/Incon.png";
import Job from "../../Resources/icons/Icon (2).png";

function Topanalytics() {
  return (
    <div id='topanlytics'>
      <div className='section'>
        <img src={Heart} alt='heart' />
        <div>
          <span className='number'>178+</span>
          <span className='title'>Save Products</span>
        </div>
      </div>
      <div className='section'>
        <img src={Controller} alt='controller' />
        <div>
          <span className='number'>20+</span>
          <span className='title'>Stock Products</span>
        </div>
      </div>
      <div className='section'>
        <img src={Bag} alt='bag' />
        <div>
          <span className='number'>190+</span>
          <span className='title'>Sales Products</span>
        </div>
      </div>
      <div className='section'>
        <img src={Job} alt='job' />
        <div>
          <span className='number'>12+</span>
          <span className='title'>Job Application</span>
        </div>
      </div>
    </div>
  );
}

export default Topanalytics;
