import React, { useState, useEffect } from 'react';
import './App.css';

// Navbar component with proper padding
function Navbar() {
  return (
    <nav className="navbar" style={{ padding: '10px 20px' }}>
      <h1>Car Booking </h1>
      <ul className="nav-links" style={{ listStyle: 'none', padding:0, display: 'flex', gap: '300px' }}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Know more</li>
      </ul>
    </nav>
  );
}

// Carousel component
function Carousel() {
  const images = [
    "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcms%2Farticles%2F3201147%2FBMW_i4_front_2022_08_02_T11_57_38_746_Z_5a6697419f.jpg&w=750&q=75",
    "https://toppng.com/uploads/preview/audi-r8-audi-sports-car-black-road-sunlight-11569902113jxltojx78d.jpg",
    "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Reviews/20210630113205_S-class-static.jpg&c=0"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  // Automatically advance the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex]);

  return (
    <div className="carousel">
      <button onClick={prevImage}>&#8249;</button>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      <button onClick={nextImage}>&#8250;</button>
    </div>
  );
}

// Accordion component
function Accordion() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <button onClick={toggleAccordion}>Click here to view offers</button>
      {isOpen && (
        <div className="accordion-content">
          
          <p>Contact - 1234567891</p>
          <p>email us at: sudheesh_carbooking@gmail.com</p>
        </div>
      )}
    </div>
  );
}


function Button() {
  return <button className="custom-button">Click Me</button>;
}


function Card({ title, description, image, alt }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <img src={image} alt={alt} />
      <p>{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Accordion />
      <Button />
      <div className="card-container">
        
        <Card
          title="Audi"
          description="This is Sporty"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP9kflwA5EHjeCxBXwJeZrR3TctfnfwM7A0g&usqp=CAU"
          alt="Audi Car"
        />
        <Card
          title="TATA HARIER"
          description="#DARK"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnaFwk0uK8M8b7qbi7CiKZEo6elBWSexhJFa9mhaMW7bulG6othc47VFkhLLZbE9SGlHk&usqp=CAU"
          alt="TATA HARIER Car"
        />
        <Card
          title="Lamborghini Urus"
          description="The Ultimate Sport SUV"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt9RFu7AaObWQoakQKWJjnOkqZV-gohMHCuiWYY_H-dR5KDWKEAKJqXbTHb8rqWDONQgY&usqp=CAU"
          alt="Lamborghini Urus Car"
        />
      </div>
    </div>
  );
}

export default App;
