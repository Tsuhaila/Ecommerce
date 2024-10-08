
import React from 'react'
import { Link } from 'react-router-dom';
import home from '../Assets/homeimage.png';
import { FeaturedProducts } from '../Components/FeaturedProducts';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="container mx-auto p-6 mt-0">
        <div className="flex flex-col md:flex-row items-center">
          <div className="relative z-10 md:p-8 p-0 mt-0 ml-16">
            <h1 className="md:text-7xl text-4xl font-bold text-black mb-4 ">LUXURY <br></br>FURNITURE</h1>
            <p className="text-lg text-black mb-8"> Discover our range of high-end furniture for your home.
            </p>

            <div>

              <Link to={'/products'}> <button className=" text-black py-2 px-4 rounded-lg border-2 border-black hover:bg-black hover:text-white transition duration-300">
                GO TO SHOP
              </button></Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img src={home} alt="Furniture" className="w-full rounded-lg" />
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>

      <section>
        <FeaturedProducts />
      </section>

    </div>
  );
};

export default Home


