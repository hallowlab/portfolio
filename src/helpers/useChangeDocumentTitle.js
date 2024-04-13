import { useEffect } from "react";

export const useChangeDocumentTitle = (pageTitle) => {
  useEffect(() => {
    document.title = `Oscar Castillo | Personal Portfolio - ${pageTitle}`;
  }, [pageTitle]);
};
