'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
const AddressBar = () => {
  const pathname = usePathname();
  const paths = pathname?.split('/').slice(1)
  const fix =(value:string)=>{
    return value.replace(/-/g, ' ')

  }
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
        {pathname ? (
          <>
            {paths ? paths
              .map((segment,index) => {
                return (
                  <React.Fragment key={segment}>
                    <FontAwesomeIcon icon={faChevronRight} className='w-4 h-4'/>
                    <div key={segment} className="capitalize">
                        { 
                          index==paths.length -1 ? 
                          <span className='text-gray-600'>{fix(segment)}</span> :
                          <Link href={`/${segment}`} className='text-gray-600 hover:text-gray-900'>{segment}</Link>
                        }
                    </div>
                  </React.Fragment>
                );
              }):''}
          </>
        ) : null}
      </div>
    </div>
    </section>
  );
};

export default AddressBar;
