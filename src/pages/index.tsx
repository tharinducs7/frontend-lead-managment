/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLeadsList } from '@/store/leads/actions';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const leads = useSelector((state: any) => state.leads);
  const dispatch = useDispatch();
  console.log(leads.leadsList, "leads");
  
    /**
   * Fetch leads list 
   */
  useEffect(() => {
    dispatch(getLeadsList());
  }, [dispatch]);

  return (
    <div className="flex-1">
      <div className="flex flex-wrap h-screen">
        <div className="w-full sm:w-1/2 lg:w-1/5 p-4">
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
            <div className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
              <figure><img src='/assets/images/person-lap.png' alt="Shoes" /></figure>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-4/5 p-4">
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
        </div>
        {/* <div className="w-full sm:w-1/2 lg:w-2/5 p-4">
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
        </div> */}
      </div>
    </div>
  )
}
