import { FC } from "react"
import { LeadInterface } from "@/shared/interfaces/leads.interface";

interface LeadCardProps {
    lead: LeadInterface | undefined
}

const LeadInfo: FC<LeadCardProps> = ({ lead }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl h-5/6">
            <figure className="px-10 pt-10">
                <img src={lead?.image} alt={lead?.name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center text-cyan-700">
                <h2 className="card-title">{lead?.name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default LeadInfo;