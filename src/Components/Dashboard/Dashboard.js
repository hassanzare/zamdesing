import Analytics from "../Analytics/Analytics";

import Navigation from "../Navigation/Navigation";

import RecentOrders from "../RecentOrders/RecentOrder";

import Topanalytics from "../Top Analytics Card/Topanalytics";

import TopSelling from "../Top Selling Products/TopSelling";

import Report from "../Reports/Reports";

import Title from "../Title/Title";

function DashBoard() {
  return (
    <div className='DashBoard'>
      <Navigation />
      <Topanalytics />
      <RecentOrders />
      <Analytics />
      <TopSelling />
      <Report />
      <Title />
    </div>
  );
}

export default DashBoard;
