import { nanoid } from "nanoid";
import './style.css';
import copy from 'clipboard-copy';

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');
const copyBtn = document.getElementById('copy');

passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
});

copyBtn.addEventListener('click', () => {
  copy(displayPasswordEl.innerHTML);
});