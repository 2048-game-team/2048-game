export const toggleFullscreen = (element: HTMLElement) => {
  if (!document.fullscreenElement) {
    element.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};
