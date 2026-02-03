export const formatReadableDate = (dateStr) => {
  if (!dateStr) return "";

  const [day, month, year] = dateStr.split("/");

  const date = new Date(year, month - 1, day);

  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
