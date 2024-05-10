import { fetchDetailAnime } from "@/utils/http/myanimelist.http";

type PageProps = {
  params: {
    id: string;
    title: string;
  }
}

export default async function Page({ params }: PageProps) {
  const data = await fetchDetailAnime(params.id);
  return (
    <div className="flex flex-wrap px-10 gap-5">{JSON.stringify(data, null, 4)}</div>
  );
}
