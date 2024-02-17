import React from "react";

function SkeletonCartList() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-20 ">
            <div className="flex flex-col gap-10">
              <div className="h-[30px] w-[400px] bg-slate-200 animate-pulse"></div>
              <div className="h-[30px] w-[400px] bg-slate-200 animate-pulse"></div>
              <div className="h-[30px] w-[400px] bg-slate-200 animate-pulse"></div>
              <div className="h-[30px] w-[400px] bg-slate-200 animate-pulse"></div>
              <div className="h-[30px] w-[400px] bg-slate-200 animate-pulse"></div>
              <div className="h-[30px] w-[400px] bg-slate-200 animate-pulse"></div>
              <div className="h-[30px] w-[400px] bg-slate-200 animate-pulse"></div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="h-[30px] w-[400px] bg-slate-200 animate-pulse"></div>
              <div className="h-[30px] w-[400px] bg-slate-200 animate-pulse"></div>
              <div className="h-[30px] w-[400px] bg-slate-200 animate-pulse"></div>
              <div className="h-[30px] w-[400px] bg-slate-200 animate-pulse"></div>
              <div className="h-[30px] w-[400px] bg-slate-200 animate-pulse"></div>
              <div className="h-[30px] w-[400px] bg-slate-200 animate-pulse"></div>
              <div className="h-[30px] w-[400px] bg-slate-200 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonCartList;
