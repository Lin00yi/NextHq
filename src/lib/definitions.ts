export type TagsRes = {
  id: string;
  name: string;
  color: string;
  link: string;
};

export type ItemsRes = {
  id: string;
  name: string;
  description: string;
  link: string;
  githubLink: string;
  tagId: string;
  imgUrl?: string;
};
