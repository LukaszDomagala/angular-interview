export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: Array<string>;
  };
}

export interface BookDetails {
  id: string;
  volumeInfo: {
    dimensions: {
      height: string,
      width: string,
      thickness: string,
    }
  };
}