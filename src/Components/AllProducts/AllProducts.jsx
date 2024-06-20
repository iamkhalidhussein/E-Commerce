import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";


const AllProducts = () => {
    return (
        <div className="pt-28">
            <div className="flex text-[#DB4444] items-center gap-3 ml-36 font-semibold"><div className="bg-[#DB4444] rounded py-5 px-2"></div>Todays</div>
            <div className="flex items-center justify-between mx-36">
                <div className="flex items-center gap-20">
                    <h2 className="text-[36px] font-semibold">Flash Sales</h2>
                    <div className="flex gap-6">
                        <div>
                            <p className="text-[12px] font-medium text-[#000]">Days</p>
                            <span className="text-[32px] font-bold text-[#000]">03</span>
                        </div>
                        <div className="text-4xl text-[#DB4444] pt-4">:</div>
                        <div>
                            <p className="text-[12px] font-medium text-[#000]">Hours</p>
                            <span className="text-[32px] font-bold text-[#000]">23</span>
                        </div>
                        <div className="text-4xl text-[#DB4444] pt-4">:</div>
                        <div>
                            <p className="text-[12px] font-medium text-[#000]">Munites</p>
                            <span className="text-[32px] font-bold text-[#000]">19</span>
                        </div>
                        <div className="text-4xl text-[#DB4444] pt-4">:</div>
                        <div>
                            <p className="text-[12px] font-medium text-[#000]">Seconds</p>
                            <span className="text-[32px] font-bold text-[#000]">56</span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2">
                    <FaArrowRightLong className="bg-[#F5F5F5] text-4xl p-2.5 rounded-full"/>
                    <FaArrowLeftLong className="bg-[#F5F5F5] text-4xl p-2.5 rounded-full"/>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;