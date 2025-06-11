const musics = [
  {name: "Porque bem sei os planos que tenho para vocês, diz o Senhor... - Mal sabíamos que aquele momento, aquele olhar, aquele toque... seria o começo da nossa história. Mas Deus já sabia. Ele escreveu cada capítulo com amor, e hoje eu entendo: você sempre foi parte do plano dele pra mim... ", src: "https://files.catbox.moe/90pg77.mp3", cover: "https://i.postimg.cc/C1K5nxpD/Whats-App-Image-2025-06-08-at-18-42-37-1.jpg"},
  {name: "Quem encontra uma esposa, acha o bem e alcança a benevolência do Senhor... - Você é minha bênção diária, a melhor parte dos meus dias. Te ter é meu maior presente de Deus.", src: "https://files.catbox.moe/zofwhf.mp3", cover: "https://i.postimg.cc/jjf5T7X8/Whats-App-Image-2025-06-06-at-18-13-03.jpg"},
  {name: "Melhor é serem dois do que um... Com você ao meu lado, tudo se torna mais leve. A vida a dois com você é mais que amor: é um pedacinho do céu aqui na Terra...", src: "https://files.catbox.moe/mmobxs.mp3", cover: "https://i.postimg.cc/4dp4jHGz/Whats-App-Image-2025-06-08-at-18-42-34.jpg"},
  {name: "Eu sou do meu amado, e o meu amado é meu... Te pertencer com o coração e ser seu com alma inteira é o que Deus sonhou pra nós. Somos um amor escrito pelo Céu.", src: "https://files.catbox.moe/oqyvcc.mp3", cover: "https://i.postimg.cc/jjf5T7X8/Whats-App-Image-2025-06-06-at-18-13-03.jpg"},
  {name: "Confia no Senhor de todo o teu coração... Com você, eu aprendi que o amor e a fé caminham juntos. Entrego a Deus nosso relacionamento, porque sei que Ele tem planos lindos pra nós.", src: "https://files.catbox.moe/bn9uk0.mp3", cover: "https://i.postimg.cc/25yN4b3z/Whats-App-Image-2025-06-08-at-18-42-36-3.jpg"},
  {name: "Edifiquemos-nos uns aos outros... Nosso amor é construção diária, feita de carinho, respeito e fé. Ao seu lado, aprendi que amar é também crescer, juntos, com Deus como base. ", src: "https://files.catbox.moe/pdc42j.mp3", cover: "https://i.postimg.cc/hPHwQQgW/Whats-App-Image-2025-06-06-at-18-13-03-1.jpg"},
  {name: "O amor lança fora todo o medo... Seu amor é meu abrigo seguro, onde a alma encontra descanso. Com você, até os dias difíceis se enchem de paz.", src: "https://files.catbox.moe/s1wfht.mp3", cover: "https://i.postimg.cc/MZ0NfpHv/Whats-App-Image-2025-06-06-at-18-13-03-2.jpg"}
];

let currentMusicIndex = 0;
const audio = document.getElementById("audio-player");
const audioSource = document.getElementById("audio-source");
const musicName = document.getElementById("music-name");
const musicCover = document.getElementById("music-cover");

function updateMusic() {
  const current = musics[currentMusicIndex];
  audioSource.src = current.src;
  musicName.textContent = current.name;
  musicCover.src = current.cover;
  audio.load();
  audio.play();
}

function nextMusic() {
  currentMusicIndex = (currentMusicIndex + 1) % musics.length;
  updateMusic();
}

function prevMusic() {
  currentMusicIndex = (currentMusicIndex - 1 + musics.length) % musics.length;
  updateMusic();
}

updateMusic();

function togglePopup() {
  const popup = document.getElementById("love-note-popup");
  popup.style.display = popup.style.display === "block" ? "none" : "block";
}

const fullImageView = document.getElementById("full-image-view");
const fullImage = document.getElementById("full-image");

function openFullImage(img) {
  fullImage.src = img.src;
  fullImageView.style.display = "flex";
}

function closeFullImage() {
  fullImageView.style.display = "none";
}

document.body.addEventListener("click", function(e) {
  if(e.target.tagName.toLowerCase() === 'button' || e.target.tagName.toLowerCase() === 'audio' || e.target.closest('.music-player')) {
    return;
  }
  const heart = document.createElement("div");
  heart.classList.add("click-heart");
  heart.style.left = e.pageX + "px";
  heart.style.top = e.pageY + "px";
  heart.textContent = "💖";
  document.body.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 1000);
});

// Background animation
const canvas = document.getElementById("background-canvas");
const ctx = canvas.getContext("2d");
let width, height;

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

class Particle {
  constructor(x, y, size, speedY, type) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedY = speedY;
    this.type = type;
    this.alpha = 1;
  }
  update() {
    this.y += this.speedY;
    if (this.y > height + this.size) {
      this.y = -this.size;
      this.x = Math.random() * width;
      this.alpha = 1;
    }
    this.alpha -= 0.002;
    if (this.alpha < 0) this.alpha = 0;
  }
  draw() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    if (this.type === "star") {
      ctx.fillStyle = "#ffc0cb";
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      for (let i = 0; i < 5; i++) {
        ctx.lineTo(this.x + this.size * Math.cos((18 + i * 72) / 180 * Math.PI),
                   this.y - this.size * Math.sin((18 + i * 72) / 180 * Math.PI));
        ctx.lineTo(this.x + this.size / 2 * Math.cos((54 + i * 72) / 180 * Math.PI),
                   this.y - this.size / 2 * Math.sin((54 + i * 72) / 180 * Math.PI));
      }
      ctx.closePath();
      ctx.fill();
    } else if (this.type === "petal") {
      ctx.fillStyle = "#ffb6c1";
      ctx.beginPath();
      ctx.ellipse(this.x, this.y, this.size * 0.6, this.size * 1.2, Math.PI / 6, 0, 2 * Math.PI);
      ctx.fill();
    } else if (this.type === "balloon") {
      ctx.fillStyle = "#ff6699";
      ctx.beginPath();
      ctx.ellipse(this.x, this.y, this.size, this.size * 1.3, 0, 0, 2 * Math.PI);
      ctx.fill();
      ctx.strokeStyle = "#cc3366";
      ctx.beginPath();
      ctx.moveTo(this.x, this.y + this.size * 1.3);
      ctx.lineTo(this.x, this.y + this.size * 2);
      ctx.stroke();
    }
    ctx.restore();
  }
}

const particles = [];
for (let i = 0; i < 50; i++) {
  particles.push(new Particle(Math.random() * width, Math.random() * height, 7, 0.3 + Math.random() * 0.5, "star"));
}
for (let i = 0; i < 20; i++) {
  particles.push(new Particle(Math.random() * width, Math.random() * height, 10, 0.7 + Math.random() * 0.3, "petal"));
}
for (let i = 0; i < 10; i++) {
  particles.push(new Particle(Math.random() * width, Math.random() * height, 12, 0.9 + Math.random() * 0.4, "balloon"));
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}
animate();
const quizQuestions = [
  {
    question: "Qual foi o nosso primeiro encontro?",
    options: ["Fomos ao Shopping.", "Fomos Comer Açai.", "Fomos a Academia.", "Fomos ao Cinema."],
    answer: "Fomos Comer Açai.",
    image: "https://i.postimg.cc/MHKTRKkV/Whats-App-Image-2025-06-08-at-18-42-36.jpg"
  },
  {
    question: "Qual é o meu maior sonho?",
    options: ["Ser Jogador de Futebol!", "Arriscar Tudo até dar Certo!", "Fazer Faculdade!", "Virar Programador!"],
    answer: "Arriscar Tudo até dar Certo!",
    image: "https://i.postimg.cc/B6bk1dYt/Whats-App-Image-2025-06-08-at-18-42-36-2.jpg"
  },
  {
    question: "Qual minha cor preferida?",
    options: ["Preto", "Cinza", "Branco", "Azul"],
    answer: "Azul",
    image: "https://i.postimg.cc/jjf5T7X8/Whats-App-Image-2025-06-06-at-18-13-03.jpg"
  },
  {
    question: "Quantos dias por semana a gente se vê?",
    options: ["1 dias!", "3 dias! ", "5 dias!", "todos!"],
    answer: "5 dias!",
    image: "https://i.postimg.cc/63tF58RV/Whats-App-Image-2025-06-08-at-18-42-34-1.jpg"
  },
  {
    question: "Quem disse “eu te amo” primeiro?",
    options: ["LEONARDO", "LEONARDO", "LEONARDO", "ANNA"],
    answer: "LEONARDO",
    image: "https://i.postimg.cc/4dp4jHGz/Whats-App-Image-2025-06-08-at-18-42-34.jpg"
  },
  {
    question: "Qual foi o dia do nosso primeiro beijo?",
    options: ["26/02", "05/03", "11/03", "12/03"],
    answer: "11/03",
    image: "https://i.postimg.cc/HkfDT7Jh/Whats-App-Image-2025-06-06-at-18-13-05-3.jpg"
  },
  {
    question: "Qual é a nossa linguagem do Amor?",
    options: ["Toque fisico", "palavras de afirmação", "tempo de qualidade", "Atos de Serviço"],
    answer: "Toque fisico",
    image: "https://i.postimg.cc/63v9s2r9/Whats-App-Image-2025-06-06-at-18-13-04-2.jpg"
   },
  {
    question: "Qual é o maior sonho que queremos realizar juntos?",
    options: ["Ser bem sucedidos financeiramente!", "Termos nossa casa!", "Criar uma familia...", "Tudo Juntos!"],
    answer: "Tudo Juntos!",
    image: "https://i.postimg.cc/63tF58RV/Whats-App-Image-2025-06-08-at-18-42-34-1.jpg"
  },
  {
    question: "Você Me AMA?",
    options: ["SIM!", "SIM!", "SIM!", "SIM!"],
    answer: "SIM!",
    image: "https://i.postimg.cc/63tF58RV/Whats-App-Image-2025-06-08-at-18-42-34-1.jpg"
  },
  {
    question: "O que eu quero com você?",
    options: ["Viver cada momento", "Casar", "Construir uma vida", "TUDO ISSO JUNTOS!"],
    answer: "TUDO ISSO JUNTOS!",
    image: "https://i.postimg.cc/MGFtgX5K/Whats-App-Image-2025-06-08-at-18-42-35-2.jpg"
  }
];

let currentQuestion = 0;

function startQuiz() {
  document.getElementById("start-quiz-btn").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  showQuestion();
}

function showQuestion() {
  const q = quizQuestions[currentQuestion];
  document.getElementById("question-text").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  // Adiciona a imagem se houver
  const imgContainer = document.getElementById("question-image");
  if (q.image) {
    imgContainer.innerHTML = `<img src="${q.image}" alt="Imagem da pergunta" style="width: 100%; border-radius: 12px; margin-bottom: 15px; box-shadow: 0 0 10px #a64ca6;">`;
  } else {
    imgContainer.innerHTML = "";
  }

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => {
      if (option === q.answer) {
        btn.style.backgroundColor = "#6a0dad";
        btn.style.boxShadow = "0 0 12px #b266ff";
        setTimeout(() => {
          nextQuestion();
        }, 600);
      } else {
        btn.style.backgroundColor = "#990033";
        btn.style.boxShadow = "0 0 12px #990033";
        alert("Errado! Comooo Asimmmm Amorrrrrrrrrr😤");
      }
    };
    optionsDiv.appendChild(btn);
  });
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizQuestions.length) {
    showQuestion();
  } else {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("love-letter").style.display = "block";
  }
}

const startDate = new Date("2025-03-05T00:00:00"); // 🗓 data do início do namoro

  function updateLoveTimer() {
    const now = new Date();
    const diff = now - startDate;

    const minutes = Math.floor(diff / 1000 / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30.44); // média de dias por mês
    const years = Math.floor(months / 12);

    const displayMonths = months % 12;
    const displayDays = Math.floor(days - months * 30.44);
    const displayMinutes = minutes % 60;

    const timeString = `${years > 0 ? years + ' anos, ' : ''}${displayMonths} mêses, ${displayDays} dias e ${displayMinutes} minutos...`;

    const timerEl = document.getElementById("timer");
    if (timerEl) timerEl.textContent = timeString;
  }

  document.addEventListener("DOMContentLoaded", function () {
    updateLoveTimer();
    setInterval(updateLoveTimer, 60000); // atualiza a cada minuto
  });

