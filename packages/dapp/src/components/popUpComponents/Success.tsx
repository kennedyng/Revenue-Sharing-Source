import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

function Success() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/10">
      <div className=" relative w-[350px] h-fit rounded-xl space-y-5  bg-slate-50 shadow-md px-5 py-10">
        <div>
          <XMarkIcon className="w-6 h-6 absolute top-5 right-5 text-slate-950" />
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="bg-green-500 rounded-full h-10 w-10 p-2 flex items-center justify-center ">
              <CheckIcon className="w-6 h-6 text-white" />
            </div>
            <p className="text-xl text-slate-950 font-semibold">Success</p>
          </div>

          <div className="text-sm text-slate-500 text-center ">
            Thank you for your request
            <br />
            your Ticket has been purchased successfully
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
