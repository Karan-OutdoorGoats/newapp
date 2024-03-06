import React from 'react'

const saleData = [
    "Free Shipping",
    "|",
    "Cash on Delivery",
    "|",
    "Easy Returns",
    "|",
    "10% Discount On All Prepaid Orders",
]

const SalesBanner = () => {
  return (
    <div className='sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-2 sm:h-[30px] sales_banner'>
        {
            saleData.map((item)=> {
                return <h2 className='text-primaryColor text-13 font-OG-Bold'>{item}</h2>
            })
        }
    </div>
  )
}

export default SalesBanner