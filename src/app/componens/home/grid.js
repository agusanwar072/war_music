import React from "react";
import Image from "next/image";
import imagenonbg from "../assets/images/imagenonbg.png";
import horizontal from "../assets/images/horizontal.png";
import orang from "../assets/images/orang.png";
import panda from "../assets/images/panda.jpg";

const Grid = () => {
  const iMusic = [];
  //   const draw = [];
  //   const img = [imagenonbg, horizontal, orang, panda];

  //   for (let i = 0; i < img.length; i++) {
  //     draw.push(
  //       <Image key={i} src={img} width={200} height={200} alt="gambarMusik.png" />
  //     );
  //   }

  for (let index = 0; index < 19; index++) {
    iMusic.push(
      <div key={index} className="bg-black text-white rounded-lg">
        <Image
          src={imagenonbg}
          width={200}
          height={200}
          alt="gambarMusik.png"
        />
        <div className="px-8 pb-8">
          <h3 className="font-semibold">Hangover Cure</h3>
          <p>Trust us, you need this!</p>
        </div>
      </div>
    );
  }
  return (
    <div id="gridMusic" className="grid grid-cols-6 gap-5">
      {iMusic}
    </div>
  );
};

export default Grid;
