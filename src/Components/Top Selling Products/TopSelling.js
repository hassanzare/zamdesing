import Menu from "../../Resources/icons/Menu.png";
import Stars from "../../Resources/icons/Group 525.png";
import Shoes from "../../Resources/icons/Mask Group.png";
import Iphon from "../../Resources/icons/iPhone-12-2-removebg-preview 1.png";

function TopSelling() {
  return (
    <div className='topselling'>
      <span>Top Selling Products</span>

      <img src={Menu} alt='Menu' />

      <div className='container'>
        <div className='top'>
          <div className='left'>
            <img src={Shoes} alt='Shoes' />
          </div>
          <div className='right'>
            <text>NIKE Shoes Black Pattern</text>
            <img className='star' src={Stars} alt='star' />
            <span>$87</span>
          </div>
        </div>

        <div id='line-selling'></div>

        <div className='buttom'>
          <div className='left'>
            <img className='Iphon' src={Iphon} alt='Iphon' />
          </div>
          <div className='right'>
            <text>iPhone 12</text>
            <img className='star' src={Stars} alt='star' />
            <span>$987</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSelling;
