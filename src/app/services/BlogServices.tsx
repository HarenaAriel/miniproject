import Blog from "../models/Blog";

const fakeData: Blog[] = [
  {
    id: 1,
    title: "Blog 1",
    author: "Ariel",
    body: "This is body for Blog 1",
  },
  {
    id: 2,
    title: "Blog 2",
    author: "Ariel",
    body: "This is body for Blog 2",
  },
];

function loadData(): Promise<Blog[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataToLoad = resolve(fakeData);
      return dataToLoad;
    }, 2000);
  });
}

export { loadData };
