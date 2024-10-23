import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex nav-bar mt-4">
      <Link href={"/"} className="page-link mr-2">
        Home
      </Link>
      <Link href={"/following"} className="page-link mr-2">
        Following
      </Link>
      <Link href={"/contact-us"} className="page-link mr-2">
        Contact Us
      </Link>
    </div>
  );
};

export default Navbar;
