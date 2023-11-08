import React, { useEffect } from 'react'



function success() {
  useEffect(() => {
    
    document.body.classList.add('disable-scrolling');

    return () => {
      document.body.classList.remove('disable-scrolling');
    };
  }, []);

  return (
    <div className='flex flex-col h-screen'>
      <div className='success-img__container'>
        <img className='absolute -top-[180px]' src="\assets\successPage\Acne_Studios_SS24_Menswear_3.jpg" alt="" />
      </div>
       
    </div>
  )
}

export default success