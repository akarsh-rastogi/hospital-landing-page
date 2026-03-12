
import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "../Styles/reviews.css"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("https://admin.tomedes.com/api/v1/get-reviews?page=1")
      .then((response) => {
        setReviews(response.data.data);
      
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }, []);

const settings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 575, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};


  return (
    <section className="reviews-section">
      <h2 className="reviews-title">What Our Customers Say</h2>
      <Slider {...settings} className="reviews-slider">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="quote-mark">“</div>
            <p className="review-text">{review.Reviews}</p>
            <strong className="review-author">- {review.Name}</strong>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ReviewsSection;
