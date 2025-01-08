import React from 'react'
import supermarket from '../assets/supermarket.png'
import netflixclone from '../assets/netflixclone.png'
import gym from '../assets/gym.jpg'
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'Super Market Billing System',
          desc: 'Billing in a supermarket involves scanning items, calculating the total cost, and generating an invoice for the customer.This process often includes applying discounts, managing payment .',
          image: supermarket,
          github: "https://github.com/Nikilreddy726/Netflixclone.git"
        },
        {
          title: 'Netflix Clone',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: netflixclone,
          live: "https://ottplatform317.netlify.app/",
          github: "https://github.com/Nikilreddy726/Netflix-clone.git"
        },
        {
          title: 'Pro-fit',
          desc: 'We collab with various experienced trainers and gym professionals to deliver a seamless and safe environment to improve yourself.',
          image: gym,
          live: "https://profit21.my.canva.site/",
          
        },
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4 ml-5'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 '>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
