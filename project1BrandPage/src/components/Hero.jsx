

const Hero = () => {
  return (
    <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Category</button>
            </div>
            <div className="shopping">
                <p>Also available on</p>
                <div className="brand-icons">
                    <img src=".//public/Images/amazon.png" alt="" />
                    <img src=".//public/Images/flipkart.png" alt="" />
                </div>
            </div>
        </div>
        <div className="hero-image">
            <img src=".//public/Images/hero-image.png" width='350px' height="350px" alt="hero-image" />
        </div>
    </main>
  )
}

export default Hero
