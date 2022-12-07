var birhdayWishes = [
    {
        title:`
        On your birthday I wish you success and endless happiness!.Wishing you an awesome birthday!`
    },
    {
        title:`
        Happy birthday to my closest and oldest friend! I feel blessed, because our friendship is a true gift of life.`
    },
    {
        title:`
        Wish you a beautiful birthday and I hope you get double of everything you want in your life. Happy Birthday!`
    },
    {
        title:`
        My dearest sister, wish you a very warm and happy birthday. You are not only the sweetest sister but also a true friend. I feel blessed to have a sister like you. May you achieve and get all you ever wish for.`
    },
    {
        title:`
        My dear brother, I wish you a very happy and joyful year ahead. May God love and care you, as you did for me. May you live a long and beautiful life. Happy Birthday.`
    },
    {
        title:`
        You are very special and you deserve the best. I wish you a wonderful life filled with love and happiness. Happy Birthday.`
    },
    {
        title:`
        I’m sorry I can't be with you on your special day but I will always be there for you in mind and spirit. I wish for you a wonderful birthday!`
    },
    {
        title:`
        Wish you a many many happy returns of the day. May God bless you with health, wealth and prosperity in your life. HAPPY BIRTHDAY`
    },

]
function myfun(request){
    var textarea_dom = document.getElementById('src-code')
         
    textarea_dom.innerText = request

    var output_dom = document.getElementById('cd_result')

    output_dom.innerText = 100 - textarea_dom.value.length

 }