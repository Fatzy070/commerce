import Data from "./dress"
import { useState } from "react";
import './home.css'
import caro from '../assets/carousel-1 (3).jpeg'
import caro1 from '../assets/carousel-2 (1).jpeg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let Pages = () => {
    const {shirt , cate , dres , men , shop} = Data[0];
    const [showText , setShowtext] = useState(false);
    const [showMen , setShowMen] = useState(false)

    const handleclick = () => {
        setShowtext(!showText)
        setShowMen(false)
    }

    const handleMenclick = () => {
        setShowMen(!showMen)
    };

   
        const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows:true
        };

    return (
        <div className="flex gap-7 lg:pl-[3.5rem] border-t-1 border-gray-100 ">
        <section className="w-[250px] capitalize font-semibold hidden lg:block ">
            <div onClick={handleclick} className="flex justify-between  py-5 bg-[rgba(209,156,151,255)] px-5  w-[100%]">
                <div>
                    <h2>{cate}</h2>
                </div>
                <div>
                    <i className={`fa-solid fa-chevron-down ${showText  ? "rotate-180" : " "} `}></i>
                </div>
            </div>
          {showText && (
              <div>
                <div className="relative px-5 cursor-pointer w-[100%] border py-2 border-gray-100">
                    <div onClick={handleMenclick} className="shirt flex justify-between items-center">
                         <p >{dres}</p>
                         <i className= {` fa-solid fa-chevron-down ${showMen ? "rotate-180" : " "}` }></i>
                    </div>
                       {showMen && ( 
                            <div className="absolute left-0 w-[100%]  py-3 font-semibold bg-[rgba(237,241,255,255)] ">
                           {men.map((item , index) => (
                               <p key={index} className="men px-4 py-1">{item.name}</p>
                           ))}
                        </div>
                       )}
                    
                </div>
                <div>
                    {shirt.map((item , index) => (
                        <p key={index} className="shirt border-1 border-solid
                          border-gray-100  w-[100%]  px-4 py-2">{item.name}</p>
                    ))}
                </div>
            </div>
          )}
        </section>
        <section className="">
        {/* <i className="fa-solid fa-bars hidden"></i>  */}
           <div className="flex py-3 justify-between">
                <div>
                     <ul className="flex capitalize gap-5  text-[1.1rem]">
                        {shop.map((item , index) => (
                          <li key={index} className={`shirt ${index === 0 ? "text-[rgba(209,156,151,255)]" : ""}`}>{item.name}</li>
                     ))

                }
                </ul>
                </div>
                <div className="capitalize flex gap-4">
                    <div className="shirt">
                        <p>login</p>
                    </div>
                    <div className="shirt">
                        <p>register</p>
                    </div>
                </div>
           </div>
        <div  className="w-full max-w-[850px]">
        <Slider {...settings}>
        <div className="text-center relative text-white h-[430px]">
                 <img src={caro} alt={men} className="w-full h-full"  />
                 <div className=" absolute left-[5%] lg:left-[25%] top-[50%]">
                    <h3 className="text-2xl lg:text-3xl font-semibold uppercase">10% off your first order</h3>
                    <h2 className="py-[1.5rem] capitalize text-4xl lg:text-6xl font-bold">Fashionable Dress</h2>
                    <div className="flex justify-center">
                    <div className=" capitalize w-[120px] h-[40px] flex justify-center items-center font-semibold bg-white text-black">
                        <p>shop now</p>
                    </div>
                    </div>
                 </div>
            </div>
            <div className="text-center relative text-white h-[430px]">
                 <img src={caro1} alt={men} className="w-full h-full" />
                 <div className=" absolute left-[5%] lg:left-[25%] top-[50%]">
                    <h3 className=" text-2xl lg:text-3xl font-semibold uppercase">10% off your first order</h3>
                    <h2 className="py-[1.5rem] capitalize text-4xl lg:text-6xl font-bold">reasonable price</h2>
                    <div className="flex justify-center">
                    <div className=" capitalize w-[120px] h-[40px] flex justify-center items-center font-semibold bg-white text-black">
                        <p>shop now</p>
                    </div>
                    </div>
                 </div>
            </div>

        </Slider>
        </div>
        </section>
        </div>
    )
} 
export default Pages