import ThreeButton from "../../3dButton";
import AwardsThreeComponent from "../ThreeComponents/AwardsThreeComponent";

export default function SocialProof() {
  const ObjAwards = [
    {
      winner: "Cate Blanchett",
      award: "AACTA International Awards, Best Actress",
    },
    { winner: "Tar", award: "American Film Institute Awards, Top 10" },
    {
      winner: "Todd Field",
      award: "Boston Society of Film Critics, Best Director",
    },
    {
      winner: "Cate Blanchett",
      award: "British Academy Film Awards, Best Leading Role Actress",
    },
    {
      winner: "Cate Blanchett",
      award: "Chicago Film Critics Association, Best Actress",
    },
    {
      winner: "Cate Blanchett",
      award: "Critics' Choice Movie Awards, Best Actress",
    },
    {
      winner: "Hildur Guðnadóttir",
      award: "Critics' Choice Movie Awards, Best Score",
    },
    {
      winner: "Cate Blanchett",
      award: "Florida Film Critics Circle, Best Actress",
    },
    {
      winner: "Nina Hoss",
      award: "Florida Film Critics Circle, Best Supporting Actress",
    },
    {
      winner: "Cate Blanchett",
      award: "Golden Globe Awards, Best Motion Picture Actress - Drama",
    },
    {
      winner: "Todd Field",
      award: "Gotham Independent Film Awards, Best Screenplay",
    },
    {
      winner: "Tar",
      award: "Hollywood Music in Media Awards, Best Musical Themed Film",
    },
    {
      winner: "Cate Blanchett",
      award: "Houston Film Critics Society, Best Actress",
    },
    {
      winner: "Florian Hoffmeister",
      award: "Independent Spirit Awards, Best Cinematography",
    },
    {
      winner: "Florian Hoffmeister",
      award:
        "International Film Festival of the Art of Cinematography Camerimage",
    },
    {
      winner: "Tár",
      award: "London Film Critics' Circle, Film of the Year",
    },
    {
      winner: "Todd Field",
      award: "London Film Critics' Circle, Director of the Year",
    },
    {
      winner: "Cate Blanchett",
      award: "London Film Critics' Circle, Actress of the Year",
    },
    {
      winner: "Tar",
      award: "Los Angeles Film Critics Association, Best Film",
    },
    {
      winner: "Todd Field",
      award: "Los Angeles Film Critics Association, Best Director",
    },
    {
      winner: "Cate Blanchett",
      award: "Los Angeles Film Critics Association, Best Lead Performance",
    },
    {
      winner: "	Todd Field",
      award: "Los Angeles Film Critics Association, Best Screenplay",
    },
    {
      winner: "	Tar",
      award: "Mill Valley Film Festival, Overall Audience Favorite ",
    },
    {
      winner: "	Tar",
      award: "National Society of Film Critics, Best Film",
    },
    {
      winner: "Cate Blanchett",
      award: "National Society of Film Critics, Best Actress",
    },
    {
      winner: "Todd Field",
      award: "National Society of Film Critics, Best Screenplay",
    },
    {
      winner: "Tar",
      award: "New York Film Critics Circle, Best Film",
    },
    {
      winner: "Cate Blanchett",
      award: "New York Film Critics Circle, Best Actress",
    },
    {
      winner: "Cate Blanchett",
      award: "Palm Springs International Film Festival, Best Actress",
    },
    {
      winner: "Cate Blanchett",
      award:
        "Santa Barbara International Film Festival, Outstanding Performer of the Year Award",
    },
    {
      winner: "Todd Field",
      award: "San Francisco Bay Area Film Critics Circle, Best Director",
    },
    {
      winner: "	Cate Blanchett",
      award: "San Francisco Bay Area Film Critics Circle, Best Actress",
    },
    {
      winner: "	Todd Fields",
      award:
        "San Francisco Bay Area Film Critics Circle, Best Original Screenplay	",
    },
    {
      winner: "Florian Hoffmeister",
      award: "San Francisco Bay Area Film Critics Circle, Best Cinematography	",
    },
    {
      winner: "Cate Blanchett",
      award: "Seattle Film Critics Society, Best Actress in a Leading Role",
    },
    {
      winner: "Cate Blanchett (Lydia Tar)",
      award: "Seattle Film Critics Society, Best Villain",
    },
    {
      winner: "Ernestine Hipper and Marco Bittner Rosser",
      award:
        "Set Decorators Society of America Awards, Best Achievement in Decor/Design of a Contemporary Feature Film",
    },
    {
      winner: "Cate Blanchett",
      award: "Toronto Film Critics Association, Best Actress",
    },
    {
      winner: "Cate Blanchett",
      award: "Washington D.C. Area Film Critics Association, Best Actress",
    },
    {
      winner: "Cate Blanchett",
      award: "Venice Film Festival, Volpi Cup for Best Actress",
    },
  ];
  return (
    <div className=" w-full r h-screen py-[4%] bg-black  flex-wrap flex justify-center ">
      <AwardsThreeComponent></AwardsThreeComponent>
      <div className="text-white  px-8 leading-[0.9]">
        <div className="font-PvcI text-[8vw] ml-[4%]">it won</div>
        <div className="font-PvcB text-[6vw]">Plenty</div>
        <ThreeButton text="Explore Awards"></ThreeButton>
      </div>
    </div>
  );
}
