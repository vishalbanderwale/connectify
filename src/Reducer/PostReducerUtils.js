export const trendingPost = (post, sort) => {
  //   console.log(post);
  if (sort === "Trending") {
    return post
      ?.filter((f) => f?.likes?.likeCount !== 0)
      .sort((a, b) => b?.likes?.likeCount - a?.likes?.likeCount);
  }

  if (sort === "Latest") {
    return post?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  return post;
};
