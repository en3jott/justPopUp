

const btn = document.querySelector('.btn');
const close = document.querySelector('.message-close');
const box = document.querySelector('.message');

btn.addEventListener('click', () => {

	box.classList.add('active');
});

close.addEventListener('click', () => {
	box.classList.remove('active')

});

setTimeout(() => {
		box.classList.remove('active')
}, 5000);