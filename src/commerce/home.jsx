
import Data from "./dress"
import Pages from "./source"

let Home =() => {
    const { faq , E } = Data[0]


    return (
        <>
        <section className="bg-[rgba(237,241,255,255)] flex justify-center lg:justify-between px-10 py-2">
        <div className="lg:flex gap-[1rem] text-[1.1rem] hidden lg:block">
           {faq.map((item ,index) => (
            <p key={index}>{item.name}</p>
           ))}
        </div>
        <div className="">
            <a href="#" className="pr-[1rem]"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="pr-[1rem]"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" className="pr-[1rem]"><i className="fa-brands fa-linkedin-in"></i></a>
           <a href="#" className="pr-[1rem]"><i className="fa-brands fa-instagram"></i></a>
           <a href="#" className="pr-[1rem]"><i className="fa-brands fa-youtube"></i></a>
        </div>
        </section>
        <section className="px-3 lg:px-15 py-5 flex justify-between items-center">
           <div className=" lg:flex items-center gap-2 text-5xl capitalize font-bold hidden lg:block">
                <div className="border-1 text-[rgba(220,171,155,255)] border-gray-400 px-3 py-1">
                    <h1>E</h1>
                </div>
                <div className="font-semibold ">
                    <h1>{E}</h1>
                </div>
            </div>
            <div>
                <input type="text" placeholder="Search for products"
                  className="border border-gray-400 px-4 py-1 w-[60%] lg:w-[500px] font-semibold text-[1rem] outline-none"
                />
                <i className="fa-solid fa-magnifying-glass border text-[rgba(220,171,155,255)] border-gray-400 py-2 px-3"></i>
            </div>
           <div className="flex gap-1 lg:ml-25">
                <div className="border-1 flex gap-0.5 items-end border-gray-300 px-4 py-1">
                    <div>
                    <i className="fa-solid fa-heart text-[rgba(220,171,155,255)]"></i> 
                    </div>
                    <div className="text-[13px]">0</div>
                </div>
                <div className="border-1 flex gap-0.5 items-end border-gray-300 px-4 py-1">
                    <div>
                    <i className="fa-solid fa-cart-shopping text-[rgba(220,171,155,255)]"></i> 
                    </div>
                    <div className="text-[13px]">0</div>
                </div>
           </div>
        </section>
        <Pages />
        </>
    )
}

export default Home