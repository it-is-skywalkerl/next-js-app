import { followCharacter } from "@/mutations/follow";
import { unfollowCharacter } from "@/mutations/unfollow";
import { getFollowedCharacters } from "@/queries/followedCharacters";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Character = ({ character }) => {
  const { image, name, id, status, location, gender, species, type, origin } =
    character;
  const [isFollowed, setIsFollowed] = useState<boolean>(undefined);

  const onFollow = async () => {
    try {
      await followCharacter({ id });
      setIsFollowed(true);
    } catch (error) {
      console.error("Error following character:", error.message);
      alert("Failed to follow the character. Please try again.");
    }
  };

  const onUnfollow = async () => {
    try {
      await unfollowCharacter({ id });
      setIsFollowed(false);
    } catch (error) {
      console.error("Error unfollowing character:", error.message);
      alert("Failed to unfollow the character. Please try again.");
    }
  };

  useEffect(() => {
    async function fetchData() {
      const followedCharacters = await getFollowedCharacters();
      const isPresent = followedCharacters.some(
        (followedCharacter) => followedCharacter.id === character.id
      );
      setIsFollowed(isPresent);
    }
    fetchData();
  }, [character]);

  return (
    <div className="p-4 h-full w-full flex flex-row flex-wrap gap-4 justify-center">
      <Image
        src={image}
        className="flex-1 h-full w-full"
        alt={name}
        height={700}
        width={500}
      />
      <div className="flex-1 flex flex-col font-black text-xl">
        <div>
          Name: <span className="italic font-normal">{name}</span>
        </div>
        <div>
          Status: <span className="italic font-normal">{status}</span>
        </div>
        <div>
          Gender: <span className="italic font-normal">{gender}</span>
        </div>
        <div>
          Species: <span className="italic font-normal">{species}</span>
        </div>
        <div>
          Type: <span className="italic font-normal">{type || "N/A"}</span>
        </div>
        <div>
          Location:
          <span className="italic font-normal">{location.name}</span>
        </div>
        <div>
          Origin: <span className="italic font-normal">{origin.name}</span>
        </div>
        <span>
          {isFollowed === false && (
            <button onClick={onFollow} className="flex px-1 follow-btn">
              Follow
            </button>
          )}
          {isFollowed === true && (
            <button onClick={onUnfollow} className="flex px-1 follow-btn">
              Unfollow
            </button>
          )}
        </span>
      </div>
    </div>
  );
};
