import Image from "next/image";
import imagenonbg from "../assets/images/imagenonbg.png";
import Grid from "@/app/componens/home/grid";

const Content = () => {
  return (
    <div className="flex mt-[70px]">
      <div className="bg-green-200 w-[20%]"> </div>
      <div className="bg-primary w-[80%] ps-[35px] mb-[80px] pb-[50px]">
        <div>
          <h2 className="font-bold text-white text-3xl pt-[10px] py-[20px]">
            Playlist
          </h2>
          <Grid />
        </div>
      </div>
    </div>
  );
};

export default Content;
