import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { projects, type VerificationStatus } from "./sentinel-data";

export type Verification = {projectId:string; status:VerificationStatus; officer:string; dueDate:string; notes:string[]};
type SentinelState = {
  verifications: Verification[]; unreadAlerts:string[];
  markForVerification:(id:string)=>void; updateVerification:(id:string, patch:Partial<Verification>)=>void;
  addNote:(id:string,note:string)=>void; markRead:(id:string)=>void;
};

const Context = createContext<SentinelState | null>(null);
const initial: Verification[] = [
  {projectId:"MP-1820",status:"Documents Requested",officer:"Anita Sharma",dueDate:"2026-10-03",notes:["Utilization certificate requested."]},
  {projectId:"MP-1911",status:"Field Inspection Required",officer:"Rajiv Menon",dueDate:"2026-09-28",notes:["Geo-tagged images to be verified."]},
];

export function SentinelProvider({children}:{children:ReactNode}) {
  const [verifications,setVerifications] = useState(initial);
  const [unreadAlerts,setUnreadAlerts] = useState(["MP-1024","MP-2045","MP-3012"]);
  const markForVerification = (id:string) => setVerifications(v => v.some(x=>x.projectId===id) ? v : [...v,{projectId:id,status:"Not Reviewed",officer:"Unassigned",dueDate:"",notes:[]}]);
  const updateVerification = (id:string,patch:Partial<Verification>) => setVerifications(v=>v.map(x=>x.projectId===id?{...x,...patch}:x));
  const addNote = (id:string,note:string) => setVerifications(v=>v.map(x=>x.projectId===id?{...x,notes:[...x.notes,note]}:x));
  const markRead = (id:string) => setUnreadAlerts(v=>v.filter(x=>x!==id));
  const value = useMemo(()=>({verifications,unreadAlerts,markForVerification,updateVerification,addNote,markRead}),[verifications,unreadAlerts]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
export function useSentinel(){const value=useContext(Context); if(!value) throw new Error("SentinelProvider missing"); return value;}
export const projectById = (id:string) => projects.find(p=>p.id===id);