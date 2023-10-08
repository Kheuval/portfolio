export const scrollSmooth = (event: MouseEvent) => {
  event.preventDefault();

  const targetId = (event.target as HTMLAnchorElement)
    .getAttribute("href")!
    .substring(1);

  const target = document.getElementById(targetId);

  // Scroll to the element with an offset, where 6 is the value in rem of the <main> element's padding-top
  window.scrollTo({
    behavior: "smooth",
    top:
      target!.getBoundingClientRect().top -
      document.body.getBoundingClientRect().top -
      6 * parseFloat(getComputedStyle(document.documentElement).fontSize),
  });
};
