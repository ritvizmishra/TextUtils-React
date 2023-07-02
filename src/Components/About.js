import React from "react";

export default function About(props) {

  const myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "rgb(88,88,88)" : "white",
  };

  return (
    <>
      <div style={{color: props.mode === "dark" ? "white" : "black",}}>
        <h2 className="my-3 mx-5">About Us</h2>
      </div>
      <div className="container my-3 py-3 rounded" style={myStyle}>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                Easy to Use
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipisicing elit. Optio a eius iusto cupiditate ducimus magnam 
                quibusdam nostrum porro beatae officia est, animi fuga. Excepturi, debitis vero ipsa accusamus eligendi libero nulla 
                repudiandae! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora dolorem aut atque voluptate vel sed quos, 
                nesciunt aperiam natus unde vero eaque rem! Perferendis illum consectetur, aliquam sapiente nesciunt magnam deleniti 
                repellat? <code>lorem ipsum dolor sit.</code>, lorem ipsum dolor sit amet consectetur overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                Various Functions
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
              <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipisicing elit. Optio a eius iusto cupiditate ducimus magnam 
                quibusdam nostrum porro beatae officia est, animi fuga. Excepturi, debitis vero ipsa accusamus eligendi libero nulla 
                repudiandae! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora dolorem aut atque voluptate vel sed quos, 
                nesciunt aperiam natus unde vero eaque rem! Perferendis illum consectetur, aliquam sapiente nesciunt magnam deleniti 
                repellat? <code>lorem ipsum dolor sit.</code>, lorem ipsum dolor sit amet consectetur overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                Browser Compatible
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
              <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipisicing elit. Optio a eius iusto cupiditate ducimus magnam 
                quibusdam nostrum porro beatae officia est, animi fuga. Excepturi, debitis vero ipsa accusamus eligendi libero nulla 
                repudiandae! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora dolorem aut atque voluptate vel sed quos, 
                nesciunt aperiam natus unde vero eaque rem! Perferendis illum consectetur, aliquam sapiente nesciunt magnam deleniti 
                repellat? <code>lorem ipsum dolor sit.</code>, lorem ipsum dolor sit amet consectetur overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
