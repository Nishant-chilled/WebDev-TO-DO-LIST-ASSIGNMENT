📌 To-Do List Web App (With Ding Sound)
A simple and clean To-Do List application built using HTML, CSS, and JavaScript.
This project allows users to add tasks, delete tasks, and mark tasks as done — with a ding sound playing when a task is completed.
Designed as part of a Web Development assignment.

🌐 Live Demo
👉 https://nishant-chilled.github.io/WebDev-TO-DO-LIST-ASSIGNMENT/

🚀 Features
✔ Add New Tasks – Users can type a task and click Add (or press Enter).
✔ Mark Tasks as Done (with sound) – Each task has a "Mark as done" button.
When clicked:
The task gets a line-through
Fades visually
Plays a ding sound
Button becomes disabled
✔ Delete Tasks – A red X button deletes a task instantly.
✔ Modern UI – Dark theme, clean card layout, bright interactive buttons.


🛠️ Technologies Used
HTML5 – Structure
CSS3 – Styling
JavaScript (ES6) – Application logic
Audio API – Plays the ding sound

📁 Project Structure

/To-Do-List
│
├── index.html      # Main webpage
├── style.css       # Stylesheet
├── script.js       # JavaScript logic
└── ding.mp3        # Sound played on task completion



🎧 How the Sound Feature Works

The app uses JavaScript's built-in Audio() object:
const dingSound = new Audio("ding.mp3");

dingSound.currentTime = 0;  
dingSound.play();
The sound plays whenever the user marks a task as done.


📸 Preview
<img width="1728" height="1117" alt="Screenshot 2025-12-04 at 6 44 04 PM" src="https://github.com/user-attachments/assets/e48a59a0-8a42-426c-bb03-2069b943a767" />



🔮 Future Improvements
Add saving tasks using localStorage
Add priority labels (High, Medium, Low)
Add animations (fade-in, fade-out)
Add dark/light mode toggle


✨ Author
Nishant Borah
Web Development Assignment – To-Do List with Sound


🏁 Summary
This project demonstrates DOM manipulation, event handling, audio feedback, and UI design — all combined to make a clean and functional To-Do List application.
