import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-slate-800 text-white flex flex-col">
      <div className="p-4 text-xl font-bold border-b border-slate-700">
        Sausan Dashboard
      </div>
      <nav className="flex-1 p-4">
        {/* Empty navigation – you can add links later */}
      </nav>
    </aside>
  );
};

export default Sidebar;