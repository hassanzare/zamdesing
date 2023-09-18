import Chart from "../../Resources/icons/Donought chart.png";
import Menu from "../../Resources/icons/Menu.png";

function Analytics() {
  return (
    <div className='analytics'>
      <span>Analytics</span>

      <img src={Menu} alt='Menu' />

      <div className='Donoughtchart'>
        <img src={Chart} alt='chart' />
        <div className='percent'>
          <span>80%</span>
          <text>Transactions</text>
        </div>
      </div>
      <div className='guide'>
        <div>
          <div id='blue'></div>
          <span>Sale</span>
        </div>
        <div>
          <div id='yellow'></div>
          <span>Distribute</span>
        </div>
        <div>
          <div id='red'></div>
          <span>Return</span>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
