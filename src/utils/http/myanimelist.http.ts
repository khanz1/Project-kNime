import { MAL_API_HOST, MAL_CLIENT_ID } from "@/constants";
import {
  Anime,
  FetchAnimeListParams,
  FetchAnimeListResponse,
  FetchPopularResponse,
} from "@/types/myanimelist.types";
import { RankingType } from "@/types/myanimelist.enum";

export const fetchPopularAnime = async (): Promise<FetchPopularResponse> => {
  const response = await fetch(
    `${MAL_API_HOST}/v2/anime/ranking?ranking_type=${RankingType.ALL}&limit=100`,
    {
      headers: {
        "X-MAL-CLIENT-ID": MAL_CLIENT_ID,
      },
    }
  );
  return await response.json();
};

export const fetchDetailAnime = async (animeId: string) => {
  const fields = `id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics`;
  const response = await fetch(
    `${MAL_API_HOST}/v2/anime/${animeId}?fields=${fields}`,
    {
      headers: {
        "X-MAL-CLIENT-ID": MAL_CLIENT_ID,
      },
    }
  );
  const data = await response.json();

  return data as Anime;
};

export const fetchAnimeList = async ({
  q,
  limit = 100,
}: FetchAnimeListParams) => {
  const response = await fetch(
    `${MAL_API_HOST}/v2/anime?q=${q}&limit=${limit}`,
    {
      headers: {
        "X-MAL-CLIENT-ID": MAL_CLIENT_ID,
      },
    }
  );
  const { data, paging } = await response.json();

  return {
    data,
    nextPage: paging.next,
  } as FetchAnimeListResponse;
};

export const fetchPopularManga = async (): Promise<FetchPopularResponse> => {
  const response = await fetch(
    `${MAL_API_HOST}/v2/manga/ranking?ranking_type=${RankingType.ALL}&limit=100`,
    {
      headers: {
        "X-MAL-CLIENT-ID": MAL_CLIENT_ID,
      },
    }
  );
  return await response.json();
};

export const fetchNextData = async (nextUrl: string) => {
  const response = await fetch(nextUrl, {
    headers: {
      "X-MAL-CLIENT-ID": MAL_CLIENT_ID,
    },
  });
  return await response.json();
};
