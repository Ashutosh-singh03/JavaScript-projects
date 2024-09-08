let button=document.getElementById('new-quote')
let text=document.getElementById('quote-text')
let authors=document.getElementById('quote-author')
let quotes=["The only way to do great work is to love what you do","Success is not final, failure is not fatal: It is the courage to continue that counts","Don’t watch the clock; do what it does. Keep going.","Believe you can and you’re halfway there." ,"Dream big and dare to fail.","It always seems impossible until it’s done.","Success usually comes to those who are too busy to be looking for it." ,"Start where you are. Use what you have. Do what you can.","The secret of getting ahead is getting started." ]
let author=["Steve Jobs","Winston Churchil","Sam Levenson","Theodore Roosevelt","Norman Vaughan","Nelson Mandela","Henry David Thoreau","Arthur Ashe"," Mark Twain"]
function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return array[randomIndex];
}
function getRandomAuthor(array) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return array[randomIndex];
}
button.addEventListener('click',()=>{
   text.innerHTML=getRandomElement(quotes);
   authors.innerHTML="—"+(getRandomAuthor(author));

})