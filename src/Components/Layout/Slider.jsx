import PropTypes from "prop-types";

const Slider = ({ slide }) => {
    // console.log(Object.keys(slide).join(','));
  const { name,photo} = slide;
  return (
    <div className="card grid justify-center items-center">
      <img className="h-[70vh] md:w-[700px] m-auto " src={photo} alt="product image" />
      <h2 className="text-center text-xl lg:text-3xl font-semibold text-pink-500 mt-2">Great news! Enjoy <span className="text-5xl">10%</span> off on <span className="text-4xl">{name}</span> for a limited time. Do not miss out on this fantastic deal!</h2>
      
    </div>
  );
};

Slider.propTypes = {
  slide: PropTypes.object,
};

export default Slider;