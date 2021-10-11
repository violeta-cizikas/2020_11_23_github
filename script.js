const data = [
  {
    image: "manhattan.jpg",
    title: "Manhattan",
    year: "1979",
    rating: "7.9",
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/JEoEGW4Hb9w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    description:
      "Manhattan is a 1979 American romantic comedy film directed by Woody Allen and produced by Charles H. Joffe.",
    comments: [
      {
        name: "Violeta",
        comment: "Perfect, awesome dialogues / my rating _ 9",
      },
    ],
  },
  {
    image: "dolls.jpg",
    title: "Dolls",
    year: "2002",
    rating: "7.6",
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/BjXQoZRbXXY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    description:
      "Dolls (ドールズ, Dōruzu) is a 2002 Japanese film written, edited and directed by Japanese director Takeshi Kitano. A highly stylized art film, Dolls is part of Kitano's non-crime film oeuvre, like 1991's A Scene at the Sea, and unlike most of his other films, he does not act in it. The film has been praised for its cinematography (Katsumi Yanagishima) and features costumes by Yohji Yamamoto.",
    comments: [
      {
        name: "Violeta",
        comment: "Requiring patience / my rating _ 9",
      },
    ],
  },
  {
    image: "spring.jpg",
    title: "Spring, Summer, Fall, Winter... and Spring",
    year: "2003",
    rating: "8",
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/jdRkhD_hmo0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    description:
      "Spring, Summer, Fall, Winter... and Spring (also known as Spring, Summer, Autumn, Winter... and Spring) is a 2003 South Korean film directed by Kim Ki-duk about a Buddhist monastery that floats on a lake in a pristine forest. The story is about the life of a Buddhist monk as he passes through the seasons of his life, from childhood to old age.",
    comments: [
      {
        name: "Violeta",
        comment: "awesome",
      },
      {
        name: "Violeta2",
        comment: "My rating _ 11 of 10",
      },
    ],
  },
  {
    image: "only_lovers_left_alive.jpg",
    title: "Only Lovers Left Alive",
    year: "2013",
    rating: "7.3",
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ycOKvWrwYFo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    description:
      "Married for centuries and now living half a world apart, two vampires wake as the sun goes down. Adam sits holding a lute, in his cluttered Detroit Victorian, as Eve wakes up in her bedroom in Tangier, surrounded by books. Rather than feeding on humans directly, they are dependent on local suppliers of the good stuff, for fear of blood contaminated by the 21st century environment. Adam, still a famous musician, also fears exposure, visiting a local blood bank in the dead of night in disguise as Dr. Faust, bribing Dr. Watson for his coveted O negative. Eve relies on their old friend, the author Christopher Marlowe, who faked his death in 1593 and now lives under the protection of a protégé.",
    comments: [
      {
        name: "Violeta",
        comment: "true love / avesome / my rating _ 11 of 10",
      },
    ],
  },
  {
    image: "the_limits_of_control.jpg",
    title: "The limits of control",
    year: "2009",
    rating: "6.3",
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/uKB7V86grMg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    description:
      "The Limits of Control is a 2009 American film written and directed by Jim Jarmusch, starring Isaach de Bankolé as a solitary assassin, carrying out a job in Spain.In an airport, Lone Man (Isaach de Bankolé) is being instructed on his mission by Creole (Alex Descas). The mission itself is left unstated and the instructions are cryptic, including such phrases as Everything is subjective, The universe has no center and no edges; reality is arbitrary, and Use your imagination and your skills. After the meeting in the airport he travels to Madrid and then on to Seville, meeting several people in cafés and on trains along the way.",
    comments: [
      {
        name: "Violeta",
        comment: "awesome / my rating _ 15 of 10",
      },
    ],
  },
  {
    image: "paterson.jpg",
    title: "Paterson",
    year: "2016",
    rating: "8.4",
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/m8pGJBgiiDU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    description:
      "The film spans one week, beginning with Monday, in the life of Paterson, a bus driver in Paterson, New Jersey. Every day follows much the same pattern: Paterson gets up early and goes to work, where he listens to passengers talking and, during pauses, writes poetry in a notebook he carries with him. After work he walks Marvin, his wife's dog, and stops for a beer at Shades Bar, where he interacts with the other patrons and the owner, Doc (Barry Shabaka Henley).",
    comments: [
      {
        name: "Violeta",
        comment: "Movie about life / my ratimg _ 9",
      },
    ],
  },
];

let button2 = document.getElementsByClassName("watch");
let button3 = document.getElementById("back");
let button4 = document.getElementsByClassName("submit");

let container = document.getElementById("container");
let container2 = document.getElementById("containerWindow");

let cards = document.getElementsByClassName("cards")[0]; //let gauna 1-na elementa

function showMovies(event) {
  cards.innerHTML = "" //istrina turini ir padaro tusciu elementu
  data.map((item, index) => { //pridedami nauji elementai (keiciamas turinys)
    cards.innerHTML += `
      <div class="container2" id="${index}">

        <div class="leftCardSideList" style="background-image:url(${item.image})"></div>  

        <div class="rightCardSide">

          <span class="title">${item.title}</span>
          <span class="year">${item.year}</span>
          <span class="rating">${item.rating}</span>
          <span class="comments">comments:${item.comments.length}</span>

          <button class="watch" onclick="secondWindow(event)">WATCH!</button>

        </div> 

      </div>
  `
      })
  }

showMovies()

function secondWindow(event) {
  // console.log(event.composedPath())
  let selectedMovieId = Number(event.composedPath()[2].id)
  let item = data[selectedMovieId]
  container.style.display = 'none'
  container2.style.display = 'flex'
  container2.innerHTML = `
    <div class="containerLeftSide">
        
      <button id="back" onclick="firstWindow()
      ">BACK TO LIST</button>

      <div class="leftCardSide" style="background-image:url(${item.image})"></div> 

    </div>

    <div class="containerRightSide">
      
            <span class="title">${item.title}</span>
            <hr>
            <span class="year">${item.year}</span>
            <span class="rating">${item.rating}</span>
            <span class="description">${item.description}</span>
            ${item.video}

            <span class="formlabel">Your name:</span>
            <input type="text" id="nameInput">
            <span class="formlabel">Your comment:</span>
            <input type="text" id="commentInput">

            <button class="submit">Submit</button>

            <div class="commentsBox">

            ${item.comments.map(comment => {
              return `<span class="author">${comment.name}</span>
              <p class="paragraph">${comment.comment}</p>`
            }).join('')}
            
            </div>
    </div>
  `
}

function firstWindow() {
  container.style.display = 'block'
  container2.style.display = 'none'
}


