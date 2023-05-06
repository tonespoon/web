export const formatReviewDate = (timestamp: number) => {
  const reviewDate = new Date(timestamp * 1000);
  const day = reviewDate.getDate();
  const month = reviewDate.toLocaleString("en-US", { month: "long" });
  const year = reviewDate.getFullYear();

  return { day, month, year };
};
