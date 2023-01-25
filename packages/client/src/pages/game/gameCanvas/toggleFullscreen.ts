interface DocumentWithFullscreen extends Document {
  mozFullScreenElement?: Element;
  webkitFullscreenElement?: Element;
  mozCancelFullScreen?: () => void;
  webkitExitFullscreen?: () => void;
}

function isFullScreen(): boolean {
  const doc = document as DocumentWithFullscreen;
  return !!(
    doc.fullscreenElement ||
    doc.mozFullScreenElement ||
    doc.webkitFullscreenElement
  );
}

interface DocumentElementWithFullscreen extends HTMLElement {
  mozRequestFullScreen?: () => void;
  webkitRequestFullscreen?: () => void;
}

function requestFullScreen(element: DocumentElementWithFullscreen) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  }
}

function exitFullScreen(doc: DocumentWithFullscreen) {
  if (doc.exitFullscreen) {
    doc.exitFullscreen();
  } else if (doc.webkitExitFullscreen) {
    doc.webkitExitFullscreen();
  } else if (doc.mozCancelFullScreen) {
    doc.mozCancelFullScreen();
  }
}

export const toggleFullscreen = (element: DocumentElementWithFullscreen) => {
  if (isFullScreen()) {
    exitFullScreen(document);
  } else {
    requestFullScreen(element);
  }
};
