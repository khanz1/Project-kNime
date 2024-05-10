interface Picture {
  medium: string;
  large: string;
}

interface Node {
  id: number;
  title: string;
  main_picture: Picture;
}

interface Ranking {
  rank: number;
}

export interface PopularData {
  ranking: Ranking;
  node: Node;
};

interface AlternativeTitles {
  synonyms: string[];
  en: string;
  ja: string;
}

interface Genre {
  id: number;
  name: string;
}

interface StartSeason {
  year: number;
  season: string;
}

interface Broadcast {
  day_of_the_week: string;
  start_time: string;
}

interface Related {
  node: Node;
  relation_type: string;
  relation_type_formatted: string;
};

interface Studio {
  id: number;
  name: string;
}

interface Statistics {
  status: {
    watching: string;
    completed: string;
    on_hold: string;
    dropped: string;
    plan_to_watch: string;
  };
  num_list_users: number;
}

interface Recommendation {
  node: Node;
  num_recommendations: number;
}

export interface Anime {
  id: number;
  title: string;
  main_picture: Picture;
  alternative_titles: AlternativeTitles;
  start_date: string;
  end_date: string;
  synopsis: string;
  mean: number;
  rank: number;
  popularity: number;
  num_list_users: number;
  num_scoring_users: number;
  nsfw: string;
  created_at: string;
  updated_at: string;
  media_type: string;
  status: string;
  genres: Genre[];
  num_episodes: number;
  start_season: StartSeason;
  broadcast: Broadcast;
  source: string;
  average_episode_duration: number;
  rating: string;
  pictures: Picture[];
  background: string;
  related_anime: Related[];
  related_manga: Related[];
  recommendations: Recommendation[];
  studios: Studio[];
  statistics: Statistics;
};


export interface FetchAnimeListParams {
  q: string;
  limit: number;
}

export interface FetchAnimeListResponse {
  data: Anime[];
  nextPage: string;
}

export interface FetchPopularResponse {
  data: PopularData[];
  paging: Paging;
}

interface DataNode {
  node: Node;
  ranking: Ranking;
}

interface Paging {
  next: string;
}

export interface AnimeData {
  data: DataNode[];
  paging: Paging;
}
