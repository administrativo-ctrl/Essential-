"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Guard({children}){
  const router = useRouter();
  const [ok,setOk] = useState(false);
  useEffect(()=>{
    const role = typeof window !== "undefined" ? localStorage.getItem("essential_portal") : null;
    if(role==="client"){ setOk(true); } else { router.replace("/portal/login"); }
  },[router]);
  if(!ok) return null;
  return children;
}
