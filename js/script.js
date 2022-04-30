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
if (way == way+"admin/") {
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
    .then(resp => resp.text())