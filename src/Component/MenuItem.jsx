import React from "react";
import { useLocation } from "react-router-dom";
import burger from "../assets/Burger.png";
import vegicon from "../assets/veg.png";
import nonvegicon from "../assets/nonveg.png";

function MenuItem({ menuData }) {
  const { state } = useLocation();

  return (
    <div className="menuItem card row flex-row" style={{ width: "18rem;" }}>
      <div className="col-8">
        <img
          src={menuData.menuImageUrl}
          alt="foodimg"
          className=" card-img-top menuItemImg"
        />
      </div>
      <div className="col-4 m-0.8 p-1">
        <img src={vegicon} alt="vegnonveg" className="vegnonvegIcon" />
        <b className="card-title">{menuData.menuItem}</b>
        <p className="card-text">{menuData.menuPrice}/-</p>
        <button className="btn btn-primary menuBtn mr-5">Add+</button>
      </div>
    </div>

    // <div className="flex-row " id="menuItem">
    //     <img
    //       src={menuData.menuImageUrl}
    //       alt="foodimg"
    //       className='menuItemImg' />
    //       <span className='menuContent'>
    //         <img
    //           src={vegicon}
    //           alt="vegnonveg"
    //           className='vegnonvegIcon' />
    //       </span>
    //       <span>
    //         <b>{menuData.menuItem}</b>
    //         <p>{menuData.menuPrice}/-</p>
    //       </span>
    //       <button className='btn btn-primary menuBtn'>Add+</button>

    // </div>
  );
}

export default MenuItem;
