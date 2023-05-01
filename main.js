const body =document.querySelector('body');

const title = document.createElement('h1');
title.textContent = "RSS - ВИРТУАЛЬНАЯ КЛАВИАТУРА";
body.append(title);

const textArea = document.createElement('textarea');
body.append(textArea);

const virtualBlock = document.createElement('div');
virtualBlock.className = 'virtual__block';
body.append(virtualBlock);

const virtualBtnsContainer = document.createElement('div');
virtualBtnsContainer.className = 'virtual__btns';
virtualBlock.append(virtualBtnsContainer);

let lang = "en";

const btnsEN = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Delete", "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "&#9650;", "Shift", "Control", "Meta", "Alt", "Space", "Alt", "&#9668;", "&#9660;", "&#9658;", "Control"];
const btnsRU = ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Delete", "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter", "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "&#9650;", "Shift", "Control", "Meta", "Alt", "Space", "Alt", "&#9668;", "&#9660;", "&#9658;", "Control"];
const arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'э', 'ю', 'я'];const keyboardBtnsCodeEN = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight", "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"];
const displayedBtnsValues = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\","a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "◄", "▼", "►", "ё", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю"];

if(localStorage.getItem("lang")) {
    lang = localStorage.getItem("lang");
} else {
    lang = "en";
}


for (let i = 0; i < btnsEN.length; i++) {
    const virtualBtn = document.createElement('button');

    virtualBtn.className = 'virtual__btn';
    if (lang === 'en') {
        virtualBtn.textContent = btnsEN[i];
    } else {
        virtualBtn.textContent = btnsRU[i];
    }

    virtualBtnsContainer.append(virtualBtn);

    if (virtualBtn.textContent === "Backspace") {
        virtualBtn.classList.add('backspace-btn');
    }

    if (virtualBtn.textContent === "Tab") {
        virtualBtn.classList.add('tab-btn');
    }

    if (virtualBtn.textContent === "Delete") {
        virtualBtn.textContent = "Del";
        virtualBtn.classList.add('del-btn');
    }

    if (virtualBtn.textContent === "CapsLock") {
        virtualBtn.classList.add('virtual__btn_wide');
        virtualBtn.classList.add('caps-btn');
    }

    if (virtualBtn.textContent === "Enter") {
        virtualBtn.classList.add('virtual__btn_wide');
        virtualBtn.classList.add('enter-btn');
    }

    if (virtualBtn.textContent === "Shift") {
        virtualBtn.classList.add('virtual__btn_wide');
        virtualBtn.classList.add('shift-btn');
    }

    if (virtualBtn.textContent === "&#9650;") {
        virtualBtn.classList.add('arrow-btn');
        virtualBtn.innerHTML = `&#9650;`;
    }

    if (virtualBtn.textContent === "&#9668;") {
        virtualBtn.textContent = '';
        virtualBtn.classList.add('arrow-btn');
        virtualBtn.innerHTML = `&#9668;`;
    }

    if (virtualBtn.textContent === "&#9660;") {
        virtualBtn.textContent = '';
        virtualBtn.classList.add('arrow-btn');
        virtualBtn.innerHTML = `&#9660;`;
    }

    if (virtualBtn.textContent === "&#9658;") {
        virtualBtn.textContent = '';
        virtualBtn.classList.add('arrow-btn');
        virtualBtn.innerHTML = `&#9658;`;
    }

    if (virtualBtn.textContent === "Control") {
        virtualBtn.textContent = "Ctrl";
        virtualBtn.classList.add('ctrl-btn');
    }

    if (virtualBtn.textContent === "Alt") {
        virtualBtn.classList.add('alt-btn');
    }

    if (virtualBtn.textContent === "Meta") {
        virtualBtn.textContent = '';
        virtualBtn.classList.add('win-btn');
        virtualBtn.innerHTML = `<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg id="Capa_1" width="20" height="20" version="1.1" viewBox="0 0 480 480" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path fill="#000" d="M0.2,224L0,68l192-26.1V224H0.2z M224,37.2L479.9,0v224H224V37.2z M480,256l-0.1,224L224,444V256H480z M192,439.9 L0.2,413.6l0-157.6H192V439.9z"/></g></g></svg>`;
    }

    if (virtualBtn.textContent === "Space") {
        virtualBtn.textContent = '';
        virtualBtn.classList.add('space-btn');
        virtualBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 9v4H6V9H4v6h16V9z"/></svg>`;
    }
}


function changeChars() {
    const virtualBtns = document.querySelectorAll('button');
    for (let i = 0; i < btnsEN.length; i++) {

        if (lang === 'en') {
            virtualBtns[i].textContent = btnsEN[i];
        } else {
            virtualBtns[i].textContent = btnsRU[i];
        }

        if (virtualBtns[i].classList.contains('del-btn')) {
            virtualBtns[i].textContent = "Del";
        }

        if (virtualBtns[i].textContent === "&#9650;") {
            virtualBtns[i].innerHTML = `&#9650;`;
        }

        if (virtualBtns[i].textContent === "&#9668;") {
            virtualBtns[i].innerHTML = `&#9668;`;
        }

        if (virtualBtns[i].textContent === "&#9660;") {
            virtualBtns[i].innerHTML = `&#9660;`;
        }

        if (virtualBtns[i].textContent === "&#9658;") {
            virtualBtns[i].innerHTML = `&#9658;`;
        }

        if (virtualBtns[i].classList.contains('ctrl-btn')) {
            virtualBtns[i].textContent = "Ctrl";
        }

        if (virtualBtns[i].classList.contains('win-btn')) {
            virtualBtns[i].innerHTML = `<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg id="Capa_1" width="20" height="20" version="1.1" viewBox="0 0 480 480" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path fill="#000" d="M0.2,224L0,68l192-26.1V224H0.2z M224,37.2L479.9,0v224H224V37.2z M480,256l-0.1,224L224,444V256H480z M192,439.9 L0.2,413.6l0-157.6H192V439.9z"/></g></g></svg>`;
        }

        if (virtualBtns[i].classList.contains('space-btn')) {
            virtualBtns[i].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 9v4H6V9H4v6h16V9z"/></svg>`;
        }
    }
}


let virtualBtns = document.querySelectorAll('.virtual__btn');

for(let i = 0; i < virtualBtns.length; i++) {
    virtualBtns[i].setAttribute("data-keycode", `${keyboardBtnsCodeEN[i]}`);
}

virtualBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (displayedBtnsValues.includes(btn.innerHTML.toLowerCase())) {

            if (e.shiftKey) {
                textArea.value += btn.innerHTML.toUpperCase();
            } else {
                textArea.value += btn.innerHTML;
            }
        }
    });
});


document.addEventListener('keydown', (e) => {
    const pressedBtn = e.code;
    if (document.querySelector(`[data-keycode="${pressedBtn}"]`)) {
        const pressedVirtualBtn = document.querySelector(`[data-keycode="${pressedBtn}"]`);
        pressedVirtualBtn.classList.add('virtual__btn-active');
        if (displayedBtnsValues.includes(pressedVirtualBtn.innerHTML.toLowerCase())) {
            if (e.shiftKey) {
                textArea.value += pressedVirtualBtn.innerHTML.toUpperCase();
            } else {
                textArea.value += pressedVirtualBtn.innerHTML;
            }
        }
    }

    if (e.shiftKey && e.altKey) {
        if (lang === 'en') {
            lang = 'ru';
        } else {
            lang = 'en';
        }
        changeChars();
        localStorage.setItem('lang', `${lang}`);
    }

    if (pressedBtn == "Enter") {
        textArea.value += "\n";
    }

    if (pressedBtn == "Space") {
        textArea.value += ' ';
    }

    if (pressedBtn == "Tab") {
        addTab();
    }

    if (pressedBtn == "Backspace") {
        deletePrevChar();
    }

    if (pressedBtn == "Delete") {
        deleteNextChar();
    }

    if (pressedBtn == "CapsLock") {
        toggleActiveCapsLock();
    }
});

document.addEventListener('keyup', (e) => {
    const pressedBtn = e.code;
    if (document.querySelector(`[data-keycode="${pressedBtn}"]`)) {
        const pressedVirtualBtn = document.querySelector(`[data-keycode="${pressedBtn}"]`);
        setTimeout(function() {
            pressedVirtualBtn.classList.remove('virtual__btn-active');
        }, 50);
    }
  });


const enterBtn = document.querySelector('.enter-btn');
enterBtn.addEventListener('click', () => {
    textArea.value += "\n";
});

function addTab() {
    let start = textArea.selectionStart;
    let end = textArea.selectionEnd;

    textArea.value = textArea.value.substring(0, start) + "\t" + textArea.value.substring(end);
    textArea.selectionStart = textArea.selectionEnd = start + 1;
};

const tabBtn = document.querySelector('.tab-btn');
tabBtn.addEventListener('click', () => {
    addTab();
})


const spaceBtn = document.querySelector('.space-btn');
spaceBtn.addEventListener('click', () => {
    textArea.value += ' ';
});


function deletePrevChar() {
    let pos = textArea.selectionStart;
    if (pos > 0) {
      let charBeforeCursor = textArea.value.substring(0, pos - 1);
      let charAfterCursor = textArea.value.substring(pos);

      textArea.value = charBeforeCursor + charAfterCursor;
      textArea.selectionStart = textArea.selectionEnd = pos - 1;
    }
};

const backspaceBtn = document.querySelector('.backspace-btn');
backspaceBtn.addEventListener('click', () => {
    deletePrevChar();
});


function deleteNextChar() {
    let start = textArea.selectionStart;
    let beforeVal = textArea.value.substring(0, start);
    let afterVal = textArea.value.substring(start + 1);
    textArea.value = beforeVal + afterVal;

    textArea.selectionStart = start;
    textArea.selectionEnd = start;
}

const delBtn = document.querySelector('.del-btn');
delBtn.addEventListener('click', () => {
    deleteNextChar();
});



const capsBtn = document.querySelector('.caps-btn');

capsBtn.classList.add('caps-indicator');

function toggleActiveCapsLock() {
    if (capsBtn.classList.contains('caps-indicator-active')) {
        capsBtn.classList.remove('caps-indicator-active');
        for (let i = 0; i < virtualBtns.length; i++) {
            if (lang === 'en') {
                if (arr_en.includes(virtualBtns[i].innerHTML.toLowerCase())) {
                    virtualBtns[i].innerHTML = virtualBtns[i].innerHTML.toLowerCase();
                }
            } else {
                if (arr_ru.includes(virtualBtns[i].innerHTML.toLowerCase())) {
                    virtualBtns[i].innerHTML = virtualBtns[i].innerHTML.toLowerCase();
                }
            }
        }
    } else {
        capsBtn.classList.add('caps-indicator-active');
        for (let i = 0; i < virtualBtns.length; i++) {
            if (lang === 'en') {
                if (arr_en.includes(virtualBtns[i].innerHTML)) {
                    virtualBtns[i].innerHTML = virtualBtns[i].innerHTML.toUpperCase();
                }
            } else {
                if (arr_ru.includes(virtualBtns[i].innerHTML)) {
                    virtualBtns[i].innerHTML = virtualBtns[i].innerHTML.toUpperCase();
                }
            }
        }
    }
}

capsBtn.addEventListener('click', () => {
    toggleActiveCapsLock();
});


const infoText = document.createElement('p');
infoText.className = 'info-text';
infoText.innerText = 'Клавиатура создана в операционной системе Windows.\nДля переключения языка комбинация: левыe shift + alt.';
body.append(infoText);

