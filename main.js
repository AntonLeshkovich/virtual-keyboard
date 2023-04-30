const virtualBtnsContainer = document.querySelector('.virtual__btns');
let lang = "en";

const btnsEN = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del", "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Up", "Shift", "Ctrl", "Win", "Alt", "Space", "Alt", "Left", "Down", "Right", "Ctrl"];
const displayedBtnsValues = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\","a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];

if (lang === "en") {
    for (let i = 0; i < btnsEN.length; i++) {
        const virtualBtn = document.createElement('button');

        virtualBtn.className = 'virtual__btn';
        virtualBtn.textContent = btnsEN[i];

        virtualBtnsContainer.append(virtualBtn);

        if (virtualBtn.textContent === "Backspace") {
            virtualBtn.classList.add('backspace-btn');
            // keyboardBtn.classList.add('akcent-btn');
        }

        if (virtualBtn.textContent === "Tab") {
            virtualBtn.classList.add('tab-btn');
            // keyboardBtn.classList.add('akcent-btn');
        }

        if (virtualBtn.textContent === "Del") {
            virtualBtn.classList.add('del-btn');
            // keyboardBtn.classList.add('akcent-btn');
        }

        if (virtualBtn.textContent === "CapsLock") {
            virtualBtn.classList.add('virtual__btn_wide');
            virtualBtn.classList.add('caps-btn');
            // keyboardBtn.classList.add('akcent-btn');
        }

        if (virtualBtn.textContent === "Enter") {
            virtualBtn.classList.add('virtual__btn_wide');
            virtualBtn.classList.add('enter-btn');
            // keyboardBtn.classList.add('akcent-btn');
        }

        if (virtualBtn.textContent === "Shift") {
            virtualBtn.classList.add('virtual__btn_wide');
            virtualBtn.classList.add('shift-btn');
            // keyboardBtn.classList.add('akcent-btn');
        }

        if (virtualBtn.textContent === "Up") {
            virtualBtn.textContent = '';
            virtualBtn.classList.add('arrow-btn');
            // keyboardBtn.classList.add('akcent-btn');
            virtualBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 10 16"><path fill="#000" d="M5 3L0 9h3v4h4V9h3L5 3z"/></svg>`;
        }

        if (virtualBtn.textContent === "Left") {
            virtualBtn.textContent = '';
            virtualBtn.classList.add('arrow-btn');
            // keyboardBtn.classList.add('akcent-btn');
            virtualBtn.innerHTML = `<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-arrow-left-bold" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M20,9V15H12V19.84L4.16,12L12,4.16V9H20Z" /></svg>`;
        }

        if (virtualBtn.textContent === "Down") {
            virtualBtn.textContent = '';
            virtualBtn.classList.add('arrow-btn');
            // keyboardBtn.classList.add('akcent-btn');
            virtualBtn.innerHTML = `<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-arrow-down-bold" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M9,4H15V12H19.84L12,19.84L4.16,12H9V4Z" /></svg>`;
        }

        if (virtualBtn.textContent === "Right") {
            virtualBtn.textContent = '';
            virtualBtn.classList.add('arrow-btn');
            // keyboardBtn.classList.add('akcent-btn');
            virtualBtn.innerHTML = `<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-arrow-right-bold" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M4,15V9H12V4.16L19.84,12L12,19.84V15H4Z" /></svg>`;
        }

        // if (keyboardBtn.textContent === "Ctrl" || keyboardBtn.textContent === "Alt") {
        //     keyboardBtn.classList.add('akcent-btn');
        // }

        if (virtualBtn.textContent === "Ctrl") {
            // keyboardBtn.classList.add('akcent-btn');
            virtualBtn.classList.add('ctrl-btn');
        }

        if (virtualBtn.textContent === "Alt") {
            // keyboardBtn.classList.add('akcent-btn');
            virtualBtn.classList.add('alt-btn');
        }

        if (virtualBtn.textContent === "Win") {
            virtualBtn.textContent = '';
            virtualBtn.classList.add('win-btn');
            // keyboardBtn.classList.add('akcent-btn');
            virtualBtn.innerHTML = `<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg id="Capa_1" width="20" height="20" version="1.1" viewBox="0 0 480 480" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path fill="#000" d="M0.2,224L0,68l192-26.1V224H0.2z M224,37.2L479.9,0v224H224V37.2z M480,256l-0.1,224L224,444V256H480z M192,439.9 L0.2,413.6l0-157.6H192V439.9z"/></g></g></svg>`;
        }

        if (virtualBtn.textContent === "Space") {
            virtualBtn.textContent = '';
            // keyboardBtn.classList.add('akcent-btn');
            virtualBtn.classList.add('space-btn');
            virtualBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 9v4H6V9H4v6h16V9z"/></svg>`;
        }
    }
}


let textArea = document.querySelector('textarea');
let virtualBtns = document.querySelectorAll('.virtual__btn');

virtualBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (displayedBtnsValues.includes(btn.innerHTML)) {
            textArea.value += btn.innerHTML;
        }
    });
});


document.addEventListener('keydown', (e) => {
    const pressedBtn = e.key;
    console.log(activeBtn)
})