import React, { useEffect, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const BestSeller = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/products.json") // Ensure correct path if file is in /public
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    const bestSeller = products.filter((item) => item.status === "best Seller");
    console.log(bestSeller);

    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4'>
            <div className='text-center'>
                <h2 className='title'>Best Seller</h2>
                <p className='text-black/75 capitalize md:w-2/3 mx-auto mb-8'>
                    Lustrous yet understated. The new evening wear collection exclusively offered at the
                    reopened Giorgio Armani boutique in Los Angeles.
                </p>
            </div>
            {/* Best Seller Products Cards */}
            <div className='mb-16'>
                <Swiper
                slidesPerView={4}
                    spaceBetween={10}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true, 

                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                      },
                      1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                      },
                    }}


                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {bestSeller.map((product) => (
                        <SwiperSlide key={product.id}>
                            <Link to={`/shop/${product.id}`}>
                                <img
                                    src={product.image} // Make sure the path is correct
                                    alt={product.title}
                                    className='mx-auto w-full hover:scale-105 transition-all duration-300'
                                />
                            </Link>
                            <div className='mt-4 px-4'>
                                <h4 className='text-base font-semibold mb-2'>{product.title}</h4>
                                <div className='flex justify-between'>
                                    <p className='text-black/50'>{product.category}</p>
                                    <p className='font-semibold'>${product.price}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default BestSeller;
