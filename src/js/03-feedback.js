import { throttle } from 'lodash';

const form = document.querySelector('form');
const email = document.querySelector('input');
const text = document.querySelector('textarea');

form.addEventListener('input',
        throttle(e => {
            const input = { email: form.elements.email.value, message: form.elements.message.value };
            localStorage.setItem('feedback-form-state', JSON.stringify(input));
    }, 500));
           
form.addEventListener('submit', e => {
    e.preventDefault();
    const { elements: { email, message } } = e.currentTarget;
    console.log({ email: email.value, message: message.value });
    
    e.currentTarget.reset();
    localStorage.clear();
});
    
const parseStorageData = JSON.parse(localStorage.getItem('feedback-form-state'));
const storageData = () => {
    if (parseStorageData !== null) {
        email.value = parseStorageData.email;
        text.value = parseStorageData.message;
    };
};
    
storageData();
