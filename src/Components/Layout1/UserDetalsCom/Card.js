import React, { useContext } from "react";
import Layout1 from "../../Images/Layout1.png";
import Layout2 from "../../Images/layout2.png";
import Layout3 from "../../Images/Layout 3.png";
import { LayoutContext } from "../../Context/LayoutContext";
import { useNavigate } from "react-router-dom";

export default function Card() {
  const navigate = useNavigate();
  const { setSelectedLayout, isDarkMode } = useContext(LayoutContext);

  const handleLayoutChange = (layoutNumber) => {
    setSelectedLayout(layoutNumber);
    navigate("/CompleteCv");
  };

  const styles = {
    container: {
      marginTop: "2rem",
    },
    card: {
      backgroundColor: isDarkMode ? "#192734" : "#f0f0f0",
      height: "100%",
    },
    imageContainer: {
      position: "relative",
      width: "100%",
      height: "100%",
    },
    cardImgTop: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    overlay: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      height: "100%",
      width: "100%",
      opacity: 0,
      transition: "opacity 0.5s ease",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    cardTitle: {
      color: "white",
      marginBottom: "10px",
    },
    btn: {
      marginTop: "10px",
    },
    heading: {
      textAlign: "center",
      marginBottom: "0px",
      letterSpacing: "0.5px",
      color: isDarkMode ? "white" : "#374151",
    },
  };

  return (
    <div className="container pt-4">
      <h4 className="poppins-bold" style={styles.heading}>
        Select a layout to preview the CV
      </h4>
      <div
        className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3"
        style={styles.container}
      >
        <div className="col mb-3">
          <div
            className="card h-100 shadow-lg"
            style={styles.card}
            onMouseEnter={(e) =>
              (e.currentTarget.querySelector(".overlay").style.opacity = 1)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.querySelector(".overlay").style.opacity = 0)
            }
          >
            <div className="p-2" style={styles.imageContainer}>
              <img
                src={Layout1}
                className="card-img-top"
                style={styles.cardImgTop}
                alt="Layout 1"
              />
              <div className="overlay" style={styles.overlay}>
                <h5
                  className="card-title poppins-semibold"
                  style={styles.cardTitle}
                >
                  Layout 1
                </h5>
                <button
                  className="btn btn-primary poppins-medium"
                  style={styles.btn}
                  onClick={() => handleLayoutChange(1)}
                >
                  Layout 1
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col mb-3">
          <div
            className="card h-100 shadow-lg"
            style={styles.card}
            onMouseEnter={(e) =>
              (e.currentTarget.querySelector(".overlay").style.opacity = 1)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.querySelector(".overlay").style.opacity = 0)
            }
          >
            <div className="p-2" style={styles.imageContainer}>
              <img
                src={Layout2}
                className="card-img-top"
                style={styles.cardImgTop}
                alt="Layout 2"
              />
              <div className="overlay" style={styles.overlay}>
                <h5
                  className="card-title poppins-semibold"
                  style={styles.cardTitle}
                >
                  Layout 2
                </h5>
                <button
                  className="btn btn-primary poppins-medium"
                  style={styles.btn}
                  onClick={() => handleLayoutChange(2)}
                >
                  Layout 2
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col mb-3">
          <div
            className="card h-100 shadow-lg"
            style={styles.card}
            onMouseEnter={(e) =>
              (e.currentTarget.querySelector(".overlay").style.opacity = 1)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.querySelector(".overlay").style.opacity = 0)
            }
          >
            <div className="p-2" style={styles.imageContainer}>
              <img
                src={Layout3}
                className="card-img-top"
                style={styles.cardImgTop}
                alt="Layout 3"
              />
              <div className="overlay" style={styles.overlay}>
                <h5
                  className="card-title poppins-semibold"
                  style={styles.cardTitle}
                >
                  Layout 3
                </h5>
                <button
                  className="btn btn-primary poppins-medium"
                  style={styles.btn}
                  onClick={() => handleLayoutChange(3)}
                >
                  Layout 3
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
