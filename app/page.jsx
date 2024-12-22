import Navbar from "@/component/Navbar";
import fs from "fs/promises";
// import Navbar from "@;
import Image from "next/image";

function Page() {
  return (
    <div>
      <Image
        alt="shinchan"
        src={
          "https://rukminim2.flixcart.com/image/850/1000/kl5hh8w0/poster/6/n/z/medium-cute-cartoon-wall-sticker-poster-interior-wall-poster-original-imagycg3dxbt2kms.jpeg?q=90&crop=false"
        }
        width={100}
        height={100}
      />
      <p>Its the home page</p>
    </div>
  );
}

export default Page;
