import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Data from "./dress"
let Cloth = () => {
    const {support , } =Data[0]

    return( 
    <div>
        <div className='flex flex-wrap lg:flex-nowrap gap-7 py-[5rem] px-20 '>
           {support.map((item, index) => (
         <section key={index} className='flex px-4 gap-3 border border-gray-200 w-[280px] justify-center items-center h-[100px]'>
             <div>
                <FontAwesomeIcon icon={item.icon} className='text-[2.5rem] text-[rgba(220,171,155,255)]' />
             </div>
              <div>
                <p className='font-semibold capitalize text-[1.5rem]'>{item.name}</p>
              </div>
  </section>
))}
        </div>
    </div>
    )
}

export default Cloth