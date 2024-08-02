'use client'
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./Gradientbg";
import GlobeDemo from '../ui/GridGlobe'
import { useState } from "react";
import animationData from '@/data/confetti.json'
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {

  

  return (
    <div
      className={cn(
        "grid md:auto-rows-[15rem] lg:grid-rows-4  grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img ,
  imgClassName,
  titleClassName,
  spareImg
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?:number;
  img ?: string,
  imgClassName ?: string,
  titleClassName ?: string,
  spareImg ?: string
}) => {
  const [copied , setCopied] = useState(false);

    const handleCopy=() =>{
      navigator.clipboard.writeText('sagar123lamichhane@gmail.com');
      setCopied(true);
    }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none bg-white   justify-between flex flex-col border border-white/[0.1] ",
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 26%, rgba(0,212,255,1) 100%)'
      }}
    >
      <div className={`${id===6} && 'flex justify-center h-full` }>
        <div className="w-full h-full absolute">
          {
            img && (
              <img src={img} alt={img} className={cn(imgClassName, 'object-cover, object-center')} />
            )
          }
        </div>
        <div className={`absolute right-0 -botton-5 ${id===5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img 
            src={spareImg} alt={spareImg} className='object-cover w-full h-full object-center' />
          )}
        </div>
        {id===6 &&(
          <BackgroundGradientAnimation className="absolute z-50 flex items-center justify-center text-white font-bold"></BackgroundGradientAnimation>
        )}
        <div className={cn(
          titleClassName,'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 '
        )}>
            <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
              {description}
            </div>
            <div className="font-sans font-bold text-lg  dark:text-neutral-200 lg:text-3xl max-w-96 z-10">
             {title}
             </div>
        
        { id===2 && <GlobeDemo />}
        {id===3 && (
          <div className="flex gap-1 lg:gap-3 w-fit absolute -right-3 lg:-right-2">
            <div className="flex flex-col gap-3 lg:gap-5">
              {['Reacts.js', 'Next.js' , 'TypeScript'].map((item)=>(
                <span key={item} className="py-1 lg:py-2 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]">
                    {item}
                </span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
            </div>
          </div>
        )}
          {id===6 && (
              <div className="mt-5 relative">
                  <div className={`absolute -bottom-5 right-0`}>
                    <Lottie options={{
                      loop: copied,
                      autoplay : copied,
                      animationData : animationData,
                      rendererSettings: {
                        preserveAspectRatio : 'xMidYMid slice'
                      }
                    }} />
                  </div>
                  <MagicButton title={ copied ? 'Email Copied' : 'Copy My Email'} 
                  icon={<IoCopyOutline/>}
                  position="left"
                  otherClasses="!bg-[#161a31]"
                  handleClick={handleCopy} />
              </div>
          )} 
      </div>
      </div>
    </div>
  );
};
