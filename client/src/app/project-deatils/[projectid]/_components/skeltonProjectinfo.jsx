import React from "react";

function SkeltonProjectinfo() {
  return (
    <div className="flex flex-col gap-5">
      <div className="h-[40px] w-[400px] bg-slate-200 animate-pulse"></div>
      <div className="h-[40px] w-[400px] bg-slate-200 animate-pulse"></div>
      <div className="h-[40px] w-[400px] bg-slate-200 animate-pulse"></div>
      <div className="h-[40px] w-[400px] bg-slate-200 animate-pulse"></div>
      <div className="h-[40px] w-[100px] bg-slate-200 animate-pulse"></div>
    </div>
  );
}

export default SkeltonProjectinfo;
