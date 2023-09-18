import image from "../../Resources/icons/image.png";
import backBtn from "../../Resources/icons/back btn.png";
import download from "../../Resources/icons/download.png";
import tick from "../../Resources/icons/Tick.png";
function NewProduct() {
  return (
    <div id='NewProduct'>
      <div id='context-title'>
        <img src={backBtn} alt='backBtn' id='backBtn' />
        <span>Add a New Product</span>
      </div>
      <img src={image} alt='profile' id='profile-image' />

      <div id='input-name'>
        <span>Pdoduct Name</span>
        <input />
      </div>
      <div id='input-brand'>
        <span>Brand</span>
        <input />
      </div>
      <div id='input-price'>
        <span>Price</span>
        <input />
      </div>
      <div id='Negotiable'>
        <input type='checkbox' id='tick' />
        <label for='tick' />
        <span>Negotiable</span>
      </div>
      <div id='description'>
        <span>Descriptions</span>
        <div>
          <div>
            This the New creation Of apple This the New creation Of apple This
            the New creation Of apple This the New creation Of apple.
          </div>
        </div>
      </div>

      <button>
        <img src={download} alt='download' />
        Save Product
      </button>
    </div>
  );
}

export default NewProduct;
