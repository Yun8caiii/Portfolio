import React from 'react'
import './Works.css'
import Portfolio1 from '../../assets/portfolio-1.jpg';
import Portfolio2 from '../../assets/portfolio-2.jpg';
import Portfolio3 from '../../assets/portfolio-3.jpg';
import Portfolio4 from '../../assets/portfolio-4.jpg';
import Portfolio5 from '../../assets/portfolio-5.jpg';
import Portfolio6 from '../../assets/portfolio-6.jpg';

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Porfolio</h2>
        <span className='workDesc'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence</span>
        <div className='workImgs'>
            <img src={Portfolio1} alt="" className='workImg' />
            <img src={Portfolio2} alt="" className='workImg' />
            <img src={Portfolio3} alt="" className='workImg' />
            <img src={Portfolio4} alt="" className='workImg' />
            <img src={Portfolio5} alt="" className='workImg' />
            <img src={Portfolio6} alt="" className='workImg' />
        </div>
        <button className='workBtn'> See More</button>
    </section>
  )
}

export default Works