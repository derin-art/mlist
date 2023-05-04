import dynamic from "next/dynamic";

const Tar = dynamic(() => import("../components/Tar"), { ssr: false });
import { useLenis } from "@studio-freight/react-lenis";

/* const inter = Inter({ subsets: ["latin"] }); */

export default function Home() {
  return (
    <div className="h-fit w-full ">
      <Tar></Tar>
      <script src="https://unpkg.com/blotterjs-fork@0.1.0/build/blotter.min.js"></script>
    </div>
  );
}
