import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Menu as AntMenu } from "antd";
import { Hamburger } from "../";
import Icon from "../../helpers/icons";
// import "./nav.css";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const roots = [
  getItem("Dashboard", "/dashboard", <Icon name={"dashboard"} />),
  getItem("Statistic", "/statistic", <Icon name={"statistic"} />),
  getItem("Tournament", "/tournament", <Icon name={"tournament"} />),
  getItem("Sponsors", "/sponsors", <Icon name={"partner"} />),
  getItem("Court", "/court", <Icon name={"bookCourt"} />),
  getItem("Shop", "/shop", <Icon name={"partner"} />),
  getItem("Live", "/live", <Icon name={"live"} />),
];

export const Navbar = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <NavbarContainer>
      <Hamburger type="primary" toggleCollapsed={toggleCollapsed}>
        <Icon name={"hamburger"} />
      </Hamburger>
      <Menu
        onClick={({ key }) => {
          if (key == "signout") {
          } else {
            navigate(key);
          }
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        inlineCollapsed={collapsed}
        items={roots}
      />
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  padding-bottom: 70px;
  .ant-btn {
    background-color: #fff;
  }
  .ant-menu {
    background-color: #fff;
  }
  .ant-menu-item::after {
    border-right: none;
  }
  .ant-menu-item-selected {
    background: #e9f1fe !important;
    border-radius: 8px;
  }
`;
const Menu = styled(AntMenu)`
  font-size: 18px;
  border: none;
  background-color: #fff !important;
  width: 200px;
  margin-top: 30px;
  .ant-menu-item {
    height: 50px;
    margin-bottom: 20px !important;
    background-color: #fff;
  }
  .ant-menu-title-content {
    display: inline-block;
    height: 40px;
    line-height:40px;
  }
  .ant-menu-item-selected {
    svg {
      path {
        fill: #0067ff;
      }
    }
  }
  svg {
    height: 100%;
    margin-right: 26px;
    width: 26px;
  }
`;
//#region Navbar
// const toggleRef = useRef(null);
// const navRef = useRef(null);
// const handleToggle = () => {
//   toggleRef.current?.addEventListener("click", () => {
//     if (collapsed) {
//       navRef.current.classList.remove("close");
//       setCollapsed(!collapsed);
//     } else {
//       navRef.current.classList.add("close");
//       setCollapsed(!collapsed);
//     }
//     console.log(collapsed);
//   });
// };
// New Navbar
// return (
//   <nav className="sidebar close" ref={navRef}>
//     <header ref={toggleRef} onClick={handleToggle}>
//       <Icon name={"hamburger"} />
//     </header>
//     <div className="menu-bar">
//       <div className="menu">
//         <ul className="menu-links">
//           <li className={`nav-link`}>
//             <Link to="dashboard">
//               <Icon name={"dashboard"} />
//               <span className="text nav-text" style={{opacity:collapsed ? 0:1}}>Dashboard</span>
//             </Link>
//           </li>
//           <li className={`nav-link`}>
//             <Link to="statistic">
//               <Icon name={"statistic"} />
//               <span className="text nav-text" style={{opacity:collapsed ? 0:1}}>Statistic</span>
//             </Link>
//           </li>
//           <li className={`nav-link`}>
//             <Link to="tournament">
//               <Icon name={"tournament"} />
//               <span className="text nav-text" style={{opacity:collapsed ? 0:1}}>Tournament</span>
//             </Link>
//           </li>
//           <li className={`nav-link`}>
//             <Link to="partner">
//               <Icon name={"partner"} />
//               <span className="text nav-text" style={{opacity:collapsed ? 0:1}}>Sponsors</span>
//             </Link>
//           </li>
//           <li className={`nav-link`}>
//             <Link to="court">
//               <Icon name={"bookCourt"} />
//               <span className="text nav-text" style={{opacity:collapsed ? 0:1}}>Court</span>
//             </Link>
//           </li>
//           <li className={`nav-link`}>
//             <Link to="shop">
//               <Icon name={"partner"} />
//               <span className="text nav-text" style={{opacity:collapsed ? 0:1}}>Shop</span>
//             </Link>
//           </li>
//           <li className={`nav-link`}>
//             <Link to="live">
//               <Icon name={"live"} />
//               <span className="text nav-text" style={{opacity:collapsed ? 0:1}}>Live</span>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </nav>
// );
//#endregion
