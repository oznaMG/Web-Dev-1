document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById('textColorBtn').addEventListener('click', () => {
        document.getElementById("textChange").style.color = "blue";
    });

    
    const updateWindowSize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        document.getElementById("windowSize").textContent = `Width: ${width}, Height: ${height}`;
    };
    window.addEventListener('resize', updateWindowSize);
    updateWindowSize(); 

    
    document.getElementById('sumBtn').addEventListener('click', () => {
        const num1 = parseInt(document.getElementById("num1").value);
        const num2 = parseInt(document.getElementById("num2").value);
        const sum = num1 + num2;
        document.getElementById("sumResult").textContent = `Sum: ${sum}`;
    });

    
    document.getElementById('toggleBtn').addEventListener('click', () => {
        const element = document.getElementById("visibilityToggle");
        element.style.display = element.style.display === "none" ? "block" : "none";
    });

    
    document.getElementById('bgColorBtn').addEventListener('dblclick', () => {
        document.body.style.backgroundColor = "lightgrey";
    });

    
    document.getElementById('timerBtn').addEventListener('click', () => {
        const start = Date.now();
        setInterval(() => {
            const elapsed = ((Date.now() - start) / 1000).toFixed(1);
            document.getElementById("timer").textContent = `Elapsed time: ${elapsed} seconds`;
        }, 100);
    });
    

    
    document.getElementById('quoteBtn').addEventListener('click', () => {
        const quotes = ["Life is beautiful.", "Never give up.", "Believe in yourself.", "Stay positive.", "You can do it!"];
        const randomIndex = Math.floor(Math.random() * quotes.length);
        document.getElementById("randomQuote").textContent = quotes[randomIndex];
    });

    
    
document.getElementById('soundBtn').addEventListener('click', () => {
    const audio = new Audio('assets/sounds/button-10.mps'); 
    audio.play();
});
});
