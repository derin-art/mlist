import Wearth from "@/public/Icons/Wearth";

type AwardsContProps = {
  award: string;
  winner: string;
};
export default function AwardsCont(props: AwardsContProps) {
  return (
    <div className="flex items-center justify-center r w-fit font-Neue">
      <div className="text-sm text-white a w-[60%] text-center top-[10%]">
        {props.award}
        <div className="mt-[5%] text-xs te">{props.winner}</div>
      </div>
      {Wearth("40%", "40%", "fill-blue-500")}
    </div>
  );
}
