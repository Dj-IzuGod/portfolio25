import React, { useState } from "react";

import "../Gallery.css";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentGroup, setCurrentGroup] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample image groups
  const imageGroups = [
    {
      titles: "E-commerce App",
      cover: "https://picsum.photos/id/1018/400/300",
      images: [
        "https://picsum.photos/id/1018/800/600",
        "https://picsum.photos/id/1015/800/600",
        "https://picsum.photos/id/1019/800/600",
        "https://picsum.photos/id/1020/800/600",
        "https://picsum.photos/id/1021/800/600",
      ],
    },
    {
      titles: "E-commerce App",
      cover: "https://picsum.photos/id/1022/400/300",
      images: [
        "https://picsum.photos/id/1022/800/600",
        "https://picsum.photos/id/1023/800/600",
        "https://picsum.photos/id/1024/800/600",
      ],
    },
    {
      titles: "E-commerce App",
      cover: "https://picsum.photos/id/1022/400/300",
      images: [
        "https://picsum.photos/id/1022/800/600",
        "https://picsum.photos/id/1023/800/600",
        "https://picsum.photos/id/1024/800/600",
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
