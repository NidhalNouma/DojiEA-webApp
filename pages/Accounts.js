import React from "react";
import Header from "../components/Header";

import AccountsList from "../components/AccountsList";
import { H1 } from "../components/utils/Titles";

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 pb-12 md:pt-20 md:pb-20">
          <H1 label="Accounts" />
          <main>
            <div className="max-w-7xl mx-auto pb-3 sm:px-6 lg:px-8">
              <AccountsList />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
