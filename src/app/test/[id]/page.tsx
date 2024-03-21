import { GetServerSidePropsContext } from "next";

export interface Result {
  id: number;
  name: string;
  title: string[];
  rarity: string;
  weapon: string;
  vision: string;
  model_type: string;
  birthday: string;
  constellation: string;
  region: string[];
  affiliation: string[];
  special_dish: string;
  how_to_obtain: string[];
  release_day: string;
  release_version: string;
  category: string;
  voice_actors: VoiceActor[];
  wiki_url: string;
}

export interface VoiceActor {
  English: string;
  Chinese: string;
  Japanese: string;
  Korean: string;
}

const getCharacterDetail = async (context: GetServerSidePropsContext) => {
  const id = context.params?.id;
  const response = await fetch(`https://gsi.fly.dev/characters/${id}`);
  const result: { result: Result } = await response.json();
  return <Page result={result.result} />;
};

const Page = (props: { result: Result }) => {
  //   console.log(props.result.model_type);
  return <>sittipol</>;
};

export default getCharacterDetail;
