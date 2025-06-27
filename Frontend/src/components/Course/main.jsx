// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import ReviewCard from "./card";
// import Modal from "./model";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const dummyReviews = [
//   {
//     _id: "1",
//     image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
//     stars: 5.0,
//     reviewCount: 392,
//     title: "Prototype design with Adobe XD featuring advanced tools",
//     studentsWatched: 2538,
//   },
//   {
//     _id: "2",
//     image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
//     stars: 4.5,
//     reviewCount: 524,
//     title: "Create multiple artboards using Figma prototyping tools",
//     studentsWatched: 3532,
//   },
//   {
//     _id: "3",
//     image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
//     stars: 5.0,
//     reviewCount: 392,
//     title: "Web layout theming with Sketch and Zeplin extensions",
//     studentsWatched: 1037,
//   },
//   {
//     _id: "4",
//     image: "https://images.unsplash.com/photo-1551730450-58796b6601b2",
//     stars: 4.0,
//     reviewCount: 210,
//     title: "Master responsive design with CSS Grid and Flexbox",
//     studentsWatched: 1950,
//   },
//   {
//     _id: "5",
//     image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1",
//     stars: 4.8,
//     reviewCount: 330,
//     title: "UI/UX for mobile apps using modern design principles",
//     studentsWatched: 2784,
//   },
// ];

// const Main = () => {
//   const [reviews, setReviews] = useState([]);
//   const [selectedCard, setSelectedCard] = useState(null);

//   useEffect(() => {
//     setTimeout(() => {
//       setReviews(dummyReviews);
//     }, 500);
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: true,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 768, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <div style={{ maxWidth: "95vw", margin: "0 auto" }}>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           flexDirection: "column",
//           alignItems: "center",
//           marginBottom: "32px",
//         }}
//       >
//         <h4 style={{ fontWeight: 700, fontSize: "18px", color: "#EF9E48" }}>
//           Quality features
//         </h4>
//         <h2
//           style={{
//             fontWeight: 700,
//             fontSize: "36px",
//             color: "#0F2137",
//             textAlign: "center",
//           }}
//         >
//           Tutorials that people love most
//         </h2>
//       </div>

//       <Slider {...settings}>
//         {reviews.map((review) => (
//           <div key={review._id} style={{ padding: "0 10px" }}>
//             <div
//               onClick={() => setSelectedCard(review)}
//               style={{ cursor: "pointer" }}
//             >
//               <ReviewCard {...review} />
//             </div>
//           </div>
//         ))}
//       </Slider>

 
//       {selectedCard && (
//         <Modal onClose={() => setSelectedCard(null)} data={selectedCard} />
//       )}
//     </div>
//   );
// };

// export default Main;

 import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ReviewCard from "./card";
import Modal from "./model";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Main = () => {
  const [reviews, setReviews] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/get`);
        const data = await res.json();

        const formattedData = data.map((item) => ({
          ...item,
          reviewCount: 1, // you can change this if actual count is available
        }));

        setReviews(formattedData);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const settings = {
    dots: true,
    infinite: reviews.length > 3,
    speed: 600,
    slidesToShow: reviews.length >= 3 ? 3 : reviews.length,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: reviews.length >= 2 ? 2 : 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div style={{ maxWidth: "95vw", margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "32px",
        }}
      >
        <h4 style={{ fontWeight: 700, fontSize: "18px", color: "#EF9E48" }}>
          Quality features
        </h4>
        <h2
          style={{
            fontWeight: 700,
            fontSize: "36px",
            color: "#0F2137",
            textAlign: "center",
          }}
        >
          Tutorials that people love most
        </h2>
      </div>

      {reviews.length > 1 ? (
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review._id} style={{ padding: "0 10px" }}>
              <div
                onClick={() => setSelectedCard(review)}
                style={{ cursor: "pointer" }}
              >
                <ReviewCard {...review} />
              </div>
            </div>
          ))}
        </Slider>
      ) : reviews.length === 1 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            onClick={() => setSelectedCard(reviews[0])}
            style={{ cursor: "pointer", padding: "0 10px" }}
          >
            <ReviewCard {...reviews[0]} />
          </div>
        </div>
      ) : (
        <p style={{ textAlign: "center", color: "#6B7280" }}>No reviews available</p>
      )}

      {selectedCard && (
        <Modal onClose={() => setSelectedCard(null)} data={selectedCard} />
      )}
    </div>
  );
};

export default Main;
