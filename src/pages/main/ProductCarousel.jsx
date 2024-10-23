import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: '[잇츄] 오리지널 S 43개입 (4종) 강아지 덴탈껌 대용량 간식 개껌',
    href: '#',
    price: '45,600',
    image: 'https://static.fitpetcdn.com/prod/images/product/1000031556/S_43%EA%B0%9C%EC%9E%85_xmrari_PRODUCT_LIST.png',
  },
  {
    id: 2,
    name: '[잇츄] 오리지널 M 버라이어티팩 (48개입) 강아지 덴탈껌 대용량 간식 개껌',
    href: '#',
    price: '58,900',
    image:
      'https://static.fitpetcdn.com/prod/images/product/1000035685/%EC%98%A4%EB%A6%AC%EC%A7%80%EB%84%90_%EB%B2%84%EB%9D%BC%EC%9D%B4%EC%96%B4%ED%8B%B0%ED%8C%A9_M_ddohlm_PRODUCT_LIST.png',
  },
  {
    id: 3,
    name: '[3개 세트] 인섹트업 미니바이트 스킨',
    href: '#',
    price: '14,900',
    image: 'https://static.fitpetcdn.com/prod/images/product/1000036174/4967_2_fqdxjn_PRODUCT_LIST.png',
  },
  {
    id: 4,
    name: '[플라고] 벌집덴탈껌 스킨앤코트',
    href: '#',
    price: '9,900',
    image: 'https://static.fitpetcdn.com/prod/images/product/1000033990/%EC%8A%A4%ED%82%A8%EC%95%A4%EC%BD%94%ED%8A%B8_imolwv.jpg',
  },
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-lg mx-auto mt-3">
      {/* Carousel */}
      <div className="relative flex justify-between items-center">
        {/* Previous Button */}
        <button
          onClick={handlePrevClick}
          className="absolute left-0 z-10 p-2 w-12 h-12 bg-divider/50 hover:bg-paleblue rounded-full"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1" fill="none" viewBox="0 0 24 24" stroke="gray" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="overflow-hidden w-full h-full">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {products.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-full flex justify-center">
                <div className="w-64 justify-center">
                  <img src={product.image} alt={product.name} className="w-64 object-cover rounded-lg" />
                  <div className="flex justify-center items-center border border-divider w-full rounded-lg mt-2 p-1 text-sm hover:bg-divider/50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5 mr-1">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                    담기
                  </div>
                  <div className="mt-2">
                    <p>{product.name}</p>
                    <h3 className="text-lg font-semibold">{product.price} 개</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNextClick}
          className="absolute right-0 z-10 p-2 w-12 h-12 bg-divider/50 hover:bg-paleblue rounded-full"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1" fill="none" viewBox="0 0 24 24" stroke="gray" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
