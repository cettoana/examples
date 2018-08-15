const start = () => {
  const tap = () => new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  })
    .then(() => tap());

  tap();
};

start();
