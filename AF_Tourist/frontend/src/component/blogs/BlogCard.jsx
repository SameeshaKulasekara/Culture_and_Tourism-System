import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import athirasa from "../../../src/Assets/athirasa.jpg"
import dodol from "../../../src/Assets/dodol.jpeg"
import kokis from "../../../src/Assets/kokis.jpeg"
import aggala from "../../../src/Assets/aggala.jpg"
import asmi from "../../../src/Assets/asmi.jpeg"
import kondakeum from "../../../src/Assets/kondakeum.jpg"
import Footer from "../../Footer";
import Header from "../Home/Header";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import { Select } from "@material-ui/core";
import ReadMoreReact from 'read-more-react';
import './BlogCard.css';

const categories = [
  "FOODS",
  "PLACES",
//   "View Points",
//   "Honey Moon",
//   "Visits Package",
//   "Sports",
//   "Others"
];


const BlogCard = ({ match }) => { 
    const [category, setCategory] = useState("");
    
    return (
    <div class = "blogcard">
            <Header />
            <div className="container">
                <div className="selector-1">
                    {/* <span>CHOOSE CATEGORIES</span> */}
                    <Select style={{ fontSize: "1.2vmax", padding: "5px" }} className="selector">
                <ul className="categoryBox">
                  {categories.map((category) => (
                    <li
                      className="category-link"
                      key={category}
                      onClick={() => setCategory(category)}
                      type="checkbox">
                      {category}
                    </li>
                  ))}
                                      </ul>
                                      </Select>
                </div>
        <div class="row row-cols-2 row-cols-md-3 g-5">
				<div class="col">
					<div class="card h-100 border-0">
						<a href="javascript:void(0)" className='text-decoration-none text-black'>
							<div class="img-wrapper ratio ratio-1x1">
								<img src={athirasa} class="card-img-top skeleton" alt="bathware"/>
							</div>
							<div class="card-body">
								<h5 class="card-title text-uppercase h6 fw-normal text-center ">Athirasa</h5>
								<ReadMoreReact text={"One of the most delicious Avurudu sweets, Athirasa is just what its name implies- extremely tasty! A sweet cake made with rice flour and jaggery, flattened into circles and then fried later; it is often prepared during the seasonal occasions or special events. Extra rich in sweetness, this tempting delicacy is hard to given a miss."}
                                  min={5}
                                  ideal={30}
                                  max={100}
                                  readMoreText="click here to read more"
                                        className="text-center ReadMoreReact" />
                                    <div className="likes d-flex justify-content-space-between pt-2">
                                        <ThumbUpIcon />
                                        <ThumbDownAltIcon/>
                                    </div>
                                   
							</div>
						</a>
					</div>
				</div>
				<div class="col">
					<div class="card h-100 border-0">
						<a href="javascript:void(0)" className='text-decoration-none text-black'>
							<div class="img-wrapper ratio ratio-1x1">
								<img src={dodol} class="card-img-top skeleton img-fluid" alt="..."/>
							</div>
							<div class="card-body">
								<h5 class="card-title text-uppercase h6 fw-normal text-center">Dodol</h5>
								<ReadMoreReact text={"On the list of the best Sri Lankan sweets comes another dessert, called Kalu Dodol. Made with rice flour, jaggery, and thick coconut milk, and garnished with raisins and nuts, this jelly-like candy is mostly found in the local grocery stores in the southern region of the island country. As it requires a lot of time in preparation, you can find it in packets manufactured in the markets of Hambantota."}
                                  min={5}
                                  ideal={30}
                                  max={100}
                                  readMoreText="click here to read more"
                                        className="text-center ReadMoreReact" />
                                    <div className="likes d-flex justify-content-space-between pt-2">
                                        <ThumbUpIcon />
                                        <ThumbDownAltIcon/>
                                    </div>
							</div>
						</a>
					</div>
				</div>
				<div class="col">
				<div class="card h-100 border-0">
					<a href="javascript:void(0)" className='text-decoration-none text-black'>
						<div class="img-wrapper ratio ratio-1x1">
							<img src={kokis} class="card-img-top skeleton img-fluid" alt="..."/>
						</div>
						<div class="card-body">
							<h5 class="card-title text-uppercase h6 fw-normal text-center">kokis</h5>
							<ReadMoreReact text={"One of the most delicious Avurudu sweets, Athirasa is just what its name implies- extremely tasty! A sweet cake made with rice flour and jaggery, flattened into circles and then fried later; it is often prepared during the seasonal occasions or special events. Extra rich in sweetness, this tempting delicacy is hard to given a miss."}
                                  min={5}
                                  ideal={30}
                                  max={100}
                                  readMoreText="click here to read more"
                                        className="text-center ReadMoreReact" />
                                    <div className="likes d-flex justify-content-space-between pt-2">
                                        <ThumbUpIcon />
                                        <ThumbDownAltIcon/>
                                    </div>
						</div>
					</a>
				</div>
				</div>
				<div class="col">
					<div class="card h-100 border-0" >
						<a href="javascript:void(0)" className='text-decoration-none text-black'>
							<div class="img-wrapper ratio ratio-1x1">
                                    <img src={aggala}class="card-img-top skeleton img-fluid" alt="..."/>
							</div>
							<div class="card-body">
								<h5 class="card-title card-title text-uppercase h6 fw-normal text-center">aggala</h5>
								<ReadMoreReact text={"One of the most delicious Avurudu sweets, Athirasa is just what its name implies- extremely tasty! A sweet cake made with rice flour and jaggery, flattened into circles and then fried later; it is often prepared during the seasonal occasions or special events. Extra rich in sweetness, this tempting delicacy is hard to given a miss."}
                                  min={5}
                                  ideal={30}
                                  max={100}
                                  readMoreText="click here to read more"
                                        className="text-center ReadMoreReact" />
                                    <div className="likes d-flex justify-content-space-between pt-2">
                                        <ThumbUpIcon />
                                        <ThumbDownAltIcon/>
                                    </div>
							</div>
						</a>
					</div>
				</div>
				<div class="col">
					<div class="card h-100 border-0">
						<a href="javascript:void(0)" className='text-decoration-none text-black'>
							<div class="img-wrapper ratio ratio-1x1">
								<img src={asmi} class="card-img-top skeleton img-fluid" alt="..."/>
							</div>
							<div class="card-body">
								<h5 class="card-title text-uppercase h6 fw-normal text-center">asmi</h5>
								<ReadMoreReact text={"One of the most delicious Avurudu sweets, Athirasa is just what its name implies- extremely tasty! A sweet cake made with rice flour and jaggery, flattened into circles and then fried later; it is often prepared during the seasonal occasions or special events. Extra rich in sweetness, this tempting delicacy is hard to given a miss."}
                                  min={5}
                                  ideal={30}
                                  max={100}
                                  readMoreText="click here to read more"
                                        className="text-center ReadMoreReact" />
                                    <div className="likes d-flex justify-content-space-between pt-2">
                                        <ThumbUpIcon />
                                        <ThumbDownAltIcon/>
                                    </div>
							</div>
						</a>
					</div>
				</div>
				<div class="col">
					<div class="card h-100 border-0">
						<a href="javascript:void(0)" className='text-decoration-none text-black'>
							<div class="img-wrapper ratio ratio-1x1">
								<img src={kondakeum} class="card-img-top skeleton img-fluid" alt="..."/>
							</div>
							<div class="card-body">
								<h5 class="card-title text-uppercase h6 fw-normal text-center">konda keum</h5>
								<ReadMoreReact text={"One of the most delicious Avurudu sweets, Athirasa is just what its name implies- extremely tasty! A sweet cake made with rice flour and jaggery, flattened into circles and then fried later; it is often prepared during the seasonal occasions or special events. Extra rich in sweetness, this tempting delicacy is hard to given a miss."}
                                  min={5}
                                  ideal={30}
                                  max={100}
                                  readMoreText="click here to read more"
                                        className="text-center ReadMoreReact" />
                                    <div className="likes d-flex justify-content-space-between pt-2">
                                        <ThumbUpIcon />
                                        <ThumbDownAltIcon/>
                                    </div>
							</div>
						</a>
					</div>
				</div>
		</div>
            </div>
       
      <Footer/>        
    </div>
    
  );
}
export default BlogCard;