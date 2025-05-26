import Data from "./dress"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pay from '../assets/payments.png'
import './home.css'

let Footer = () => {
    const { quick , lorem1 , links , E , newa , right , des , letter , site , fatzy} = Data[0]
    return (
        <footer className=" bg-[rgba(237,241,255,255)] ">
            <section className="px-10 lg:px-16 pt-[4rem] pb-[3rem] flex flex-wrap justify-center lg:justify-between">
                <div className=" w-[350px]">
                    <div className=" flex items-center gap-2 text-5xl capitalize font-bold">
                        <div className="border-1 text-[rgba(220,171,155,255)] border-white px-3 py-1">
                            <h1>E</h1>
                        </div>
                        <div className="font-semibold ">
                            <h1>{E}</h1>
                        </div>
                    </div>
                    <p className="py-5 text-[1rem] leading-5 font-mono font-normal">{lorem1}</p>
                    <div>
                        {newa.map((item , key) => (
                           <div className="flex  gap-2.5 items-center pb-1.5">
                            <div className="text-[rgba(220,171,155,255)]">
                                <FontAwesomeIcon icon={item.icon} />
                            </div>
                           <div className="font-normal">
                             <p key={key}>{item.name}</p>
                           </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl capitalize font-bold">{links}</h1>
                    <div className="pt-5">
                        {quick.map((item , index) => (
                            <div key={index} className="check flex gap-2"> 
                                <div >
                                    <FontAwesomeIcon icon={item.icon}  className="text-[15px]" />
                                </div>
                                <div className="capitalize font-medium">
                                    <p className="pb-2">{item.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
               <div className="w-full flex justify-center lg:w-auto">
                    <div>
                        <h1 className="text-2xl capitalize font-bold">{links}</h1>
                    <div className="pt-5">
                        {quick.map((item , index) => (
                            <div key={index} className="check flex gap-2"> 
                                <div >
                                    <FontAwesomeIcon icon={item.icon}  className="text-[15px]" />
                                </div>
                                <div className="capitalize font-medium">
                                    <p className="pb-2">{item.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
                <div className="w-full lg:w-auto ">
                    <h1 className="text-center lg:text-start text-2xl capitalize font-bold" >{letter}</h1>
                    <form action="" className="pt-5">
                        <input type="text" placeholder="Your Name" className="bg-white w-[100%] h-[50px] pl-2.5 mb-4" /> <br/>
                        <input type="text" placeholder="Your Email" className="bg-white w-[100%] h-[50px] pl-2.5 mb-4"  /> <br/>
                        <button type="submit" className="sub capitalize font-normal w-full h-[50px] bg-[rgba(209,156,151,255)]">subscribe now</button>
                    </form>
                </div>
            </section>
            <hr className="text-white" />
            <div className="flex justify-center lg:justify-between px-3 lg:px-16 py-5 flex-wrap">
                <div className="capitalize mb-5 lg:mb-0 text-center">
                    <p>&copy; <b className="line font-semibold text-[1.2rem]">{site}</b> <span>{right}</span> <span className="line font-semibold">{fatzy}</span> {des} <span className="font-semibold line text-[rgba(209,156,151,255)]">{fatzy}</span></p>
                </div>
                <div>
                    <img src={pay} alt={lorem1} />
                </div>
            </div>
        </footer>
    )
}
export default Footer