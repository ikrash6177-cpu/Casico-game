let balance = parseInt(localStorage.getItem('chips')) || 1000;
document.getElementById('balance').innerText = balance;


function spin() {
    if (balance < 10) return alert("Low Chips!");
    balance -= 10;
    
    // Simple logic
    const s = ["🍒", "🍋", "7️⃣", "🔔", "💎"];
    const r = [s[Math.floor(Math.random()*s.length)], s[Math.floor(Math.random()*s.length)], s[Math.floor(Math.random()*s.length)]];
    
    document.getElementById('r1').innerText = r;
    document.getElementById('r2').innerText = r;
    document.getElementById('r3').innerText = r;


    if (r === r && r === r) {
        balance += 200;
        alert("JACKPOT!");
    }
    
    localStorage.setItem('chips', balance);
    document.getElementById('balance').innerText = balance;
}

