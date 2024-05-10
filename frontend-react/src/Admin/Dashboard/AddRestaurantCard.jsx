import { Card } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const AddRestaurantCard = () => {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => navigate("/admin/add-restaurant")}
      className="flex items-center justify-center px-5 min-h-[30rem]"
      sx={{ width: 345, m: "1rem" }}
    >
      <div className="flex flex-col items-center">
      <AddIcon sx={{ fontSize: "7rem" }} />
        <h1 className="font-semibold text-gray-200 text-center">
          Add New Restaurants
        </h1>
        
      </div>
    </Card>
  );
};

export default AddRestaurantCard;
