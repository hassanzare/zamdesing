import Menu from "../../Resources/icons/Menu.png";
import piechart from "../../Resources/icons/pie chart.png";
import vector from "../../Resources/icons/Vector....png";
import Ellipse from "../../Resources/icons/Ellipse 187.png";
function SalesAnalytics() {
  return (
    <div id='SalesAnalytics'>
      <span>Product Sales Analytics</span>
      <img src={Menu} alt='Menu' id='Menu' />
      <img src={piechart} alt='piechart' id='piechart' />
      <img src={vector} alt='vector' id='sales-vector' />
      <img src={Ellipse} alt='Ellipse' id='Ellipse' />

      <div id='guide-sales'>
        <div>
          <div id='blue-sales'></div>
          <span>Total Sales</span>
        </div>
        <div>
          <div id='yellow-sales'></div>
          <span>Total Order</span>
        </div>
        <div>
          <div id='red-sales'></div>
          <span>Order Cancel</span>
        </div>
      </div>
    </div>
  );
}

export default SalesAnalytics;
