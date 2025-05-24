import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Data from "./dress"

let Shirt = () => {
    const {trandy } = Data[0]

    return (
        <section>
            <div className='grid grid-cols-1 lg:grid-cols-4 px-4 lg:px-15 gap-7 '>
                {trandy.map((item , index) => (
                    <div key={index} className='border  border-gray-300'> 
                        <div className='overflow-hidden flex justify-center'>
                            <img src={item.image} alt={item.view} className='baby h-[250px] object-contain' />
                        </div>
                        <div className='border-t border-b border-gray-300 text-center capitalize font-semibold py-5'>
                            <p>{item.color}</p>
                           <div className='flex pt-2 justify-center gap-2'>
                            <div>
                                 <h3>{item.price}</h3>
                            </div>
                            <div className='text-gray-500'>
                                <strike>
                                     <h3 >{item.price}</h3>
                                </strike>
                            </div>
                           </div>
                        </div>
                        <div className='flex justify-between px-3 py-2'>
                        <div className='flex gap-1.5'>
                            <div className='text-[rgba(209,156,151,255)]'>
                                <FontAwesomeIcon icon={item.icon1}/>
                            </div>
                            <div className='capitalize shirt'>
                                <p>{item.view}</p>
                            </div>
                            </div>
                        <div className='flex gap-1.5'>
                            <div className='text-[rgba(209,156,151,255)]'>
                                <FontAwesomeIcon icon={item.icon2}  />
                            </div>
                            <div className='capitalize shirt'>
                                <p>{item.cart}</p>
                            </div>
                        </div>
                        </div>
                    </div>

                ))}
            </div>
        </section>
    )
}

export default Shirt