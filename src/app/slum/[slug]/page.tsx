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

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const response = await fetch(`https://gsi.fly.dev/characters/${slug}`);
  const result: { result: Result } = await response.json();
  return (
    <>
      <h1>{result.result.name}</h1>
    </>
  );
}
