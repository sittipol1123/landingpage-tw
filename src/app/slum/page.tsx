import IndexCarousel from "@/components/carousel/IndexCarousel";
import { Metadata } from "next";
import Mainlayout from "@/components/layout/Mainlayout";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "slum page",
    description: "test",
  };
}

export interface Result {
  id: number;
  name: string;
  rarity: string;
  weapon: string;
  vision: string;
  wiki_url: string;
}
export interface Root {
  page: number;
  results: Result[];
  total_results: number;
  total_pages: number;
}

export default async function Slum(): Promise<JSX.Element> {
  const response = await fetch("https://gsi.fly.dev/characters");
  const data: Root = await response.json();
  return (
    <Mainlayout>
      {data.results.map((val, key) => {
        return (
          <div className="max-w-sm rounded overflow-hidden shadow-lg" key={key}>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{val.name}</div>
              <p className="text-gray-700 text-base">{val.weapon}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{val.vision}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{val.weapon}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{val.name}
              </span>
            </div>
          </div>
        );
      })}
      {/* <IndexCarousel></IndexCarousel> */}
    </Mainlayout>
  );
}
