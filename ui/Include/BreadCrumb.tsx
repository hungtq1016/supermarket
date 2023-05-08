import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'

export default function  Breadcrumbs (props:any) {
  const paths = props.paths
  return (
    <section>
      <div className="flex max-w-7xl mx-4 md:mx-auto items-center gap-x-2 text-gray-600 pt-10">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4" viewBox="0 0 20 20" fill="currentColor" >
          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="flex gap-x-1 items-center font-medium">
        <Link href={'/'} className='text-rose-600'>Trang Chủ</Link>
        {paths.map((path:any,index:number) => {
                return (
                  <React.Fragment key={path.name}>
                    <FontAwesomeIcon icon={faChevronRight} className='w-4 h-4'/>
                    <div key={path.name} className="capitalize">
                        { 
                          index==paths.length -1 ? 
                          <span className='text-gray-600'>{path.name}</span> :
                          <Link href={path.name} className='text-gray-600 hover:text-gray-900'>{path.name}</Link>
                        }
                    </div>
                  </React.Fragment>
                );
              })}
      </div>
    </div>
    </section>
  );
};

