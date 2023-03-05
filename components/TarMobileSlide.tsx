import Title6 from "../public/Data/Tar/Images/Title6.jpg";
import Title8 from "../public/Data/Tar/Images/Title8.jpg";
import Title9 from "../public/Data/Tar/Images/Title9.jpg";
import Title10 from "../public/Data/Tar/Images/Title10.jpg";
import Title13 from "../public/Data/Tar/Images/Title13.jpg";
import Title3 from "../public/Data/Tar/Images/Title3.jpg";

export default function TarMobileSlide() {
  const M = [
    { img: Title6, span: "col-span-2" },
    { img: Title8, span: "col-span-2" },

    { img: Title9 },
    { img: Title3 },
    { img: Title10 },
  ];
  return (
    <div className="w-full h-screen flex-col p-2 flex items-center justify-center sm:hidden">
      <div className="w-full h-2/4 grid hidden grid-rows-3 grid-flow-col gap-1">
        {M.map((item, index) => {
          return (
            <img
              className={`${item.span} border border-red-500 `}
              key={index}
              src={item.img.src}
            ></img>
          );
        })}
      </div>
      <div className="a font-Neue text-7xl text-red-500">Maestro</div>
      <div className="w-full h-fit mb-1 grid grid-cols-3 grid-flow-row gap-1">
        <img className="col-span-2" src={Title6.src}></img>
        <img src={Title9.src}></img>
      </div>
      <div className="h-fit w-full">
        <img src={Title10.src}></img>
      </div>
      <div className="w-full h-fit mt-1 grid grid-cols-3 grid-flow-row gap-1">
        <img src={Title3.src}></img>
        <img className="col-span-2" src={Title13.src}></img>
      </div>
    </div>
  );
}
