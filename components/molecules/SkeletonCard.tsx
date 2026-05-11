import React from "react";

const SkeletonCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {[1, 2, 3].map((t) => (
        <div
          key={t}
          className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col animate-pulse"
        >
          <div className="relative h-48  bg-slate-200"></div>

          <div className="p-5 flex flex-col flex-1">
            <div className="h-3 w-20 bg-slate-200 mb-2 "></div>
            <div className="h-4 w-40 bg-slate-200 mb-2 "></div>
            <div className="h-4 w-50 bg-slate-200 mb-12 "></div>

            <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
              <div>
                <div className="h-3 w-16 bg-slate-200 mb-2"></div>
                <div className="h-8 w-16 bg-slate-200"></div>
              </div>
              <div className="h-10 w-10 bg-slate-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonCard;
