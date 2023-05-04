const body = document.querySelector('body');
const title = document.createElement('h1');
title.textContent = 'RSS - ВИРТУАЛЬНАЯ КЛАВИАТУРА';
body.append(title);
const textArea = document.createElement('textarea');
body.append(textArea);

const virtualBlock = document.createElement('div');
virtualBlock.className = 'virtual__block';
body.append(virtualBlock);

const virtualBtnsContainer = document.createElement('div');
virtualBtnsContainer.className = 'virtual__btns';
virtualBlock.append(virtualBtnsContainer);

let lang = 'en';

const btnsEN = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', 'Shift', 'Control', 'Meta', 'Alt', 'Space', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Control'];
const btnsEnWithActiveShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '&#9650;', 'Shift', 'Ctrl', 'Meta', 'Alt', 'Space', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'];
const btnsRU = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650;', 'Shift', 'Control', 'Meta', 'Alt', 'Space', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Control'];
const btnsRuWithActiveShift = ['ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '&#9650;', 'Shift', 'Ctrl', 'Meta', 'Alt', 'Space', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'];
const arrEn = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const arrRu = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'э', 'ю', 'я'];
const keyboardBtnsCodeEN = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
const displayedBtnsValues = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', '◄', '▼', '►', 'ё', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|', ':', '"', '<', '>', '?', '№', '%', '/'];

if (localStorage.getItem('lang')) {
  lang = localStorage.getItem('lang');
} else {
  lang = 'en';
}

for (let i = 0; i < btnsEN.length; i += 1) {
  const virtualBtn = document.createElement('button');

  virtualBtn.className = 'virtual__btn';
  if (lang === 'en') {
    virtualBtn.textContent = btnsEN[i];
  } else {
    virtualBtn.textContent = btnsRU[i];
  }

  virtualBtnsContainer.append(virtualBtn);

  if (virtualBtn.textContent === 'Backspace') {
    virtualBtn.classList.add('backspace-btn');
  }

  if (virtualBtn.textContent === 'Tab') {
    virtualBtn.classList.add('tab-btn');
  }

  if (virtualBtn.textContent === 'Delete') {
    virtualBtn.textContent = 'Del';
    virtualBtn.classList.add('del-btn');
  }

  if (virtualBtn.textContent === 'CapsLock') {
    virtualBtn.classList.add('virtual__btn_wide');
    virtualBtn.classList.add('caps-btn');
    virtualBtn.classList.add('caps-indicator');
  }

  if (virtualBtn.textContent === 'Enter') {
    virtualBtn.classList.add('virtual__btn_wide');
    virtualBtn.classList.add('enter-btn');
  }

  if (virtualBtn.textContent === 'Shift') {
    virtualBtn.classList.add('virtual__btn_wide');
    virtualBtn.classList.add('shift-btn');
  }

  if (virtualBtn.textContent === '&#9650;') {
    virtualBtn.classList.add('arrow-btn');
    virtualBtn.innerHTML = '&#9650;';
  }

  if (virtualBtn.textContent === '&#9668;') {
    virtualBtn.textContent = '';
    virtualBtn.classList.add('arrow-btn');
    virtualBtn.innerHTML = '&#9668;';
  }

  if (virtualBtn.textContent === '&#9660;') {
    virtualBtn.textContent = '';
    virtualBtn.classList.add('arrow-btn');
    virtualBtn.innerHTML = '&#9660;';
  }

  if (virtualBtn.textContent === '&#9658;') {
    virtualBtn.textContent = '';
    virtualBtn.classList.add('arrow-btn');
    virtualBtn.innerHTML = '&#9658;';
  }

  if (virtualBtn.textContent === 'Control') {
    virtualBtn.textContent = 'Ctrl';
    virtualBtn.classList.add('ctrl-btn');
  }

  if (virtualBtn.textContent === 'Alt') {
    virtualBtn.classList.add('alt-btn');
  }

  if (virtualBtn.textContent === 'Meta') {
    virtualBtn.textContent = '';
    virtualBtn.classList.add('win-btn');
    virtualBtn.innerHTML = `<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg id="Capa_1" width="20" height="20" version="1.1" viewBox="0 0 480 480" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path fill="#000" d="M0.2,224L0,68l192-26.1V224H0.2z M224,37.2L479.9,0v224H224V37.2z M480,256l-0.1,224L224,444V256H480z M192,439.9 L0.2,413.6l0-157.6H192V439.9z"/></g></g></svg>`;
  }

  if (virtualBtn.textContent === 'Space') {
    virtualBtn.textContent = '';
    virtualBtn.classList.add('space-btn');
    virtualBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 9v4H6V9H4v6h16V9z"/></svg>`;
  }
}

const changeChars = () => {
  const virtualBtns = document.querySelectorAll('button');
  for (let i = 0; i < btnsEN.length; i += 1) {
    if (lang === 'en') {
      virtualBtns[i].textContent = btnsEN[i];
    } else {
      virtualBtns[i].textContent = btnsRU[i];
    }

    if (virtualBtns[i].classList.contains('del-btn')) {
      virtualBtns[i].textContent = 'Del';
    }

    if (virtualBtns[i].textContent === '&#9650;') {
      virtualBtns[i].innerHTML = '&#9650;';
    }

    if (virtualBtns[i].textContent === '&#9668;') {
      virtualBtns[i].innerHTML = '&#9668;';
    }

    if (virtualBtns[i].textContent === '&#9660;') {
      virtualBtns[i].innerHTML = '&#9660;';
    }

    if (virtualBtns[i].textContent === '&#9658;') {
      virtualBtns[i].innerHTML = '&#9658;';
    }

    if (virtualBtns[i].classList.contains('ctrl-btn')) {
      virtualBtns[i].textContent = 'Ctrl';
    }

    if (virtualBtns[i].classList.contains('win-btn')) {
      virtualBtns[i].innerHTML = `<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg id="Capa_1" width="20" height="20" version="1.1" viewBox="0 0 480 480" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path fill="#000" d="M0.2,224L0,68l192-26.1V224H0.2z M224,37.2L479.9,0v224H224V37.2z M480,256l-0.1,224L224,444V256H480z M192,439.9 L0.2,413.6l0-157.6H192V439.9z"/></g></g></svg>`;
    }

    if (virtualBtns[i].classList.contains('space-btn')) {
      virtualBtns[i].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 9v4H6V9H4v6h16V9z"/></svg>`;
    }
  }
}

const addTab = () => {
  const start = textArea.selectionStart;
  const end = textArea.selectionEnd;

  textArea.value = textArea.value.substring(0, start) + "\t" + textArea.value.substring(end);
  textArea.selectionStart = textArea.selectionEnd = start + 1;
};

const deletePrevChar = () => {
  const pos = textArea.selectionStart;
  if (pos > 0) {
    const charBeforeCursor = textArea.value.substring(0, pos - 1);
    const charAfterCursor = textArea.value.substring(pos);

    textArea.value = charBeforeCursor + charAfterCursor;
    textArea.selectionStart = textArea.selectionEnd = pos - 1;
  }
}

const deleteNextChar = () => {
  const start = textArea.selectionStart;
  const beforeVal = textArea.value.substring(0, start);
  const afterVal = textArea.value.substring(start + 1);
  textArea.value = beforeVal + afterVal;

  textArea.selectionStart = start;
  textArea.selectionEnd = start;
}

const activeShift = () => {
  if (capsBtn.classList.contains('caps-indicator-active')) {
    for (let i = 0; i < virtualBtns.length; i++) {
      if (lang === 'en') {
        virtualBtns[i].innerHTML = btnsEnWithActiveShift[i];
      } else {
        virtualBtns[i].innerHTML = btnsRuWithActiveShift[i];
      }
    }
  } else {
    for (let i = 0; i < virtualBtns.length; i++) {
      if (lang === 'en') {
          virtualBtns[i].innerHTML = btnsEnWithActiveShift[i];
          if (arrEn.includes(virtualBtns[i].innerHTML)) {
            virtualBtns[i].innerHTML = virtualBtns[i].innerHTML.toUpperCase();
          }
      } else {
        virtualBtns[i].innerHTML = btnsRuWithActiveShift[i];
        if (arrRu.includes(virtualBtns[i].innerHTML)) {
          virtualBtns[i].innerHTML = virtualBtns[i].innerHTML.toUpperCase();
        }
      }
    }
  }
  document.querySelector('.win-btn').innerHTML = `<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg id="Capa_1" width="20" height="20" version="1.1" viewBox="0 0 480 480" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path fill="#000" d="M0.2,224L0,68l192-26.1V224H0.2z M224,37.2L479.9,0v224H224V37.2z M480,256l-0.1,224L224,444V256H480z M192,439.9 L0.2,413.6l0-157.6H192V439.9z"/></g></g></svg>`;
  document.querySelector('.space-btn').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 9v4H6V9H4v6h16V9z"/></svg>`;
}

const deactivateShift = () => {
  changeChars();
  if (capsBtn.classList.contains('caps-indicator-active')) {
    for (let i = 0; i < virtualBtns.length; i++) {
      if (lang === 'en') {
        if (arrEn.includes(virtualBtns[i].innerHTML)) {
          virtualBtns[i].innerHTML = virtualBtns[i].innerHTML.toUpperCase();
        }
      } else {
        if (arrRu.includes(virtualBtns[i].innerHTML)) {
          virtualBtns[i].innerHTML = virtualBtns[i].innerHTML.toUpperCase();
        }
      }
    }
  } else {
    for (let i = 0; i < virtualBtns.length; i++) {
      if (lang === 'en') {
        if (arrEn.includes(virtualBtns[i].innerHTML)) {
          virtualBtns[i].innerHTML = virtualBtns[i].innerHTML.toLowerCase();
        }
      } else {
        if (arrRu.includes(virtualBtns[i].innerHTML)) {
          virtualBtns[i].innerHTML = virtualBtns[i].innerHTML.toLowerCase();
        }
      }
    }
  }
}

const capsBtn = document.querySelector('.caps-btn');

const toggleActiveCapsLock = () => {
  if (!capsBtn.classList.contains('caps-indicator-active')) {
    for (let i = 0; i < virtualBtns.length; i++) {
      if (lang === 'en') {
        if (arrEn.includes(virtualBtns[i].innerHTML.toLowerCase())) {
          virtualBtns[i].innerHTML = virtualBtns[i].innerHTML.toLowerCase();
        }
      } else {
        if (arrRu.includes(virtualBtns[i].innerHTML.toLowerCase())) {
          virtualBtns[i].innerHTML = virtualBtns[i].innerHTML.toLowerCase();
        }
      }
    }
  } else {
    for (let i = 0; i < virtualBtns.length; i++) {
      if (lang === 'en') {
        if (arrEn.includes(virtualBtns[i].innerHTML)) {
          virtualBtns[i].innerHTML = virtualBtns[i].innerHTML.toUpperCase();
        }
      } else {
        if (arrRu.includes(virtualBtns[i].innerHTML)) {
          virtualBtns[i].innerHTML = virtualBtns[i].innerHTML.toUpperCase();
        }
      }
    }
  }
}

const virtualBtns = document.querySelectorAll('.virtual__btn');

for (let i = 0; i < virtualBtns.length; i++) {
  virtualBtns[i].setAttribute('data-keycode', `${keyboardBtnsCodeEN[i]}`);
}

virtualBtns.forEach((btn) => {
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
  e.preventDefault();
  if (document.querySelector(`[data-keycode="${pressedBtn}"]`)) {
    const pressedVirtualBtn = document.querySelector(`[data-keycode="${pressedBtn}"]`);
    pressedVirtualBtn.classList.add('virtual__btn-active');
    if (displayedBtnsValues.includes(pressedVirtualBtn.innerHTML.toLowerCase())) {
        const pos = textArea.selectionStart;
        const charBeforeCursor = textArea.value.substring(0, pos);
        const charAfterCursor = textArea.value.substring(pos);
      if (e.shiftKey) {
        textArea.value = charBeforeCursor + pressedVirtualBtn.innerHTML.toUpperCase() + charAfterCursor;
      } else {
        textArea.value = charBeforeCursor + pressedVirtualBtn.innerHTML + charAfterCursor;
      }
        textArea.selectionStart = textArea.selectionEnd = pos + 1;
    }
  }

  if (e.ctrlKey && e.altKey) {
    if (lang === 'en') {
      lang = 'ru';
    } else {
      lang = 'en';
    }
    changeChars();
    toggleActiveCapsLock();
    if (capsBtn.classList.contains('caps-indicator-active')) {
      capsBtn.classList.add('caps-indicator-active');
    } else {
      capsBtn.classList.remove('caps-indicator-active');
    }
    localStorage.setItem('lang', `${lang}`);
  }

  if (e.shiftKey) {
    activeShift();
  }

  if (pressedBtn === 'Enter') {
    textArea.value += '\n';
  }

  if (pressedBtn === 'Space') {
    textArea.value += ' ';
  }

  if (pressedBtn === 'Tab') {
    addTab();
  }

  if (pressedBtn === 'Backspace') {
    textArea.focus();
    deletePrevChar();
  }

  if (pressedBtn === 'Delete') {
    textArea.focus();
    deleteNextChar();
  }

  if (pressedBtn === 'CapsLock') {
    if (capsBtn.classList.contains('caps-indicator-active')) {
      capsBtn.classList.remove('caps-indicator-active');
    } else {
      capsBtn.classList.add('caps-indicator-active');
    }
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

  if (pressedBtn === 'ShiftLeft' || pressedBtn === 'ShiftRight') {
    deactivateShift();
  }
});

const enterBtn = document.querySelector('.enter-btn');
enterBtn.addEventListener('click', () => {
  textArea.value += '\n';
});

const tabBtn = document.querySelector('.tab-btn');
tabBtn.addEventListener('click', () => {
  addTab();
});

const spaceBtn = document.querySelector('.space-btn');
spaceBtn.addEventListener('click', () => {
  textArea.value += ' ';
});

const backspaceBtn = document.querySelector('.backspace-btn');
backspaceBtn.addEventListener('click', () => {
  if (document.activeElement !== textArea) {
    textArea.focus();
    deletePrevChar();
  }
});

const delBtn = document.querySelector('.del-btn');
delBtn.addEventListener('click', () => {
  if (document.activeElement !== textArea) {
    textArea.focus();
    deleteNextChar();
  }
});

capsBtn.addEventListener('click', () => {
  if (!capsBtn.classList.contains('caps-indicator-active')) {
    capsBtn.classList.add('caps-indicator-active');
  } else {
    capsBtn.classList.remove('caps-indicator-active');
  }
  toggleActiveCapsLock();
});

const shiftBtns = document.querySelectorAll('.shift-btn');
shiftBtns.forEach((btn) => {
  btn.addEventListener('mousedown', () => {
    activeShift();
  });
})

shiftBtns.forEach((btn) => {
  btn.addEventListener('mouseup', () => {
    deactivateShift();
  });
})

const infoText = document.createElement('p');
infoText.className = 'info-text';
infoText.innerText = 'Клавиатура создана в операционной системе Windows.\nДля переключения языка комбинация: левыe ctrl + alt.';
body.append(infoText);
