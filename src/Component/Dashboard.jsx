import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Dashboard() {
  const [categoryName, setCategoryName] = useState([]);
  const [categoryDetails, setCategoryDetails] = useState({
    catName: "",
    catImg: " ",
  });

  const [menuDetails, setMenuDetails] = useState({
    category: "",
    item: "",
    img: "",
    description: "",
    price: "",
  });

  // useEffect(()=>{
  //   axios
  //   .post("http://localhost:8090/category/add-category")
  //   .then((resp)=>{
  //     let data=resp.data;
  //     console.log(data);

  //     setCategoryDetails({
  //       ...categoryDetails,catName: data.catName
  //     });
  //     console.log(resp);

  //   })
  //   .catch((err)=>{
  //     console.log(err);

  //   })
  // })

  let getCategoryDetails = () => {
    axios
      .get("http://localhost:8090/category/getCategory")
      .then((resp) => {
        let data = resp.data;
        let catSet = new Set();
        data.map((obj) => {
          catSet.add(obj.name);
        });
        setCategoryName([...catSet]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getCategoryDetails();
  }, []);

  let addCategory = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:8090/category/add-category", categoryDetails)
      .then((res) => {
        console.log(res.data);
        setCategoryDetails(res.data);
        toast.success("Category added")
        setCategoryDetails("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let addMenuItems = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:8090/menu/add-menu", menuDetails)
      .then((res) => {
        console.log(res.data);
        setMenuDetails(res.data);
        toast.success("Menu added");
        setMenuDetails("")
      })
      .catch((error) => {
        console.log(error);
        toast.error(error);
      });

    // console.log(menuDetails);
    
  };
  let convertImgToBase64Category = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () =>
      setCategoryDetails({ ...categoryDetails, catImg: reader.result });
  };
  let convertImgToBase64Menu = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () =>
      setMenuDetails({ ...menuDetails, img: reader.result });
  };
  return (
    <div className="container" id="dashboard">
      <div className="row">
        <div className="col-6 p-5 ml-md-1" id="dashboardCategory">
        <h3>Add Category</h3>
        <form>
          <label className="form-label">Enter Category name</label>
          <input
            type="text"
            className="form-control form-control-sm"
            value={categoryDetails.catName}
            onChange={(event) => {
              setCategoryDetails({
                ...categoryDetails,
                catName: event.target.value,
              });
            }}
          />
          <input
            type="file"
            className="form-control form-control-sm"
            onChange={(event) => {
              convertImgToBase64Category(event.target.files[0]);
            }}
          />
          <button
            className="btn btn-primary"
            onClick={(event) => addCategory(event)}
          >
            Submit
          </button>
        </form>
      </div>

      {/* Adding menu item */}
       <div className="col-5 offset-1 mr-5" id="dashboardMenu">
      <h3>Add Items</h3>
      <form>
        <div className="mb-3">
          <label className="form-label form-label-sm" htmlFor="selectCategory">
            Select category:
          </label>
          <select
            className="form-select form-select-sm"
            aria-label="Large select example"
            value={menuDetails.category}
            onChange={(event) => {
              setMenuDetails({
                ...menuDetails,
                category: event.target.value,
              });
            }}
          >
            <option disabled selected>
              Select
            </option>
            {categoryName.map((type) => {
              return (
                <option value={type} name="category">
                  {type}
                </option>
              );
            })}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Menu Items
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            value={menuDetails.item}
            onChange={(event) => {
              setMenuDetails({
                ...menuDetails,
                item: event.target.value,
              });
            }}
          />
        </div>
        <div>
          <input
            type="file"
            className="form-control form-control-sm"
            onChange={(event) => {
              convertImgToBase64Menu(event.target.files[0]);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            value={menuDetails.description}
            onChange={(event) => {
              setMenuDetails({
                ...menuDetails,
                description: event.target.value,
              });
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Price:
          </label>
          <input
            type="number"
            name="price"
            className="form-control form-control-sm"
            value={menuDetails.price}
            onChange={(event) => {
              setMenuDetails({
                ...menuDetails,
                price: event.target.value,
              });
            }}
          />
        </div>

        <button
          className="btn btn-sm btn-warning"
          onClick={(event) => {
            addMenuItems(event);
          }}
        >
          Add
        </button>
      </form>
    </div>
    </div>
    </div>
  );
}

export default Dashboard;
