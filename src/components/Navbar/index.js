import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import Icon from "../../helpers/icons";
const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const menus = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <Icon name="dashboard" active={splitLocation[1] === "dashboard"}/>,
      active: splitLocation[1] === "dashboard" ? true : false,
    },
    {
      name: "Statistic",
      link: "/statistic",
      icon: <Icon name="statistic" active={splitLocation[1] === "statistic"} />,
      active: splitLocation[1] === "statistic" ? true : false,
    },
    {
      name: "Tournaments",
      link: "/tournament",
      icon: <Icon name="tournament" active={splitLocation[1] === "tournament"}/>,
      active: splitLocation[1] === "tournament" ? true : false,
    },
    {
      name: "Partner search",
      link: "/partner",
      icon: <Icon name="partner" active={splitLocation[1] === "partner"}/>,
      active: splitLocation[1] === "partner" ? true : false,
    },
    {
      name: "Courts",
      link: "/court",
      icon: <Icon name="bookCourt" active={splitLocation[1] === "court"}/>,
      active: splitLocation[1] === "court" ? true : false,
    },
    {
      name: "Store",
      link: "/store",
      icon: <Icon name="store" active={splitLocation[1] === "store"}/>,
      active: splitLocation[1] === "store" ? true : false,
    },
    {
      name: "LIVE",
      link: "/live",
      icon: <Icon name="live" active={splitLocation[1] === "live"}/>,
      active: splitLocation[1] === "live" ? true : false,
    },
  ];
  const [open, setOpen] = useState(true);

  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#FFFFFF] min-h-screen ${
          open ? "w-64" : "w-20"
        } duration-500 text-gray-100 border-r border-r-[rgba(0, 0, 0, 0.19)]`}
      >
        <div className="py-3 px-2 flex">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer text-[#4F4F4F] ml-4"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={`px-4 ${menu?.margin && "mt-5"} ${
                menu?.active && "bg-[#e5efff] border-r-2 border-r-[#0066FF]"
              } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-[#e5efff] transition`}
            >
              <div className="mx-2">{menu?.icon}</div>
              <h2
                className={`font-Manrope text-md text-[#4F4F4F] whitespace-pre ${
                  menu?.active && "text-[#0066FF]"
                } overflow-hidden`}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
