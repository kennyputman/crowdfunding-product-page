import React, { Dispatch, SetStateAction } from "react";

type ProductDescriptionProps = {
  title: string;
  pitch: string;
};

const ProductDescription = (props: ProductDescriptionProps) => {
  return (
    <section className=" bg-white rounded-md flex flex-col items-center text-center px-12 pb-12 pt-14">
      <h1 className="text-3xl font-bold pb-4">{props.title}</h1>
      <p className="pb-10">{props.pitch}</p>
      <div className="flex flex-row justify-between w-full">
        <button className="bg-moderate-cyan hover:bg-dark-cyan btn-base"
       >
          Back this project
        </button>
        <button
          className=" bg-gray-400 btn-base"
          
        >
          Bookmark
        </button>
      </div>
    </section>
  );
};

export default ProductDescription;
