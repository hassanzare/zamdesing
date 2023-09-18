import Arrow from "../../Resources/icons/Arrow - Down 2.png";
import Menu from "../../Resources/icons/Menu.png";
import Lenz from "../../Resources/icons/Rectangle 91.png";
import Dress from "../../Resources/icons/Rectangle 90.png";
import Oil from "../../Resources/icons/Rectangle 111.png";
import Parfum from "../../Resources/icons/Rectangle 110.png";

function RecentOrders() {
  return (
    <section>
      <span id='text'>Recent Order</span>

      <div id='img'>
        <img src={Menu} alt='Menu' />
      </div>

      <div id='names'>
        <div id='Tracking' className='name'>
          <span>Tracking no</span> <img src={Arrow} alt='Arrow' />
        </div>
        <div id='Product' className='name'>
          <span>Product Name</span> <img src={Arrow} alt='Arrow' />
        </div>
        <div id='Price' className='name'>
          <span>Price</span> <img src={Arrow} alt='Arrow' />
        </div>
        <div id='Order' className='name'>
          <span>Total Order</span> <img src={Arrow} alt='Arrow' />
        </div>
        <div id='Amount' className='name'>
          <span>Total Amount</span> <img src={Arrow} alt='Arrow' />
        </div>
      </div>
      <div id='line'></div>
      <div id='orders'>
        <div className='row'>
          <di className='column1'>#876364</di>
          <di className='column2'>
            <img src={Lenz} alt='Lenz' />
            <span>Camera Lens</span>
          </di>
          <di className='column3'>$178</di>
          <di className='column4'>
            <div>
              <span>325</span>
            </div>
          </di>
          <di className='column5'>$1,46,660</di>
        </div>
        <div className='row'>
          <di className='column1'>#876368</di>

          <di className='column2'>
            <img src={Dress} alt='Dress' />
            <span>Black Sleep Dress</span>
          </di>
          <di className='column3'>$14</di>

          <di className='column4'>
            <div>
              <span>53</span>
            </div>
          </di>
          <di className='column5'>$46,660</di>
        </div>
        <div className='row'>
          <di className='column1'>#876412</di>
          <di className='column2'>
            <img src={Oil} alt='Oil' />
            <span>Argan Oil</span>
          </di>
          <di className='column3'>$21</di>
          <di className='column4'>
            <div>
              <span>78</span>
            </div>
          </di>
          <di className='column5'>$3,46,676</di>
        </div>
        <div className='row'>
          <di className='column1'>#876621</di>
          <di className='column2'>
            <img src={Parfum} alt='Parfum' />
            <span>EAU DE Parfum</span>
          </di>
          <di className='column3'>$32</di>
          <di className='column4'>
            <div>
              <span>98</span>
            </div>
          </di>
          <di className='column5'>$3,46,981</di>
        </div>
      </div>
    </section>
  );
}

export default RecentOrders;
