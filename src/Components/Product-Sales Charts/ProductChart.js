import Box from "../../Resources/icons/box.png";
import chartproduct from "../../Resources/icons/chart-product.png";
import shadowproduct from "../../Resources/icons/shadow-product.png";
function ProductChart() {
  return (
    <section id='totalProduct'>
      <img src={Box} alt='box' id='box' />
      <div id='backgroundimg'></div>
      <div>
        <div>Total Product</div> <span>5,00,874</span>
      </div>
      <span>+1400 New Addedy</span>
      <img src={chartproduct} alt='chartproduct' id='chartproduct' />
      <img src={shadowproduct} alt='shadowproduct' id='shadowproduct' />
    </section>
  );
}

export default ProductChart;
