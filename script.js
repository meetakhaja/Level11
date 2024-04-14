let users = [
  {
    profilePic:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1542190891-2093d38760f2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    penddingMessage: 4,
    location: "Delhi, India",
    name: "Raj",
    age: 23,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "writing",
      },
    ],
    bio: "Welcome to the website. If you're here, you're likely looking to find random words.",
    isfriends: "null",
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1502711701722-e02468fc4280?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    penddingMessage: 14,
    location: "Surat, India",
    name: "Samita",
    age: 22,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "writing",
      },
    ],
    bio: " While this tool isn't a word creator, it is a word generator that will generate random words for a variety of activities or uses.",
    isfriends: "null",
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1535737525997-df1c90ca41cb?q=80&w=1366&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1535401249975-b1bfc169ac92?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    penddingMessage: 8,
    location: "Bhopal, India",
    name: "Janvi",
    age: 16,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "writing",
      },
    ],
    bio: "Even better, it allows you to adjust the parameters of the random words to best fit your needs.",
    isfriends: "null",
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1536321115970-5dfa13356211?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1535419218759-c71f0a6015b3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    penddingMessage: 23,
    location: "Bangalore, India",
    name: "Meet",
    age: 20,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "writing",
      },
    ],
    bio: "The first option the tool allows you to adjust is the number of random words to be generated.",
    isfriends: "null",
  },
];

function select(elem) {
  return document.querySelector(elem);
}

let curr = 0;
let isAnimating = false;

function setData(index) {
  select(".prflimg img").src = users[index].profilePic;
  select(".badge h5").textContent = users[index].penddingMessage;
  select(".location h3").textContent = users[index].location;
  select(".name h1:nth-child(1)").textContent = users[index].name;
  select(".name h1:nth-child(2)").textContent = users[index].age;

  let clutter = "";
  users[index].interests.forEach(function (interest) {
    clutter += `<div
    class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3"
  >
    ${interest.icon}
    <h3 class="text-sm tracking-tighter capitalize">${interest.interest}</h3>
  </div>`;
  });
  select(".tags").innerHTML = clutter;

  select(".bio p").textContent = users[index].bio;
}

(function setInitial() {
  select(".maincard img").src = users[curr].displayPic;
  select(".incomingcard img").src = users[curr + 1]?.displayPic;

  setData(curr);

  curr = 2;
})();

function imageChange() {
  if (!isAnimating) {
    isAnimating = true;
    let tl = gsap.timeline({
      onComplete: function () {
        isAnimating = false;
        let main = select(".maincard");
        let incoming = select(".incomingcard");

        incoming.classList.remove("z-[2]");
        incoming.classList.add("z-[3]");
        incoming.classList.remove("incomingcard");

        main.classList.remove("z-[3]");
        main.classList.add("z-[2]");
        gsap.set(main, {
          scale: 1,
          opacity: 1,
        });

        if (curr === users.length) curr = 0;
        select(".maincard img").src = users[curr].displayPic;
        curr++;

        main.classList.remove("maincard");
        incoming.classList.add("maincard");
        main.classList.add("incomingcard");
      },
    });

    tl.to(
      ".maincard",
      {
        scale: 1.1,
        opacity: 0,
        ease: Circ,
        duration: 0.9,
      },
      "a"
    ).from(
      ".incomingcard",
      {
        scale: 0.9,
        opacity: 0,
        ease: Circ,
        duration: 1.1,
      },
      "a"
    );
  }
}

let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener("click", function () {
  imageChange();
  setData(curr - 1);
  gsap.from(".details .element", {
    y: "100%",
    stagger: 0.06,
    ease: Power4.easeInOut,
    duration: 1.5,
  });
});
accept.addEventListener("click", function () {
  imageChange();
  setData(curr - 1);
  gsap.from(".details .element", {
    y: "100%",
    stagger: 0.06,
    ease: Power4.easeInOut,
    duration: 1.5,
  });
});

(function containerCreator() {
  document.querySelectorAll(".element").forEach(function (element) {
    let div = document.createElement("div");
    div.classList.add(`${element.classList[1]}container`, `overflow-hidden`);
    div.appendChild(element);
    select(".details").appendChild(div);
  });
})();
