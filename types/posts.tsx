export interface PostType {
  id: number,
  title: string,
  body: string,
  imgUrl?: string 
}

export type PostListType = PostType[] | null
