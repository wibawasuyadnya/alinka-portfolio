import React, { ReactNode } from "react";
import { FileSearch, ServerOff } from "lucide-react";

interface PlaceHolderDataProps {
  type: string;
}

export default function PlaceHolderData({ type }: PlaceHolderDataProps) {
  let component: ReactNode = "";

  if (type === "empty") {
    component = (
      <div className="rounded-xl shadow-lg bg-base-300 gap-10 w-11/12 mx-auto h-fit flex flex-col items-center justify-center py-36">
        <FileSearch className="w-32 h-32 stroke-primary" />
        <div className="space-y-4">
          <h4 className="font-semibold text-2xl text-center text-primary-content">
            No resource found yet
          </h4>
          <p className="w-[400px] text-center font-normal text-base">
            Start add data from dashboard or check your internet connection, and
            sorry for inconvenience
          </p>
        </div>
      </div>
    );
  }

  if (type === "error") {
    component = (
      <div className="rounded-xl shadow-lg bg-base-300 gap-10 w-11/12 mx-auto h-fit flex flex-col items-center justify-center py-36">
        <ServerOff className="w-32 h-32 stroke-primary" />
        <div className="space-y-4">
          <h4 className="font-semibold text-2xl text-center text-primary-content">
            Opps! Sorry an error found
          </h4>
          <p className="w-[400px] text-center font-normal text-base">
            Looks like we weren&apos;t able to connect to our server, please try
            again in few minutes
          </p>
        </div>
      </div>
    );
  }

  return component;
}
