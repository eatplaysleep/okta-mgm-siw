// A div w/ an input and label must be created. Then this generic checkbox can be appended to the LABEL.
const createCustomCheckbox = async () => {

	const cbSpan = document.createElement('span');
	const svg = document.createElement('svg');
	const rect1 = document.createElement('rect');
	const rect2 = document.createElement('rect');
	const path = document.createElement('path');

	rect1.setAttribute('x', '6.5');
	rect1.setAttribute('y', '6.5');
	rect1.setAttribute('width', '31');
	rect1.setAttribute('height', '31');
	rect1.setAttribute('rx', '7.5');
	rect1.setAttribute('stroke', '#4957F4');
	rect1.setAttribute('stroke-linecap', 'round');
	rect1.setAttribute('stroke-linejoin', 'round');

	rect2.setAttribute('x', '6.5');
	rect2.setAttribute('y', '6.5');
	rect2.setAttribute('width', '31');
	rect2.setAttribute('height', '31');
	rect2.setAttribute('rx', '7.5');
	rect2.setAttribute('fill', 'none');

	path.setAttribute('d', 'M29.8749 16.4844L18.219 28.5716L13.7344 23.6082');
	path.setAttribute('stroke-width', '1.75');
	path.setAttribute('stroke-linecap', 'round');
	path.setAttribute('stroke-linejoin', 'round');

	svg.appendChild(rect1);
	svg.appendChild(rect2);
	svg.appendChild(path);

	cbSpan.appendChild(svg);

	return cbSpan;
};
