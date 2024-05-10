import { fetchPopularAnime } from "@/utils/http/myanimelist.http";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const { data } = await fetchPopularAnime();
  return (
    <div className="flex flex-wrap px-10 gap-5">
      {data.map((anime) => {
        const generalizedTitle = anime.node.title
          .split(" ")
          .join("_")
          .replace(/[:.]/g, "")
          .toLowerCase();
        const detailUrl = `/anime/${anime.node.id}/${generalizedTitle}`;
        return (
          <Link href={detailUrl} key={anime.node.id}>
            <div>
              <Image
                src={anime.node.main_picture.medium}
                width={150}
                height={200}
                alt={anime.node.title}
              />
              <h5>{anime.node.title}</h5>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
