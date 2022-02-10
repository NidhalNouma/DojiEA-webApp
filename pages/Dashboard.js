import React from "react";
import Header from "../components/Header";

import AccountsList from "../components/AccountsList";
import { H1 } from "../components/utils/Titles";

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-12 pb-12 md:pt-20 md:pb-20">
          <H1 label="Dashbord" />
          <main>
            <div className="max-w-7xl mx-auto py-3 sm:px-6 lg:px-8">
              {/* Replace with your content */}
              <div className="px-4 py-3 sm:px-0">
                <div className="border-4 border-dashed border-slate-600 rounded-lg h-96" />
              </div>
              {/* /End replace */}
            </div>
          </main>

          <H1 label="Accounts" />
          <AccountsList />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
