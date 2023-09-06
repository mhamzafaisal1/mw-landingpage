import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "reactstrap";
import { useRouter } from "next/router";

const Sidebar = (props) => {
  const router = useRouter();
  const sidebar = React.useRef();

  console.log(props, "props");
  console.log(router, "location");
  const activeRoute = (routeName) => {
    return router.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <div>
      <div
        className="sidebar"
        data-color={props.bgColor}
        data-active-color={props.activeColor}
      >
        <Link href="/">
          <div className="logo">
            <div className="logo-img">
              <Image
                src="/images/MarketwiseAI-Logo-DarkBG - Straight copy.png"
                width={350}
                height={80}
              />
            </div>
          </div>
        </Link>
        <div className="sidebar-wrapper" ref={sidebar}>
          {/* <Nav>
            {props.routes.map((prop, key) => {
              return (
                <li
                  //   className={
                  //     activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                  //   }
                  className="active-pro"
                  key={key}
                >
                  <Link href={prop.layout + prop.path} className="nav-NavLink">
                    <>
                      <i className={prop.icon} />
                      <p>{prop.name}</p>
                    </>
                  </Link>
                </li>
              );
            })}
          </Nav> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
