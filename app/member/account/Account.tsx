'use client'

import Image from "next/image";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tab from './Tab';
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/src/app/loading";

library.add(fas)

export default function Account() {
    const [user,setUser] = useState<any>({ email: "", name: "", address: "" })
    const [loading,setLoading] = useState<boolean>(true)
    useEffect(()=>{
      axios.get('/api/current').then(response=>{
        setUser(response.data),
        setLoading(false)
      })
    },[])
    return ( 
      <>
        {
          loading ?
            <Loading />
            :
            <div className="space-y-3">
              <div className="relative">
                <Image src="/images/demo-banner.png" alt="demo-banner" className="w-full mx-auto object-cover max-h-52" width={1080} height={200} />
                <div className="absolute top-1/2 -translate-y-1/2 left-8">
                  <div className="w-40 h-40 bg-white rounded-full">
                    <Image src={'/images/avatar-demo.jpg'} width={160} height={160} alt="demo avatar" className="w-full h-full object-cover rounded-full border-8 border-gray-50" />
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-x-3">
                  <div className="text-2xl font-medium">{user.name}</div>
                  <div className="flex items-start text-gray-600 gap-x-1 text-sm">
                    <FontAwesomeIcon icon={'location-dot'} className="w-5 h-5" />
                    <span>{user?.address}</span>
                  </div>
                </div>
                <div className="text-sky-600">{user.email}</div>
                <div className="text-gray-600">(+84) 0865123456</div>
                <section className="py-5">
                  <Tab />
                </section>
              </div>
            </div>
        }
      </>
     );
}
