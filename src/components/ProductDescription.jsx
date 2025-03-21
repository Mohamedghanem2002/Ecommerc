import React from "react";

const ProductDescription = () => {
  return (
    <div className="ring-1 ring-slate-900/10 rounded-lg">
      <div className="flex gap-3">
        <button className="medium-14 p-3 w-32 border-b-2 border-secondary">
          Description
        </button>
        <button className="medium-14 p-3 w-32">Care Guide</button>
        <button className="medium-14 p-3 w-32">Color Guide</button>
      </div>
      <hr className="h-[1px] w-full" />
      <div className="flex flex-col gap-3 p-3">
        <div>
          <h5 className="h5">Detail</h5>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            veritatis enim, quia animi, aspernatur reprehenderit quibusdam est
            laboriosam quisquam tempora error saepe ipsam expedita natus
            repellat ratione eum provident exercitationem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, neque?
          </p>
        </div>
        <div>
          <h5 className="h5"> Benefit</h5>
          <ul className="list-disc pl-5 text-sm text-gray-30 flex flex-col gap-1">
            <li>
              High-quality materials ensurs long-lasting durability and comfort.
            </li>
            <li>
              High-quality materials ensurs long-lasting durability and comfort.
            </li>
            <li>
              High-quality materials ensurs long-lasting durability and comfort.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
