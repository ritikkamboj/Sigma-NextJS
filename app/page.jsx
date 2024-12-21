import Navbar from "@/component/Navbar";
import fs from "fs/promises";
// import Navbar from "@;

function Page() {
  const data = fs.readFile(".gitignore");

  console.log(data);
  console.log("jai");

  data.then((data2) => console.log(data2.toString()));

  return (
    <div>
      <Navbar />
      <p> I am an server component</p>
    </div>
  );
}

export default Page;
