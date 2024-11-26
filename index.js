const sentences = [
    "so many books, so little time.",
    "A room without books is like a body without a soul.",
    "You only live once, but if you do it right, once is enough.",
    "Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself",
    "It is better to be hated for what you are than to be loved for what you are not.",
];

const writer = [
    "Frank Zappa",
    "Marcus Tullius Cicero",
    "Mae West",
    "C.S. Lewis, The Four Loves",
    "Andre Gide, Autumn Leaves",
]

function generateQuote(){
    const randomIndex = Math.floor(Math.random() * sentences.length);
    document.getElementById("Quote").textContent = sentences[randomIndex];
    document.getElementById("writer").textContent = writer[randomIndex];
}