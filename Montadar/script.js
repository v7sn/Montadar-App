const init = {
	method: 'GET',
	headers: { 'Content-Type': 'application/json' },
	mode: 'cors',
	cache: 'default'
};


const studentsList = document.getElementById('students-list');

const jsonLists = document.getElementById('json-lists');
const json1_4 = document.getElementById('1-4');
const json5_8 = document.getElementById('5-8');


jsonLists.onchange = () => {

	if (json1_4.checked === true) {
		studentsList.innerHTML = '';	
		fetch(new Request('./data1-4.json', init))
		.then( (resp) => { return resp.json() })
		.then( (data) => {
	
			for (var i = 0; i < data.students.length; i++) {
				studentsList.innerHTML += `
					<div id="student">
						<p id="level">${data.students[i].level}</p>
						<p id="name">${data.students[i].name}</p>
					</div>
				`
			}
		})
	} else {
		studentsList.innerHTML = '';
	}

	if (json5_8.checked === true) {
		studentsList.innerHTML = '';
		fetch(new Request('./data5-8.json', init))
		.then( (resp) => { return resp.json() })
		.then( (data) => {

		for (var i = 0; i < data.students.length; i++) {
			studentsList.innerHTML += `
				<div id="student">
					<p id="level">${data.students[i].level}</p>
					<p id="name">${data.students[i].name}</p>
				</div>
			`
		}
	})
	} else {
		studentsList.innerHTML = '';
	}
}

const studentsPage = document.getElementById('students-list');
const settingsPage = document.getElementById('settings-page');
const buttonSettings = document.getElementById('open-settings');

buttonSettings.onclick = () => {

	if (settingsPage.style.display === 'none') {
		studentsPage.style.display = 'none';
		settingsPage.style.display = 'flex';
	} else {
		settingsPage.style.display = 'none'
		studentsPage.style.display = 'flex';
	}

}


// let randomStudent = studentsArray[Math.floor( Math.random() * studentsArray.length )];

const buttonTitle = document.getElementById('title');

buttonTitle.onclick = () => {
	let random = studentsList.children[Math.floor( Math.random() * studentsList.children.length )] || [];
	random.children['name'].scrollIntoView({ behavior: 'smooth', block: 'center' });
	console.log(random.children['name'], random.children['level']);

	random.style.background = 'rgb(240, 240, 240)';
	setInterval(() => {
		random.style.background = 'none';
	}, 5000);
}