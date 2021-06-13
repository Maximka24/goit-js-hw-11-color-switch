const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
  '#00ffff',
  '#8a2be2',
  '#ff7f50',
  '#7fff00',
  '#00ced1',
];


const refs = {
	btnStart: document.querySelector('[data-action="start"]'),
	btnStop: document.querySelector('[data-action="stop"]'),
	body: document.querySelector('body')
};

let intervalId = null;

refs.btnStart.addEventListener('click', onChangeBodyColor);
refs.btnStop.addEventListener('click', onStopChangeBodyColor);


function onChangeBodyColor() {
	if (intervalId) {
		return;
	};

	intervalId = setInterval(() => {
		const randomIntegerFromInterval = (min, max) => {
			return Math.floor(Math.random() * (max - min + 1) + min);
		};
		refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
	}, 1000);
}

function onStopChangeBodyColor() {
	clearInterval(intervalId);
	intervalId = null;
}

