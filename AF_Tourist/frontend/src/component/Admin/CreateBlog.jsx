


import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createBlog } from "../../actions/BlogActions";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import LocationCityIcon from '@material-ui/icons/LocationCity';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import DiscountIcon from "@material-ui/icons/LocalOffer";
import SideBar from "./Sidebar";
import { NEW_BLOG_RESET } from "../../constans/BlogConstans";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

const CreateBlog = ({ history }) => {
  const dispatch = useDispatch();

 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(null);
 const [success, setSuccess] = useState(false);


  const [title, setTitle] = useState("");
  const [state, setState] = useState("")
  const [city , setCity] = useState("")
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const categories = [
    "FOODS",
    "PLACES",
    
  ];

 const createProductSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const myForm = new FormData();

    myForm.set("title", title);
    myForm.set("city", city);
    myForm.set("state", state);
    myForm.set("description", description);
    myForm.set("category", category);

    images.forEach((image) => {
      myForm.append("images", image);
    });

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("http://localhost:3000/api/v2/blog/new", myForm, config);
      console.log(data.message);
      setSuccess(true);
      setLoading(false);
      toast.success("Blog Created Successfully");
      history.push("/dashboard");
      dispatch({ type: NEW_BLOG_RESET });
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
      toast.error(error.response.data.message);
      dispatch(clearErrors());
    }
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <Fragment>
      <MetaData title="Create Blog" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createProductSubmitHandler}
          >
            <h1>Create Blog</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Blog Titlle"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

             <div>
              <LocationOnIcon />
              <input
                type="text"
                placeholder="State"
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
                      
            <div>
              <LocationCityIcon />
              <input
                type="text"
                placeholder="City"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div>
              <DescriptionIcon />
              <textarea
                placeholder=" Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            <div>
              <AccountTreeIcon />
              <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">Choose Category</option>
                {categories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>


            <div id="createProductFormFile">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={createProductImagesChange}
                multiple
              />
            </div>

            <div id="createProductFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" />
              ))}
            </div>

            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Create
            </Button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Fragment>
  );
};

export default CreateBlog;