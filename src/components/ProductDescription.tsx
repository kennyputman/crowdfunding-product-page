import React from "react";

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
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
          Back this project
        </button>
        <button className=" bg-gray-400  text-white font-bold py-2 px-6 rounded-full">
          Bookmark
        </button>
      </div>
    </section>
  );
};

export default ProductDescription;
