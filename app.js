

const eventKeyHolder = document.getElementById('event-key');
const eventCodeHolder = document.getElementById('event-code');
const eventWhichHolders = document.querySelectorAll('#event-which');

const hint = document.getElementById('text-xl');
const resultView = document.getElementById('resultView');


window.addEventListener("keydown", (event) => {
    hint.style.display = 'none';
    resultView.style.display = 'flex';
    eventKeyHolder.innerHTML = event.key;
    eventCodeHolder.innerHTML = event.code;
    eventWhichHolders.forEach(holder => {
        holder.innerHTML = event.which;
    })
})