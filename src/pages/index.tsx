import CharacterList from "@/components/characters/CharacterList";
import { getCharacters } from "@/queries/characters";

export async function getStaticProps() {
  const characters = await getCharacters();
  return { props: { characters } };
}

const HomePage = ({ characters }) => {
  return <CharacterList characters={characters.characters.results} />;
};

export default HomePage;
