import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import OurProduct from "./OurProduct";
import useAxiosPublic from '../../hooks/useAxiosPublic.js';
import { ProductCardSkeleton } from '../Skeletons/ProductCardSkeleton.jsx';

const ExploreOurProducts = () => {
    const [products, setProducts] = useState([]);
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchProducts = async () => {
            try {
                axiosPublic.get('products/exploreOurProducts')
                .then((res) => {
                    console.log(res.data);
                    setProducts(res.data);
                })
                .catch((error) => {
                    console.log(error);
                })
            } catch (error) {
                console.error('error while fetching explore our products', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [axiosPublic])

    return (
        <div>
            <div className="flex text-[#DB4444] items-center gap-3 md:ml-36 font-semibold pt-20"><div className="bg-[#DB4444] rounded py-5 px-2"></div>Our Products</div>

            <div className="flex items-center justify-between md:mx-36 pb-10">
                <div>
                    <h2 className="text-[32px] font-semibold">Explore Our Products</h2>
                </div>
                <div className="flex gap-2">
                    <FaArrowRightLong className="bg-[#F5F5F5] dark:bg-slate-400 text-4xl p-2.5 rounded-full"/>
                    <FaArrowLeftLong className="bg-[#F5F5F5] dark:bg-slate-400 text-4xl p-2.5 rounded-full"/>
                </div>
            </div>

            <div className="grid md:grid-cols-4 grid-cols-1 md:gap-5 gap-7 mx-6">
                {!loading ?
                    products.map(product => <OurProduct key={product.id} product={product}></OurProduct>) :
                    Array.from({ length: 8 }).map((_, idx) => (
                        <ProductCardSkeleton key={idx}/>
                    ))
                }
            </div>

            <div className="flex justify-center pt-16">
                <button className="text-white bg-[#DB4444] rounded py-3 px-12">View All Products</button>
            </div>

        </div>
    );
};

export default ExploreOurProducts;