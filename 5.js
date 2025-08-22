const database = {
	studentsList: {
		'xamidullo': {
			name: "xamidullo",
			age: 33,
			id: 123,
			tolov: false
		}
	},

	create(user) {
		if (this.studentsList[user.name]) {
			return `${user.name} allaqachon mavjud!`;
		}
		this.studentsList[user.name] = user;
		return this.studentsList;
	},

	read(name) {
		return this.studentsList[name] || null;
	},

	update(name, user) {
		if (this.studentsList[name]) {
			this.studentsList[name] = { ...this.studentsList[name], ...user };
			if (user.name && user.name !== name) {
				this.studentsList[user.name] = this.studentsList[name];
				delete this.studentsList[name];
				return this.studentsList[user.name];
			}
			return this.studentsList[name];
		}
		return null;
	},

	delete(name) {
		if (this.studentsList[name]) {
			delete this.studentsList[name];
			return `${name} o‘chirildi!`;
		}
		return `${name} topilmadi!`;
	}
}

console.log(database.create({
	name: "xamidullo",
	age: 33,
	id: 123,
	tolov: false
})); 

console.log(database.create({
	name: "azizbek",
	age: 21,
	id: 456,
	tolov: true
})); 

console.log(database.create({
	name: "azizbek",
	age: 25,
	id: 789,
	tolov: false
})); 