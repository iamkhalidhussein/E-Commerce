import { Link } from "react-router-dom";
import useHandleCreatePayment from "../../hooks/useHandleCreatePayment";

const BankOrMFS = () => {
    useHandleCreatePayment();

    return (
        <div className="py-20">
            <div className="border dark:border-white md:w-2/5 md:mx-auto mx-2 pt-5 pb-5 rounded-2xl px-10">
                <img 
                    className="w-44 mx-auto" 
                    src="https://i.postimg.cc/PxYP4KWc/payment-failed.avif" 
                    alt="#" 
                />
                <h3 className="text-center text-[#121212] dark:text-white poppins font-medium text-[30px]">Your payment is processing</h3>
                <h2 className="text-[17px] font-medium text-gray-500 dark:text-white text-center">Please wait for some time...</h2>
                <Link 
                    to="/checkout" 
                    className="flex justify-center mt-14 mb-5"
                >
                    <button className="bg-blue-400 text-white py-3 text-xl rounded w-1/2">Processing...</button>
                </Link>
            </div>
        </div>
    );
};

export default BankOrMFS;
