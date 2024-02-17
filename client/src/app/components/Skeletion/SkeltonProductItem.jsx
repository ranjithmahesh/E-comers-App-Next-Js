import React from "react";

function SkeltonProductItem() {
  return (
    <div className="flex flex-col gap-5 w-[250px]">
      <div className="h-[100px] w-[250px] bg-slate-200 animate-pulse"></div>
      <div className="h-[10px] w-[250px] bg-slate-200 animate-pulse"></div>

      <div className=" flex flex-row justify-between gap-1">
        <div className="flex flex-col gap-3">
          <div className="h-[10px] w-[100px] bg-slate-200 animate-pulse"></div>
          <div className="h-[10px] w-[100px]  bg-slate-200 animate-pulse"></div>
        </div>
        <div>
          <div className="h-[10px] w-[100px] bg-slate-200 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default SkeltonProductItem;
