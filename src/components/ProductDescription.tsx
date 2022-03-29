import React from "react";
import logoMastercraft from "../assets/images/logo-mastercraft.svg";
type ProductDescriptionProps = {
  title: string;
  pitch: string;
  toggle: () => void;
};

const ProductDescription = (props: ProductDescriptionProps) => {
  return (
    <section className=" bg-white rounded-md flex flex-col items-center text-center px-12 pb-12 pt-14 relative">
      <img src={logoMastercraft} alt="" className="absolute -top-7" />
      <h1 className="text-3xl font-bold pb-4">{props.title}</h1>
      <p className="pb-10">{props.pitch}</p>
      <div className="flex flex-row justify-between w-full">
        <button
          className="bg-moderate-cyan hover:bg-dark-cyan btn-base"
          onClick={props.toggle}
        >
          Back this project
        </button>
        <button className=" bg-background-white btn-base pl-16 relative text-dark-gray">
          <svg
            width="56"
            height="56"
            xmlns="http://www.w3.org/2000/svg"
            style={{ float: "left" }}
            className="absolute left-0 top-0"
          >
            <g fill="none" fill-rule="evenodd">
              <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
              <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
            </g>
          </svg>
          Bookmark
        </button>
      </div>
    </section>
  );
};

export default ProductDescription;
