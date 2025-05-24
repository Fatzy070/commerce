import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Shirt from './shirt';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Data from "./dress"
let Cloth = () => {
    const {support , baby , spring , springs , lorem , vendor} =Data[0]
     const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4, // default for large screens
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024, // screens smaller than 1024px (lg and down)
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768, // screens smaller than 768px (md and down)
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 640, // screens smaller than 640px (sm and down)
      settings: {
        slidesToShow: 2,
      }
    }
  ]
};


    return( 
    <div>
        <div className='flex flex-wrap lg:flex-nowrap gap-7 py-[5rem] justify-center lg:px-20 '>
           {support.map((item, index) => (
         <section key={index} className='flex px-4 gap-3 border border-gray-200 w-[85%] lg:w-[280px] justify-center items-center h-[100px]'>
             <div>
                <FontAwesomeIcon icon={item.icon} className='text-[2.5rem] text-[rgba(220,171,155,255)]' />
             </div>
              <div>
                <p className='font-semibold capitalize text-[1.5rem]'>{item.name}</p>
              </div>
         </section>
        ))}
        </div>
        <div>
            <section className='grid grid-cols-1 lg:grid-cols-3 px-4 lg:px-15 gap-8'>
                {baby.map((item , key) => (
                    <div key={key} className='border border-gray-200'>
                        <p className=' text-gray-500 text-end pr-5 py-3 bg-white capitalize text-[1.2rem] '>{item.name}</p>
                        <div className='flex justify-center overflow-hidden'>
                            <img src={item.image} alt={item.name} className='baby object-contain h-[250px]' />
                        </div>
                        <h1 className=' bg-white py-3  text-[1.3rem] font-semibold pl-5'>{item.men}</h1>
                    </div>
                ))}
            </section>
        </div>
        <div className='flex flex-wrap gap-9 px-3 my-[4rem] justify-center'>
                <div className='bg-[rgba(237,241,255,255)]  flex lg:pr-11 relative h-[210px] lg:h-[250px] w-[100%] lg:w-[45%]'>
                    <div>
                        <img src={spring.image} alt={spring.discount} className='absolute lg:relative h-[250px] max-h-full object-cover' />
                    </div>
                    <div className='z-10 w-full justify-center lg:w-[350px]'>
                       <section className=''>
                             <p className='pt-5 text-center text-[rgba(220,171,155,255)] lg:pt-10 uppercase lg:text-end text-[1.5rem] font-semibold'>{spring.discount}</p>
                            <h1 className='text-center lg:text-end text-[1.8rem] lg:text-[2.2rem] lg:py-3 font-semibold font-serif'>{spring.collectionName}</h1>
                            <div className='flex justify-center lg:justify-end mt-3'>
                            <div className='border shop border-[rgba(220,171,155,255)] text-[rgba(220,171,155,255)] w-[120px] flex justify-center items-center py-2'>
                            <p>{spring.shopText}</p>
                             </div>
                            </div>
                       </section>
                    </div>
                </div>
                <div className='bg-[rgba(237,241,255,255)] relative flex h-[210px] lg:h-[250px] w-[100%] lg:w-[45%] pl-3 '>
                    <div className='z-10 w-full lg:pl-5 lg:w-[350px] justify-center'>
                        <section>
                            <p className='text-[rgba(220,171,155,255)] pt-5 text-center lg:text-start lg:pt-10 uppercase  text-[1.5rem] font-semibold'>{spring.discount}</p>
                        <h1  className='text-center lg:text-start text-[1.8rem] lg:text-[2.1rem] py-1 lg:py-3 font-semibold font-serif'>{springs.collectionName}</h1>
                       <div className='flex justify-center lg:justify-start  mt-3'>
                            <div className='border shop border-[rgba(220,171,155,255)] text-[rgba(220,171,155,255)] w-[120px] flex justify-center items-center py-2'>
                            <p>{spring.shopText}</p>
                        </div>
                        </div>
                        </section>
                    </div>
                    <div>
                        <img src={springs.image} alt={spring.discount} className='h-[250px] 
                        absolute max-h-full right-0 lg:relative object-cover' />
                    </div>
                </div>
        </div>
        <div class="flex items-center justify-center my-8">
             <div class="w-16 lg:w-20 border-t-2 border-black mx-4"></div>
            <h2 class="text-[1.2rem] lg:text-4xl font-bold">Trandy Products</h2>
             <div class="w-16 lg:w-20 border-t-2 border-black mx-4"></div>
        </div>
        <Shirt />
        <div className=' bg-[rgba(237,241,255,255)] my-[3rem] py-15 flex justify-center'>
            <section className=' lg:w-[45%]'>
                <div class="flex items-center justify-center my-8">
                <div class="w-16 lg:w-13 border-t-2 border-black mx-3 lg:mx-4"></div>
                <h2 class="text-[1.4rem] lg:text-4xl font-bold text-center capitalize">stay updated</h2>
                 <div class="w-16 lg:w-13 border-t-2 border-black mx-3 lg:mx-4"></div>
                </div>
                <p className='text-[1.1rem] text-center font-normal text-gray-500'>{lorem}</p>
              <div className="flex justify-center lg:block">
                 <form action="" className='pt-6'>
                    <input type="text" placeholder='Email Goes here' className=' pl-2 bg-white lg:w-[70%] h-[50px]' />
                    <button type='submit' className='sub h-[50px] bg-[rgba(209,156,151,255)] px-3 lg:w-[150px] capitalize font-semibold'>subscribe</button>
                  </form>
              </div>
            </section>
        </div>
        <div class="flex items-center justify-center my-8">
             <div class="w-16 lg:w-20 border-t-2 border-black mx-4"></div>
            <h2 class="text-[1.2rem] lg:text-4xl font-bold capitalize">just arrived</h2>
             <div class="w-16 lg:w-20 border-t-2 border-black mx-4"></div>
        </div>
        <Shirt />
        <div className='mx-10 my-10'>
            <Slider {...settings}>
                    {vendor.map((item , key) => (
                    <div key={key} className="px-2"> 
                       <div className="border border-gray-300 w-[200px] m-auto">
                          <img src={item.image} alt={item.id}  />
                       </div>
                    </div>
                ))}
            </Slider> 
            </div>
    </div>
    )
}

export default Cloth