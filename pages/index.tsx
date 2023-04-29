import dynamic from "next/dynamic";

const Tar = dynamic(() => import("../components/Tar"), { ssr: false });

import { Lenis as ReactLenis } from "@studio-freight/react-lenis";

/* const inter = Inter({ subsets: ["latin"] }); */

export default function Home() {
  return (
    <ReactLenis root options={{}}>
      <div className="h-fit w-full over">
        <Tar></Tar>
        <script src="https://unpkg.com/blotterjs-fork@0.1.0/build/blotter.min.js"></script>
      </div>
    </ReactLenis>
  );
}
