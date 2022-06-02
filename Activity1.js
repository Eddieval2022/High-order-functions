const greeting = () => {
  console.log("Hello Codenation");
};

const repeat = (greeting, r) => {
  for (i = 0; i < r; i++) {
    greeting();
  }
};
repeat(greeting, 5);
