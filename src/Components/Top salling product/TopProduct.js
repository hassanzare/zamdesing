import medal from "../../Resources/icons/Position.png";
import Blutooth from "../../Resources/icons/blutoothdevices.png";
import Airdot from "../../Resources/icons/airdot.png";
import Shoes from "../../Resources/icons/shoes.png";
import KidsShirt from "../../Resources/icons/kidsT-Shirt.png";
import SmartWatch from "../../Resources/icons/smartWatch.png";
import Girlstop from "../../Resources/icons/girlsTop.png";
import ArrowDown from "../../Resources/icons/Arrow - Down 4.png";
function TopProduct() {
  return (
    <div id='TopProduct'>
      <span>Top Selling Products</span>
      <a href='##'>See More</a>

      <div id='header'>
        <div id='h-SN'>
          <span>SN</span>
          <img src={ArrowDown} alt='ArrowDown' />
        </div>
        <div id='h-Name'>
          <span>Name</span>
          <img src={ArrowDown} alt='ArrowDown' />
        </div>
        <div id='h-Price'>
          <span>Price</span>
          <img src={ArrowDown} alt='ArrowDown' />
        </div>
        <div id='h-Total-Orders'>
          <span>Total Orders</span>
          <img src={ArrowDown} alt='ArrowDown' />
        </div>
        <div id='h-Total-Sales'>
          <span>Total Sales</span>
          <img src={ArrowDown} alt='ArrowDown' />
        </div>
      </div>

      <div id='top-Products'>
        <div>
          <img src={medal} alt='medal' />
          <div>
            <img src={Blutooth} alt='medal' /> <span>Blutooth Devices</span>
          </div>
          <text className='total-price'>$10</text>
          <text className='total-ordr'>34,666 Piece</text>
          <text className='total-sales'>$3,46,660</text>
        </div>
        <div>
          <img src={medal} alt='medal' />
          <div>
            <img src={Airdot} alt='medal' /> <span>Airdot</span>
          </div>
          <text className='total-price'>$15</text>
          <text className='total-ordr'>20,000 Piece</text>
          <text className='total-sales'>$3,00,000</text>
        </div>
        <div>
          <img src={medal} alt='medal' />
          <div>
            <img src={Shoes} alt='medal' /> <span>Shoes</span>
          </div>
          <text className='total-price'>$12</text>
          <text className='total-ordr'>15,000 Piece</text>
          <text className='total-sales'>$1,50,000</text>
        </div>
        <div>
          <span>4</span>
          <div>
            <img src={KidsShirt} alt='medal' /> <span>Kids T-Shirt</span>
          </div>
          <text className='total-price'>$10</text>
          <text className='total-ordr'>10,000 Piece</text>
          <text className='total-sales'>$1,20,000</text>
        </div>
        <div>
          <span>5</span>
          <div>
            <img src={SmartWatch} alt='medal' /> <span>Smart Watch</span>
          </div>
          <text className='total-price'>$12</text>
          <text className='total-ordr'>10,000 Piece</text>
          <text className='total-sales'>$1,20,000</text>
        </div>
        <div>
          <span>5</span>
          <div>
            <img src={Girlstop} alt='medal' /> <span>Girls Top</span>
          </div>
          <text className='total-price'>$12</text>
          <text className='total-ordr'>10,000 Piece</text>
          <text className='total-sales'>$1,20,000</text>
        </div>
      </div>
    </div>
  );
}

export default TopProduct;
