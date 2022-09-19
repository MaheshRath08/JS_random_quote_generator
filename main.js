const quotes = [
    {
        quote:"I suppose leadership at one time meant muscles; but today it means getting along with people.",
        source:"Mahatma Gandhi"
    },
    {
        quote:"Leadership is an opportunity to serve. It is not a trumpet call to self-importance.",
        source:"J. Donald Walters"
    },
    {
        quote:"“Do what you can, with what you have, where you are.”",
        source:"Theodore Roosevelt"
    },
    {
        quote:"Be yourself; everyone else is already taken.",
        source:"Oscar Wilde"
    },
    {
        quote:"Do not let what you cannot do interfere with what you can do.",
        source:"William Shakespeare"
    },
    {
        quote:"If you cannot do great things, do small things in a great way.",
        source:"Napoleon Hill"
    },
    {
        quote:"Wise men speak because they have something to say; fools speak because they have to say something.",
        source:"Plato"
    },
    {
        quote:"A journey of a thousand leagues begins beneath one's feet.",
        source:"Lao Tzu"
    },
    {
        quote:"I haven't failed. I've just found 10,000 ways that won't work.",
        source:"Thomas Edison"
    }
]

let btn = document.getElementById("btn")
let displayEl = document.querySelector(".display")

function getQuote(){
    let qIndex = Math.floor(Math.random() * quotes.length)
    displayEl.innerHTML = `
                            <h1 class="quotes">"${quotes[qIndex]["quote"]}"</h1>
                            <p>-${quotes[qIndex]["source"]}</p> 
                        `
}

btn.addEventListener("click", ()=>{
    getQuote()
})