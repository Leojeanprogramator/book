@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

html, body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  font-family: 'Dancing Script', cursive;
  overflow-x: hidden;
  background: #0b0012; /* fundo bem escuro */
  color: #d1c4e9; /* roxo suave de leitura */
  text-align: center;
  cursor: pointer;
  position: relative;
}

h1 {
  font-size: 3em;
  color: #9d4edd;
  margin-top: 30px;
  text-shadow: 0 0 15px #5f0f40;
}

p.love-message {
  font-size: 1.4em;
  color: #b388eb;
  margin-bottom: 20px;
  text-shadow: 0 0 10px #7b2cbf;
}

.music-player, .gallery, .love-note-btn {
  background: rgba(75, 0, 130, 0.1);
  box-shadow: 0 0 18px rgba(125, 70, 190, 0.5);
  border-radius: 20px;
  margin: 20px auto;
  padding: 20px;
  width: 280px;
  transition: transform 0.3s ease, box-shadow 0.3s;
}

.music-player:hover, .gallery:hover, .love-note-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px #9d4edd;
}

.music-cover img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 0 18px #5a189a;
}

audio {
  width: 100%;
  margin-top: 10px;
  filter: brightness(0.8) saturate(1.2);
  border-radius: 15px;
}

p.music-name {
  margin-top: 10px;
  font-size: 1.1em;
  color: #c77dff;
  text-shadow: 0 0 10px #7209b7;
}

button {
  background: #5f0f40;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  border-radius: 15px;
  margin: 5px;
  cursor: pointer;
  color: white;
  transition: background 0.3s ease, box-shadow 0.3s;
  box-shadow: 0 0 12px #7b2cbf;
}

button:hover {
  background: #7b2cbf;
  box-shadow: 0 0 18px #c77dff;
}

.photo-gallery h2 {
  color: #9d4edd;
  margin-bottom: 10px;
  text-shadow: 0 0 15px #5a189a;
}

.thumbnails {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}

.thumbnails img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 12px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: 0.3s;
  box-shadow: 0 0 10px #5a189a;
}

.thumbnails img:hover {
  border-color: #7209b7;
  transform: scale(1.1);
  box-shadow: 0 0 20px #7209b7;
}

.full-image-view {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(10,0,20,0.9);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 999;
  cursor: zoom-out;
}

.full-image-view img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 20px;
  box-shadow: 0 0 30px #7b2cbf;
}

.popup {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 320px;
  transform: translate(-50%, -50%);
  background: #240046;
  color: #d0bdf4;
  padding: 25px 20px;
  border-radius: 15px;
  box-shadow: 0 0 25px #5f0f40;
  z-index: 1000;
  animation: fadeIn 0.5s ease;
  text-align: center;
  font-size: 1.2em;
}

.popup h2 {
  margin-top: 0;
  font-family: 'Dancing Script', cursive;
  color: #c77dff;
}

.popup button {
  background: #5f0f40;
  color: white;
  margin-top: 20px;
  box-shadow: 0 0 15px #7209b7;
  padding: 10px 20px;
  border-radius: 15px;
  cursor: pointer;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translate(-50%, -60%); }
  to { opacity: 1; transform: translate(-50%, -50%); }
}

.click-heart {
  position: absolute;
  font-size: 2em;
  color: #c77dff;
  animation: floatUp 1s ease forwards;
  pointer-events: none;
  user-select: none;
  z-index: 1500;
}

@keyframes floatUp {
  0% { opacity: 1; transform: translateY(0) scale(1); }
  100% { opacity: 0; transform: translateY(-120px) scale(1.5); }
}

canvas#background-canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
}

#quiz-section {
  margin-top: 40px;
}

#start-quiz-btn {
  background: #7b2cbf;
  padding: 15px 25px;
  border-radius: 20px;
  font-size: 1.2em;
  color: white;
  box-shadow: 0 0 12px #9d4edd;
  transition: 0.3s;
}

#start-quiz-btn:hover {
  background: #9d4edd;
  transform: scale(1.05);
}

#quiz-container {
  background: rgba(40, 0, 60, 0.6);
  border-radius: 15px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 0 15px #5f0f40;
  max-width: 500px;
  margin: 20px auto;
}

#question-text {
  font-size: 1.4em;
  color: #e0d4f7;
  margin-bottom: 20px;
}

#options button {
  display: block;
  background: #7209b7;
  border: none;
  margin: 10px auto;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 1em;
  cursor: pointer;
  color: white;
  box-shadow: 0 0 10px #5a189a;
}

#options button:hover {
  background: #9d4edd;
}

#love-letter {
  background: #1e0033;
  color: #d1c4e9;
  padding: 30px;
  margin: 30px auto;
  border-radius: 20px;
  max-width: 600px;
  box-shadow: 0 0 20px #5a189a;
}

.letter-content {
  text-align: left;
  font-size: 1.2em;
  line-height: 1.6;
  max-height: 500px;
  overflow-y: auto;
}

#love-timer {
  margin-top: 20px;
  padding: 20px;
  background: rgba(125, 70, 190, 0.1);
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(157, 78, 221, 0.6);
  width: 90%;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  transition: transform 0.3s ease, box-shadow 0.3s;
}

#love-timer:hover {
  transform: scale(1.03);
  box-shadow: 0 0 25px #c77dff;
}

.timer-text {
  font-size: 1.4em;
  color: #e0b3ff;
  text-shadow: 0 0 10px #800080;
  margin-bottom: 15px;
}

.timer-photo {
  width: 100%;
  height: 300px; /* altura maior */
  object-fit: cover;
  border-radius: 15px;
  border: 3px solid #e0b3ff;
  box-shadow: 0 0 18px rgba(125, 70, 190, 0.7);
}


