import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";

import { useMediaQuery } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Dashboard } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import ShopTwoIcon from "@mui/icons-material/ShopTwo";
import { logout } from "../State/Authentication/Action";
import StorefrontIcon from '@mui/icons-material/Storefront';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const menu = [

  { title: "Dashboard", icon: <Dashboard />, path: "/" },
  { title: "Restaurants", icon: <ShoppingBagIcon />, path: "/restaurants" },
  { title: "Customers", icon: <ShopTwoIcon />, path: "/customers" },
  { title: "Restaurant Request", icon: <AddCircleIcon />, path: "/restaurant-request" },
  { title: "Logout", icon: <LogoutIcon />, path: "/" },
];
export default function SuperAdminSidebar({ handleClose, open }) {
  const isSmallScreen = useMediaQuery("(max-width:1080px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = useParams()
  console.log("restaurantId ",id)

  const handleNavigate = (item) => {
    navigate(`/super-admin${item.path}`);
    if (item.title === "Logout") {
      navigate("/");
      dispatch(logout());
    }
    
    
  };

  return (
    <div className=" ">
      <React.Fragment>
        <Drawer
          sx={{ zIndex: 1 }}
          anchor={"left"}
          open={open}
          onClose={handleClose}
          variant={isSmallScreen ? "temporary" : "permanent"}
          // variant="persistent"
        >
          <div className="w-[50vw] lg:w-[20vw] group h-[100vh] flex flex-col justify-center text-xl space-y-8">
            <Divider verticle />
            {menu.map((item, i) => (
              <>
                <div
                  onClick={() => handleNavigate(item)}
                  className="px-5 flex items-center space-x-5 cursor-pointer"
                >
                  {item.icon}
                  <span>{item.title}</span>
                </div>
                <Divider />
              </>
            ))}
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
