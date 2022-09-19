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
    },{
        quote:"Life is what happens when you're busy making other plans.",
        source:"John Lennon"
    },{
        quote:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        source:"James Cameron"
    },{
        quote:"“Fear is the greatest obstacle to learning. But fear is your best friend.",
        source:"Mike Tyson"
    },{
        quote:"“Everyone has a plan until they get punched in the mouth.”",
        source:"Mike Tyson"
    },{
        quote:"The way to get started is to quit talking and begin doing.",
        source:"Walt Disney"
    },{
        quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
        source:"Nelson Mandela"
    },{
        quote:"Don't judge each day by the harvest you reap but by the seeds that you plant.",
        source:"Robert Louis Stevenson"
    },{
        quote:"Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        source:"Benjamin Franklin"
    },{
        quote:"It is during our darkest moments that we must focus to see the light.",
        source:"Aristotle"
    },{
        quote:"Kill tension before tensions kill you, reach your goal before goal kicks you, live life before life leaves you.",
        source:"anonymous"
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
    animation()
})

function animation(){
    document.body.classList.add("anim")
    setTimeout(()=>{
        document.body.classList.remove("anim")
    },200)
}
