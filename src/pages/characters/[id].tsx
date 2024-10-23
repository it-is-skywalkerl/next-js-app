import { Character } from "@/components/characters/Character";
import { getCharacterById } from "@/queries/characterById";
import { getCharacters } from "@/queries/characters";

export async function getStaticPaths() {
  const characters = await getCharacters();
  const paths = characters.characters.results.map((character) => ({
    params: { id: character.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const character = await getCharacterById({ id: params.id });
  return { props: { character } };
}

const CharacterDetails = ({ character }) => {
  return <Character character={character.character} />;
};

export default CharacterDetails;
