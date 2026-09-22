export type RiskLevel = "LOW" | "MEDIUM" | "HIGH";
export type ProjectStatus = "Not Started" | "In Progress" | "Delayed" | "Near Completion" | "Completed" | "Under Verification";
export type VerificationStatus = "Not Reviewed" | "Under Verification" | "Field Inspection Required" | "Documents Requested" | "Verified" | "Escalated" | "Closed";

export type Project = {
  id: string; name: string; state: string; district: string; type: string;
  approved: number; released: number; utilized: number; progress: number; expected: number;
  risk: number; status: ProjectStatus; agency: string; completion: string;
  location: string; anomalies: string[]; breakdown: Record<string, number>;
};

const details = [
  ["MP-1024","Community Hall Construction","Telangana","Hyderabad","Community Infrastructure",48,46,42.8,35,78,87,"Delayed",["Cost Anomaly","Progress-Fund Mismatch","Project Delay","Possible Similar Project"]],
  ["MP-2045","Government School Renovation","Andhra Pradesh","Vijayawada","Education",72,60,45,54,72,62,"Delayed",["Project Delay"]],
  ["MP-3012","Community Centre Construction","Telangana","Hyderabad","Community Infrastructure",51,44,39,42,68,81,"In Progress",["Possible Similar Project","Norm Deviation"]],
  ["MP-1098","Primary Health Centre Upgrade","Maharashtra","Pune","Healthcare",125,110,76,69,64,36,"In Progress",[]],
  ["MP-1134","Rural Road Improvement","Karnataka","Mysuru","Roads",180,150,112,74,71,33,"In Progress",[]],
  ["MP-1187","Drinking Water Facility","Tamil Nadu","Coimbatore","Water & Sanitation",64,60,55,88,86,28,"Near Completion",[]],
  ["MP-1221","Government College Laboratory","Uttar Pradesh","Lucknow","Education",96,82,73,61,76,71,"Delayed",["Progress-Fund Mismatch","Project Delay"]],
  ["MP-1264","Solar Street Lighting","Rajasthan","Jaipur","Energy",84,70,60,83,80,24,"Near Completion",[]],
  ["MP-1308","District Sports Complex","Gujarat","Ahmedabad","Sports",210,180,169,64,73,74,"In Progress",["Cost Anomaly","Norm Deviation"]],
  ["MP-1352","Anganwadi Centre Construction","Odisha","Khordha","Child Welfare",38,35,20,58,55,31,"In Progress",[]],
  ["MP-1406","Flood Protection Embankment","West Bengal","Kolkata","Disaster Management",155,130,118,76,74,38,"In Progress",[]],
  ["MP-1451","Public Library Modernisation","Telangana","Warangal","Education",44,40,34,86,82,22,"Near Completion",[]],
  ["MP-1503","Rural Health Sub-Centre","Andhra Pradesh","Guntur","Healthcare",89,78,75,52,70,76,"Delayed",["Progress-Fund Mismatch","Unusual Payment Pattern"]],
  ["MP-1547","Village Internal Roads","Maharashtra","Nagpur","Roads",132,120,92,79,77,30,"In Progress",[]],
  ["MP-1592","School Digital Classroom","Karnataka","Bengaluru Urban","Education",56,52,49,94,90,18,"Completed",[]],
  ["MP-1638","Community Sanitation Complex","Tamil Nadu","Madurai","Water & Sanitation",42,38,29,71,68,41,"In Progress",["Norm Deviation"]],
  ["MP-1684","District Hospital Equipment","Uttar Pradesh","Varanasi","Healthcare",145,135,128,96,94,27,"Completed",[]],
  ["MP-1729","Rainwater Harvesting Network","Rajasthan","Jodhpur","Water & Sanitation",76,62,41,47,63,58,"Delayed",["Project Delay"]],
  ["MP-1775","Women Skill Development Centre","Gujarat","Surat","Skill Development",68,58,51,81,78,35,"Near Completion",[]],
  ["MP-1820","Cyclone Shelter Upgrade","Odisha","Puri","Disaster Management",118,100,93,84,79,44,"Under Verification",["Cost Anomaly"]],
  ["MP-1866","School Boundary Wall","West Bengal","Howrah","Education",33,30,21,67,64,32,"In Progress",[]],
  ["MP-1911","Open Air Gym Installation","Telangana","Nizamabad","Sports",27,25,24,68,92,73,"Under Verification",["Cost Anomaly","Progress-Fund Mismatch"]],
  ["MP-1957","Bus Shelter Network","Andhra Pradesh","Visakhapatnam","Transport",58,48,18,31,55,49,"Delayed",["Project Delay"]],
  ["MP-1999","Smart Classroom Programme","Maharashtra","Nashik","Education",92,85,67,82,79,29,"In Progress",[]],
] as const;

export const projects: Project[] = details.map((p, index) => ({
  id:p[0], name:p[1], state:p[2], district:p[3], type:p[4], approved:p[5], released:p[6], utilized:p[7], progress:p[8], expected:p[9], risk:p[10], status:p[11] as ProjectStatus,
  agency: index % 3 === 0 ? "District Rural Development Agency" : index % 3 === 1 ? "Public Works Department" : "District Administration",
  completion: `2026-${String((index % 9) + 3).padStart(2,"0")}-${String((index % 20) + 8).padStart(2,"0")}`,
  location: `${p[3]}, ${p[2]}`, anomalies:[...p[12]],
  breakdown: { "Cost Anomaly": Math.min(100,p[10]+4), "Progress/Fund Mismatch": Math.max(10,p[10]-3), Delay: Math.max(8,p[10]-12), "Payment Pattern": Math.max(12,p[10]-24), Similarity: p[0] === "MP-1024" ? 84 : p[0] === "MP-3012" ? 91 : Math.max(7,p[10]-35), "Norm Deviation": Math.max(10,p[10]-28) }
}));

export const riskLevel = (score:number): RiskLevel => score >= 70 ? "HIGH" : score >= 40 ? "MEDIUM" : "LOW";
export const money = (lakhs:number) => lakhs >= 100 ? `₹${(lakhs/100).toFixed(2)} Cr` : `₹${lakhs.toFixed(lakhs % 1 ? 1 : 0)}L`;

export const states = [
  {name:"Telangana",x:47,y:57,projects:1240,high:22,util:78,delayed:31,risk:48},
  {name:"Andhra Pradesh",x:53,y:66,projects:1094,high:14,util:74,delayed:22,risk:42},
  {name:"Maharashtra",x:37,y:54,projects:1530,high:17,util:81,delayed:29,risk:39},
  {name:"Karnataka",x:39,y:67,projects:1175,high:9,util:84,delayed:14,risk:34},
  {name:"Tamil Nadu",x:48,y:80,projects:1028,high:8,util:88,delayed:11,risk:31},
  {name:"Uttar Pradesh",x:54,y:32,projects:1892,high:27,util:69,delayed:48,risk:51},
  {name:"Rajasthan",x:31,y:31,projects:1325,high:12,util:76,delayed:23,risk:37},
  {name:"Gujarat",x:23,y:46,projects:980,high:7,util:86,delayed:10,risk:29},
  {name:"Odisha",x:65,y:53,projects:1132,high:6,util:82,delayed:17,risk:36},
  {name:"West Bengal",x:72,y:42,projects:1144,high:4,util:79,delayed:13,risk:33},
];

export const monthly = [
  {month:"Apr",completed:128,risk:59,util:62,progress:58},{month:"May",completed:142,risk:57,util:66,progress:61},{month:"Jun",completed:155,risk:54,util:69,progress:65},{month:"Jul",completed:149,risk:51,util:73,progress:68},{month:"Aug",completed:171,risk:48,util:76,progress:72},{month:"Sep",completed:188,risk:44,util:79,progress:76},
];

export const anomalyActions: Record<string,{description:string;action:string;category:string}> = {
  "Cost Anomaly": {description:"Utilization or unit cost differs materially from comparable sanctioned works.",action:"Review estimates, work orders, bills and payments",category:"Financial Verification"},
  "Progress-Fund Mismatch": {description:"Reported physical progress is lower than the level of fund utilization.",action:"Conduct a documented site inspection",category:"Field Verification"},
  "Project Delay": {description:"Progress is behind the sanctioned timeline or expected milestone.",action:"Request revised timeline and monitor next milestone",category:"Progress Monitoring"},
  "Possible Similar Project": {description:"A nearby work has similar scope and beneficiary characteristics.",action:"Compare location, scope, beneficiary and sanction details",category:"Duplicate Verification"},
  "Unusual Payment Pattern": {description:"Payment sequencing differs from the normal milestone pattern.",action:"Review payment sequence and supporting documents",category:"Payment Review"},
  "Norm Deviation": {description:"A project attribute may vary from applicable scheme norms.",action:"Compare with applicable guidelines and approval conditions",category:"Compliance Review"},
};