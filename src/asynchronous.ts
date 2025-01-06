const makePromise = () => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "data fetched successfully";
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch data");
    }
  });
};
