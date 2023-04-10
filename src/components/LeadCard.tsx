import { FC, useState } from "react"
import Link from 'next/link';
import { LeadInterface } from "@/shared/interfaces/leads.interface";

interface LeadCardProps {
    lead: LeadInterface
    onClickFunc: (lead: LeadInterface) => void;
}

const LeadCard: FC<LeadCardProps> = ({ lead, onClickFunc }) => {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2" onClick={() => onClickFunc(lead)}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="avatar mr-5">
                            <div className="w-24 mask mask-squircle">
                                <img src={lead?.image} alt={lead?.name} />
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold text-xl mb-2">{lead?.name}</h3>
                            <p className="text-gray-700 text-base">{lead?.jobTitle}</p>
                            <p className="text-gray-500 text-sm">{lead?.company}</p>
                        </div>
                    </div>
                    <div className="flex items-center">
    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeadCard;