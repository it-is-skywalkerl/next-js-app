import CharacterList from "@/components/characters/CharacterList";
import { getFollowedCharacters } from "@/queries/followedCharacters";

export async function getServerSideProps() {
  const followedCharacters = await getFollowedCharacters();
  return { props: { followedCharacters } };
}

const Following = ({ followedCharacters }) => {
  return <CharacterList characters={followedCharacters} />;
};

export default Following;
