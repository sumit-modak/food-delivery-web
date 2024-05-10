import { Card } from "@mui/material";
import React from "react";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const AvgCard = ({ title, icon, value,isGrow,growValue }) => {
  return (
    <Card className=" p-5 px-6 flex justify-between space-x-10">
      <div>
        <p className="pb-5">{title}</p>
        <p className="font-semibold text-gray-300 text-xl">{value}K</p>
        <div className={`${true?"text-green-600":"text-red-500"} 
        flex items-center space-x-3 mt-2`}>
<p className={` text-sm`}>{growValue}%</p>
<TrendingUpIcon/>
        </div>
      </div>
      {icon}
    </Card>
  );
};

export default AvgCard;
