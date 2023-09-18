import arrowD from "../../Resources/icons/arrowdown.png";
import NewProduct from "../Add a New Product/NewProduct";
function TitleProduct() {
  return (
    <div id='TitleProduct'>
      <span id='Products'>Product Analytics</span>
      <div id='date'>
        <div>
          <div>10-06-2021</div> <img src={arrowD} alt='arrowD' />
        </div>
        <div>
          <div>10-10-2021</div> <img src={arrowD} alt='arrowD' />
        </div>
      </div>
      <div id='titlebtn'>
        <div className='left-btn'>
          <button id='product-btn'>Products</button>
          <button id='customer-btn'>Customer</button>
        </div>
        <div>
          <input type='checkbox' id='check' />
          <label for='check'>
            <div className='right-btn'>+ Add Product</div>
          </label>
          <NewProduct />
        </div>
      </div>
    </div>
  );
}

export default TitleProduct;
