import { ReactNode } from "react";

export default function Icon({ icon, className }: { icon: ReactNode; className?: string }) {
  return (
    <div
      className={` hover:text-slate-100 hover:bg-slate-500 hover:bg-opacity-100 rounded cursor-pointer p-1 text-center ${className}`}
    >
      {icon}
    </div>
  );
}
