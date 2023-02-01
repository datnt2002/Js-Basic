const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
  currentIndex: 0,

  songs: [
    {
      name: "Vet mua",
      singer: "Vu cat Tuong",
      image: "./assets/img/vetmua.jfif",
    },
    {
      name: "Attention",
      singer: "Charlie Puth",
      image: "./assets/img/Attention_(Charlie_Puth_song)_single_cover.svg.png",
    },
    {
      name: "Son tung",
      singer: "MTP",
      image: "./assets/img/hientai.jpg",
    },
    {
      name: "Son tung",
      singer: "MTP",
      image: "./assets/img/hientai.jpg",
    },
    {
      name: "Son tung",
      singer: "MTP",
      image: "./assets/img/hientai.jpg",
    },
    {
      name: "Son tung",
      singer: "MTP",
      image: "./assets/img/hientai.jpg",
    },
    {
      name: "Son tung",
      singer: "MTP",
      image: "./assets/img/hientai.jpg",
    },
  ],
  render: function () {
    var playlistElement = $(".playlist");
    var htmls = this.songs.map(function (song) {
      return `<div class="song">
      <div class="thumb" style="background-image: url('${song.image}')"></div>
      <div class="body">
        <h3 class="title">${song.name}</h3>
        <p class="author">${song.singer}</p>
      </div>
      <div class="option">
        <i class="fas fa-ellipsis-h"></i>
      </div>
    </div>`;
    });

    playlistElement.innerHTML = htmls.join("");
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },
  handleEvents: function () {
    const cd = $(".cd");
    const cdWidth = cd.offsetWidth;

    document.onscroll = function () {
      const scrollTop = document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;

      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };
  },
  loadCurrentSong: function () {
    const heading = $("header h2");
    const cdThumb = $(".cd-thumb");
    const audio = $("#audio");

    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
  },
  start: function () {
    this.defineProperties();
    this.handleEvents();
    this.loadCurrentSong();
    this.render();
  },
};

app.start();
