🧮 Modern Bootstrap Calculator
A sleek, functional web calculator built with HTML5, CSS3, JavaScript (ES6), and Bootstrap 5. This project features a responsive grid layout and handles basic arithmetic operations with logic to prevent common input errors.

🚀 Features
Basic Arithmetic: Addition, Subtraction, Multiplication, and Division.

Smart Input: Prevents multiple operators in a row (e.g., prevents 5++5).

Live Expression View: Shows your current calculation in a smaller secondary display.

Responsive Design: Styled with Bootstrap 5 to look great on any screen size.

Error Handling: Displays "Error" for invalid mathematical expressions.

🛠️ Tech Stack
HTML5 - Structure

CSS3 - Custom styling and Grid layout

Bootstrap 5 - UI components and responsiveness

JavaScript - Functional logic and DOM manipulation

📥 Installation & Usage
Clone the repository:

Bash
git clone git@github.com:404soul24/Calculator.git
Navigate to the directory:

Bash
cd Calculator
Open the project:
Simply open index.html in your favorite web browser.

🧠 How it Works
The calculator uses a single event listener attached to all buttons using querySelectorAll. It identifies the action (number, operator, clear, or equals) using CSS classes and the value attribute. Calculations are performed using the JavaScript eval() function for simplicity.

Created with ❤️ by 404soul24