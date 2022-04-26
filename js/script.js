let $ = (select) => document.querySelector(select);
let modal = $('.modal');
let cross = $('.cross');
let sub = $("input[name= 'sub']");


let form = $('#form');


window.addEventListener('click', (event) => {
    console.log(event.target);
    console.log($('#burger_check').value);
    if (event.target == cross) {
        modal.style.display = "none"
    }
    if (event.target == modal) {
        modal.style.display = "none"
    }
})
const way = document.referrer;
console.log(way);
if (way == "file:///C:/Users/%D0%9F%D0%B5%D1%80%D0%BB%D0%B8%D0%BD%20%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B9/Documents/git/mod2/admin/") {
    modal.style.display = "flex";
    delete way
    console.log(document.referrer);
} else {
    modal.style.display = "none";
}

sub.addEventListener('click', async(event) => {
    event.preventDefault();
    if (event.target == sub) {
        console.log(123);
        modal.style.display = "none"

        let f = new FormData(form);
        f.append(event.target.name, 'not null');
        let r = await fesponse(f);
        console.log(r);
    }
})
let fesponse = (f) => fetch('php/main.php', {
        method: 'POST',
        body: f
    })
    .then(resp => JSON.stringify(resp))
    .then(resp => JSON.parse(resp))
    .then(resp => typeof(resp))