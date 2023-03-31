import Title11 from "../../../public/Data/Tar/Images/Title11.jpg";
import Image from "next/image";

export default function MobileTitle() {
  return (
    <div className="w-full r h-screen flex items-center justify-center overflow-hidden sm:hidden">
      <div className="flex a top-4 justify-around w-full">
        <div className=" text-black font-Neue  ">Todd Fields</div>
        <div className=" text-black font-Neue  ">Tár</div>

        <div className=" text-black font-Neue  ">7/10/22</div>
      </div>

      <div className="a -right-1/4 w-full">
        <Image
          src={Title11.src}
          width={400}
          height={400}
          className="w-full "
          alt="Image of Tar"
        ></Image>
      </div>
      <div className="a  w-fit h-fit font-Climate text-[50vw] text-blue-700 ">
        tár
      </div>

      <div className=" a bottom-10 text-gray-300 text-xs xs:text-base font-Neue">
        A film by Todd Fields, runtime: 158 mins
      </div>
    </div>
  );
}
