import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div>You Are Lost</div>
      <div>
        <Link href={"/"} className="underline">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
