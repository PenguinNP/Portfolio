import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'

const RecentProjects = () => {
  return (
    <div className='py-20'>
      <h1 className='heading'>
        A small selection of {' '}
        <span className='text-purple'>recent projects</span>
      </h1>
      <div className='flex flex-wrap p-4 gap-16 justify-center items-center'> 
        {projects.map(({id,title,img,iconLists,link,des})=>(
          <div key={id} className='lg:min-h-[32.5rem] h-[25rem] flex justify-center items-center sm:w-96 w-[80vw]'>
            <PinContainer title={title} href={link}>
              <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overhidden h-[20vh] lg:h-[30vh] mb-10'>
                <div className='relative w-full  h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                  <img src='/bg.png' />
                </div>
                <img src={img} className='z-10 absolute bottom-0' />
              </div>
              <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                {title}
              </h1>
              <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                {des}
              </p>
              <div className=''>

              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects