'use client';

import React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
const AddressBar = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <section>
      <div className="flex max-w-7xl mx-4 md:mx-auto items-center gap-x-2 text-gray-500 pt-10">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="flex gap-x-1 font-medium">
        <div>
          <span className="px-2 text-gray-500">Trang Chủ</span>
        </div>
        {pathname ? (
          <>
            <span className="text-gray-900 ">/</span>
            {pathname
              .split('/')
              .slice(1)
              .map((segment) => {
                return (
                  <React.Fragment key={segment}>
                    <span>
                      <span
                        key={segment}
                        className="text-gray-900"
                      >
                        {segment}
                      </span>
                    </span>

                    <span className="text-gray-600">/</span>
                  </React.Fragment>
                );
              })}
          </>
        ) : null}
        {/* {searchParams.toString().length !== 0 ? (
          <div className="px-2 text-gray-500">
            <span>?</span>
            {Array.from(searchParams.entries()).map(([key, value], index) => {
              return (
                <React.Fragment key={key}>
                  {index !== 0 ? <span>&</span> : null}
                  <span className="px-2">
                    <span className="text-gray-100">{key}</span>
                    <span>=</span>
                    <span className="text-gray-100">{value}</span>
                  </span>
                </React.Fragment>
              );
            })}
          </div>
        ) : null} */}
      </div>
    </div>
    </section>
  );
};

export default AddressBar;
