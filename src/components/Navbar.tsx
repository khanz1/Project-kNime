import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="h-10">
      <ul className="flex gap-10 my-auto">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/anime">Anime List</Link>
        </li>
        <li>Manga List</li>
        <li>Anime News</li>
        <li>Anime Fact</li>
        <li>Anime Quotes</li>
        <li>Anime Waifu</li>
        <li>Anime Gif</li>
        <li>Anime Neko</li>
      </ul>
    </nav>
  );
};
