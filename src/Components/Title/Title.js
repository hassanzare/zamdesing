import arrowD from "../../Resources/icons/arrowdown.png";
function Title() {
  return (
    <div id='Title'>
      <span id='dashboard'>Dashboard</span>
      <div id='date'>
        <div>
          <div>10-06-2021</div> <img src={arrowD} alt='arrowD' />
        </div>
        <div>
          <div>10-10-2021</div> <img src={arrowD} alt='arrowD' />
        </div>
      </div>
    </div>
  );
}

export default Title;
