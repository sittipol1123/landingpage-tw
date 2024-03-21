import IndexCarousel from "@/components/carousel/IndexCarousel";
import { Metadata, ResolvingMetadata } from "next";
import Mainlayout from "@/components/layout/Mainlayout";

let maindata;

const testdata = async () => {
  const fetchdata = await fetch("https://gsi.fly.dev/characters");
  const res: Root = await fetchdata.json();
  maindata = res;
}
testdata();
console.log(maindata);


export async function generateMetadata(propsdata: string): Promise<Metadata> {
  const response = await fetch("https://gsi.fly.dev/characters");
  const data: Root = await response.json();
  return {
    title: data.results[0].name,
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

interface Props {
  data: Root;
}

export async function getCharacterData() {
  try {
    const response = await fetch("https://gsi.fly.dev/characters");
    const data: Root = await response.json();
    return <Page data={data} />;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

const Page = (props: Props) => {
  return (
    <Mainlayout>
      {props.data.results.map((val, key) => {
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
};

export default getCharacterData;