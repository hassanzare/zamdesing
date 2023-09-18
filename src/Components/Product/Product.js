import TitleProduct from "../TitleProduct/TitleProduct";

import SalesChart from "../Product-Sales Charts/SalesChart";
import SalesAnalytics from "../Product Sales Analytics/SalesAnalytics";
import Navigation from "../Navigation/Navigation";
import ProductChart from "../Product-Sales Charts/ProductChart";
import MonthlyProduct from "../MonthlyProduct/MonthlyProduct";
import TopProduct from "../Top salling product/TopProduct";

function Product() {
  return (
    <div className='Product'>
      <Navigation />
      <TitleProduct />
      <SalesChart />
      <ProductChart />
      <MonthlyProduct />
      <SalesAnalytics />
      <TopProduct />
    </div>
  );
}

export default Product;
