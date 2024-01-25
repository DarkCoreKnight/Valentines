const $btnYes = document.querySelector(".js-yes"),
    $btnNo = document.querySelector(".js-no"),
    $body = document.querySelector("body"),
    $btnLetter = document.querySelector(".js-letter"),
    $image = document.querySelector(".hidden-image");

let counter = 0;

$btnYes.addEventListener('mouseover', (e) => {
    e.target.innerHTML = 'Please? 🥹';
});

$btnYes.addEventListener('click', () => {
    $body.classList.add('yes');
});

$btnNo.addEventListener('mouseover', (e) => {
    const $target = e.target;

    if (counter >= 0) {
        $target.innerHTML = 'NO🥺😭';
        const offset = 200;
        $target.style.transform = `translate(${Math.random() * offset}px, ${Math.random() * offset}px)`;
    }

    counter += 1;
});

$btnLetter.addEventListener('click', () => {
    // Toggle the visibility of the image and move the button up
    $image.classList.toggle('image-visible');
    $btnLetter.classList.toggle('btn-up');
});
