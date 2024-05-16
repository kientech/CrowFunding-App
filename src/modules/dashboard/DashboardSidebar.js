import React from "react";
import { UilCreateDashboard } from "@iconscout/react-unicons";
import { UilMegaphone } from "@iconscout/react-unicons";
import { UilTransaction } from "@iconscout/react-unicons";
import { UilMoneyWithdraw } from "@iconscout/react-unicons";
import { NavLink } from "react-router-dom";

const sideBarLinks = [
  {
    id: 1,
    icon: <UilCreateDashboard></UilCreateDashboard>,
    name: "Dashboard",
    url: "/",
  },
  {
    id: 2,
    icon: <UilMegaphone></UilMegaphone>,
    name: "Campaign",
    url: "/campaign",
  },
  {
    id: 3,
    icon: <UilTransaction></UilTransaction>,
    name: "Payment",
    url: "/payment",
  },
  {
    id: 4,
    icon: <UilMoneyWithdraw></UilMoneyWithdraw>,
    name: "Withdraw",
    url: "/withdraw",
  },
  {
    id: 5,
    icon: <UilTransaction></UilTransaction>,
    name: "Payment",
    url: "/payment",
  },
];
const DashboardSidebar = () => {
  return (
    <div className="w-[328px] lg:w-[76px] rounded-lg shadow-sm bg-pureWhite px-3 py-10 flex-shrink-0 sticky top-6 left-6 ">
      {sideBarLinks &&
        sideBarLinks.map((item, index) => (
          <NavLink
            key={item.id}
            to={item.url}
            className={({ isActive }) =>
              `mx-auto w-[48px] h-[48px] flex justify-center items-center rounded-lg mb-[30px] hover:text-primary hover:bg-primaryColorExtra ${
                isActive ? "text-primary bg-primaryColorExtra" : "text-text4"
              }`
            }
          >
            <span>{item.icon}</span>
            {/* <span className="lg:hidden">{item.name}</span> */}
          </NavLink>
        ))}
    </div>
  );
};

export default DashboardSidebar;
