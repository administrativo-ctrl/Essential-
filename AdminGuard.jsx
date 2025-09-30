"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function AdminGuard({children}){
  const router = useRouter();
  const [ok,setOk] = useState(false);
  useEffect(()=>{
    const role = typeof window !== "undefined" ? localStorage.getItem("essential_portal") : null;
    if(role==="admin"){ setOk(true); } else { router.replace("/admin/login"); }
  },[router]);
  if(!ok) return null;
  return children;
}
