/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLeadsList } from '@/store/leads/actions';
import LeadCard from '@/components/LeadCard';
import { LeadInterface } from '@/shared/interfaces/leads.interface';
import LeadInfo from '@/components/LeadInfo';

export default function Home() {
  const leads = useSelector((state: any) => state.leads);
  const dispatch = useDispatch();
  const [showSidebar, setShowSidebar] = useState(false);
  const [cuurentLead, setCurrentLead] = useState<LeadInterface | undefined>();
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);

  const toggleSidebar = (lead: LeadInterface) => {
    if (lead.id === cuurentLead?.id) {
      setShowSidebar(false)
      setCurrentLead(undefined)
    } else {
      setShowSidebar(true);
      setCurrentLead(lead)
      setSelectedCustomerId(lead.id);
      console.log("hi", lead);
      
    }
  };

/**
 * Fetch leads list 
 */
  useEffect(() => {
    dispatch(getLeadsList());
  }, [dispatch]);

  return (
    <div className="flex h-screen">
      <div className="flex-1">
        <div className="px-4 py-8">
          <div className="flex flex-wrap">
            {leads?.leadsList.map((lead: LeadInterface, key: number) => (
              <LeadCard key={key} lead={lead} onClickFunc={toggleSidebar} />
            ))}
          </div>
        </div>
      </div>
      <input type="checkbox" id="my-modal" className="modal-toggle" checked={showSidebar} />
      <div className="modal">
        {cuurentLead && (
          <LeadInfo lead={cuurentLead} setShowSidebar={setShowSidebar} />
        )}
      </div>
    </div>
  )
}
