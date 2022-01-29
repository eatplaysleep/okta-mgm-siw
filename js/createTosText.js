const createTosText = () => {
	const agreementDiv = document.createElement('div');
	agreementDiv.className = 'agreementDiv';

	const agreementTextDiv = document.createElement('div');
	agreementTextDiv.className = 'agreementTextDiv';

	const agreementP1 = document.createElement('p');
	agreementP1.textContent = CONTENT.tos.text.p1;

	const agreementP2 = document.createElement('p');
	agreementP2.textContent = CONTENT.tos.text.p2;

	const agreementP3 = document.createElement('p');
	agreementP3.textContent = CONTENT.tos.text.p3;

	const agreementP4 = document.createElement('p');
	agreementP4.textContent = CONTENT.tos.text.p4;

	const agreementA1 = document.createElement('a');
	agreementA1.textContent = CONTENT.tos.rules.p;
	agreementA1.target = '_blank';
	agreementA1.setAttribute('href', CONTENT.tos.rules.href);

	const agreementA2 = document.createElement('a');
	agreementA2.textContent = tosText.privacy.p;
	agreementA2.target = '_blank';
	agreementA2.setAttribute('href', CONTENT.tos.privacy.href);

	agreementTextDiv.appendChild(agreementP1);
	agreementTextDiv.appendChild(agreementA1);
	agreementTextDiv.appendChild(agreementP2);
	agreementTextDiv.appendChild(agreementA2);
	agreementTextDiv.appendChild(agreementP3);
	agreementTextDiv.appendChild(agreementA2);
	agreementTextDiv.appendChild(agreementP4);

	agreementDiv.appendChild(cb2Div);
	agreementDiv.appendChild(agreementTextDiv);

	document.querySelector('.o-form-fieldset-container').appendChild(agreementDiv);
};