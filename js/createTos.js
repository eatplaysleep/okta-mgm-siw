const createTosCheckbox = async () => {
	const cb2Input = document.createElement('input');
	const cb2Label = document.createElement('label');

	cb2Input.setAttribute('id', 'tosAccept');
	cb2Input.setAttribute('type', 'checkbox');
	cb2Input.setAttribute('name', 'tosAccept');
	cb2Label.setAttribute('for', 'tosAccept');
	cb2Label.style.color = "#777";

	// cb2Label.appendChild(await createCustomCheckbox());

	return { cb2Input, cb2Label };
};

const createTosAgreement = async () => {

	const agreementTextDiv = document.createElement('div');
	agreementTextDiv.className = 'agreementTextDiv';

	const agreementP1 = document.createElement('p');
	agreementP1.textContent = CONTENT.tos.text.p1;

	const agreementP2 = document.createElement('p');
	agreementP2.textContent = CONTENT.tos.text.p2;

	const agreementP3 = document.createElement('p');
	agreementP3.textContent = CONTENT.tos.text.p3;

	const agreementA1 = document.createElement('a');
	agreementA1.textContent = CONTENT.tos.rules.p;
	agreementA1.target = '_blank';
	agreementA1.setAttribute('href', CONTENT.tos.rules.href);

	const agreementA2 = document.createElement('a');
	agreementA2.textContent = CONTENT.tos.privacy.p;
	agreementA2.target = '_blank';
	agreementA2.setAttribute('href', CONTENT.tos.privacy.href);

	agreementTextDiv.appendChild(agreementP1);
	agreementTextDiv.appendChild(agreementA1);
	agreementTextDiv.appendChild(agreementP2);
	agreementTextDiv.appendChild(agreementA2);
	agreementTextDiv.appendChild(agreementP3);
	agreementTextDiv.appendChild(agreementA2);

	return agreementTextDiv;
};

const createTos = async () => {
	const agreementDiv = document.createElement('div');
	agreementDiv.className = 'agreementDiv';

	const { cb2Input, cb2Label } = await createTosCheckbox();
	const tosDiv = await createTosAgreement();

	agreementDiv.className = "custom-checkbox";
	agreementDiv.appendChild(cb2Input);
	agreementDiv.appendChild(cb2Label);
	agreementDiv.appendChild(tosDiv);

	document.querySelector('.o-form-fieldset-container').appendChild(agreementDiv);
}
