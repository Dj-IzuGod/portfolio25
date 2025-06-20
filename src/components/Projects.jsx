import React, { useState } from "react";

import "../Gallery.css";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentGroup, setCurrentGroup] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample image groups
  const imageGroups = [
    {
      key: 1,
      titles: "JCPC App",
      cover: "./images/JCPC Home.png",
      images: [
        "./images/JCPC Home.png",
        "./images/JCPC 2.png",
        "./images/JCPC 3.png",
        "./images/JCPC 4.png",
        "./images/JCPC 5.png",
        "./images/JCPC mobile.png",
      ],
    },
    {
      key: 2,
      titles: "PayNow App",
      cover: "./images/Paynow login.png",
      images: [
        "/images/Paynow login.png",
        "/images/Paynow login mobile.png",
        "/images/Paynow login mobile3.png",
        "/images/Paynow home4.png",
        "/images/Paynow home mobile5.png",
        "/images/Paynow customer 6.png",
        "/images/Paynow profile 6.png",
      ],
    },
    {
      key: 3,
      titles: "Blog-site App",
      cover: "/images/Blog home.png",
      images: [
        "/images/Blog home.png",
        "/images/Blog home mobile.png",
        "/images/Blog home mobile3.png",
        "/images/Blog admin.png",
        "/images/Blog admin dashboard.png",
        "/images/Blog admin dashboard mobile.png",
      ],
    },
  ];

  const openModal = (group, index = 0) => {
    setCurrentGroup(group);
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const goToPrev = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? currentGroup.images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === currentGroup.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className=" gallery-container skillPage " id="projects">
      <h1>My Projects</h1>
      <p className="aboutMe">
        <u>What have I worked on?</u>
      </p>
      <div className="thumbnail-grid">
        {imageGroups.map((group, index) => (
          <div>
            <h4>{group.titles}</h4>
            <div key={index} className="thumbnail-wrapper">
              <img
                src={group.cover}
                alt={`Group ${index + 1}`}
                onClick={() => openModal(group)}
                className="thumbnail"
              />
              <div className="badge">{group.images.length}</div>
            </div>
          </div>
        ))}
      </div>

      {isOpen && currentGroup && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>

            <div className="main-image-container">
              <button className="nav-btn prev-btn" onClick={goToPrev}>
                &lt;
              </button>

              <img
                src={currentGroup.images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                className="main-image"
              />

              <button className="nav-btn next-btn" onClick={goToNext}>
                &gt;
              </button>
            </div>

            <div className="thumbnail-strip">
              {currentGroup.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumb ${index + 1}`}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`thumbnail-preview ${
                    index === currentImageIndex ? "active" : ""
                  }`}
                />
              ))}
            </div>

            <div className="image-counter">
              {currentImageIndex + 1} / {currentGroup.images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
