import buy from "../../Resources/icons/icons8-buy-48.png";
import chartsales from "../../Resources/icons/chart-sales.png";
import shadowsales from "../../Resources/icons/chart-shadow.png";
function SalesChart() {
  return (
    <section id='SalesChart'>
      <img src={buy} alt='buy' id='buy' />
      <div id='backgroundimgbuy'></div>
      <div>
        <div>Total Sales</div> <span>2,34,888</span>
      </div>
      <span>+1000 Sales Today</span>
      <img src={chartsales} alt='chartsales' id='chartsales' />
      <img src={shadowsales} alt='shadowsales' id='shadowsales' />
    </section>
  );
}

export default SalesChart;
