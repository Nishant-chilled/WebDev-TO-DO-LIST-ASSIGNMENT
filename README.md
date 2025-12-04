📌 To-Do List Web App (With Ding Sound)
A simple and clean To-Do List web application built using HTML, CSS, and JavaScript.
This project allows users to add tasks, delete tasks, and mark tasks as completed — with a ding sound playing when a task is marked done.
Designed as part of a Web Development assignment.

🚀 Features

✔ Add New Tasks
Users can type a task and click Add (or press Enter) to insert it into the list.

✔ Mark Tasks as Done (With Sound)
Each task includes a "Mark as done" button.
When clicked:
The task fades & gets a line-through
A ding sound is played
The button becomes disabled and shows Done

✔ Delete Tasks
Every task includes a red X button to delete it instantly.

✔ Clean & Modern UI
Dark background
Highlighted buttons
Easy-to-read layout
Responsive structure

🛠️ Technologies Used
HTML5 – structure
CSS3 – design and layout
JavaScript (ES6) – functionality
Audio API – to play the ding sound

📁 Project Structure
/To-Do-List
│
├── index.html      # Main webpage
├── style.css       # Stylesheet
├── script.js       # JavaScript logic
└── ding.mp3        # Sound played when completing tasks

📷 Preview
<img width="1728" height="1117" alt="Screenshot 2025-12-04 at 6 44 04 PM" src="https://github.com/user-attachments/assets/138bdf92-4fa2-4dd5-8d70-fa823ffdf3c0" />

🎧 How the Sound Feature Works
The project uses the built-in JavaScript Audio() object:
const dingSound = new Audio("ding.mp3");
The sound plays when a task is marked as done:
dingSound.currentTime = 0;
dingSound.play();

🔧 How to Use the App
Type a task into the input box
Click Add or press Enter
Click Mark as done to finish it
Click X to delete the task
Enjoy the ding sound when completing tasks ✨

📌 Future Improvements (Optional)
Add localStorage to save tasks after refreshing
Add dark/light mode toggle
Add priority levels for tasks
Add animations for task creation & deletion

🧑‍💻 Created By
Nishant Borah
Web Development Assignment – To-Do List with Sound
