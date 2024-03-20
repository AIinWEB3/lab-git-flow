const poems = [
  {
    author: "Cece",
    poem: "Roses are red \n Violets are blue \n Sunflowers are yellow \n I bet you were expecting something romantic but no -- these are just gardening facts.",
    image: "sunflower.jpeg",
  },
  {
    author: "Anvit",
    poem: "Roses are red \n Pizza sauce is too \n I ordered a large \n None of it is for you ",
    image: "pizza.jpeg",
  },
  {
    author: "Ernie",
    poem: "Roses are red \n Violets are blue \n Jerry Seinfeld is considering \n Making Bee Movie 2",
    image: "bee.jpeg",
  },

  {
    author: "Genesis",
    poem: "Roses are red \n Violets are blue \n Duck is using phone \n That looks like you",
    image: "duck.jpeg",
  },

  {
    author:" Rita Dove",
    poem:"Billie Holidays burned voice \n had as many shadows as lights, \n a mournful candelabra against a sleek piano, \n the gardenia her signature under that ruined face. \n (Now youre cooking, drummer to bass \n magic spoon, magic needle. \n Take all day if you have to \n with your mirror and your bracelet of song. \n Fact is, the invention of women under siege \n has been to sharpen love in the service of myth. \n If you cant be free, be a mystery.",
    image: "bee.jpeg"
  }

];

let displayPoems = (array) => {
  let html = "";
  let poemDiv = document.getElementById("poems");

  poemArray = array.forEach((poem) => {
    html += `
    <div class="poem">
        <img class="poem__image" src="./assets/${poem.image}"/>
        <div class="poem__author">
            Author: ${poem.author}
        </div>
        <div class="poem__content">
            ${poem.poem}
        </div>
    </div>
    `;
  });

  poemDiv.innerHTML = html;
};

displayPoems(poems);
