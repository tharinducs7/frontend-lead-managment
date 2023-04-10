import { FC } from "react"
import { LeadInterface } from "@/shared/interfaces/leads.interface";

interface LeadCardProps {
    lead: LeadInterface | undefined
    setShowSidebar: (value: boolean) => void;
}

const LeadInfo: FC<LeadCardProps> = ({ lead, setShowSidebar }) => {
    return (
        <div className="modal-box">
            <div className="transition duration-500 ease-in-out transform rounded-lg cursor-pointer">
                <a href="#" className="w-full block h-full">
                    <div className="flex items-center mt-2">
                        <img className='w-10 h-10 object-cover rounded-full' alt='User avatar' src={lead?.image} />

                        <div className="pl-3">
                            <div className="font-medium">
                                {lead?.name}
                            </div>
                            <div className="text-gray-600 text-sm">
                                {lead?.jobTitle} of {lead?.company}
                            </div>
                        </div>
                    </div>
                    <div className="bg-white w-full p-4">
                        <p className="text-gray-800 text-sm font-medium mb-2">
                            Suggested Personalization Line
                        </p>
                        <p className="text-indigo-500 font-medium">
                            {lead?.personalizationLine}
                        </p>


                        <div className="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                            <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                                {lead?.industry}
                            </span>
                            <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                                {lead?.email}
                            </span>
                            <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                                {lead?.phone}
                            </span>
                        </div>

                    </div>
                </a>
            </div>
            <div className="modal-action">
                <label className="btn btn-warning" onClick={() => setShowSidebar(false)}>Not a fit</label>
                <label className="btn btn-success" onClick={() => setShowSidebar(false)}>All Good!</label>

                <label htmlFor="my-modal" className="btn" onClick={() => setShowSidebar(false)}>
                    <i className='bx bx-window-close' style={{color:'#f1026a'}}  onClick={() => setShowSidebar(false)}></i>
                </label>
            </div>
        </div>
    );
}

export default LeadInfo;