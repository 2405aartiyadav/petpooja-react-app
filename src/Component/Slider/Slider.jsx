import React, { useState } from 'react'
import './Slider.css';


function Slider() {
    let img_path = '/src/assets/';
    const [imgName, setImgName] = useState(['foodCover1.jpeg', 'foodCover2.jpeg', 'foodCover4.jpeg','foodCover5.jpeg']);
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {imgName.map((img,index) => {
                    return (
                        <div className="carousel-item active" key={index}>
                            <img src={img_path + img} className="d-block w-100 slideimg" alt="..." />
                        </div>
                    )

                })}
                
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider