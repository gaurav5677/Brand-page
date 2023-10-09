const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>

        <div className="hero-btn">
          <button> Shop Now</button>
          <button className="btn-sec"> Category</button>
        </div>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="shops">
          <p>Also available on</p>

          <div className="icon">
            <img src="/images/flipkart.jpg" alt="flipkart logo" />
            <img src="/images/amazon.jpg" alt="amazon logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoe_image.jpg" alt="" />
      </div>
    </main>
  );
};

export default HeroSection;
