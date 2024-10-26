const data = [
  {
    name: "vikram",
    class: 10,
    githubLink: "not sure",
    address: "address",
  },
  {
    name: "vikram",
    class: 10,
    githubLink: "not sure",
    address: "address",
  },
];

data.forEach((value) => {
  document.body.innerHTML += `
<p>Name: ${value.name}</p>
<p>class: ${value.class}</p>
<button>github link: ${value.githubLink}</button>
<p>address: ${value.address}</p>
`;
});
