var users =  [
		{'id':1, 'username' : 'alpha', 'password' : 'beta', 'name' : 'Alex', 'age' : 31},
		{'id':2, 'username' : 'gama', 'password' : 'theta' , 'name' : 'Max', 'age' : 22},
		{'id':3, 'username' : 'foo', 'password' : 'boo' , 'name' : 'Steven', 'age' : 40}
	];


module.exports = {
	findById : function (id, cb){
		for (user in users) {
			if(id == users[user].id) {
				return cb(null, users[user]);
			}
		}
		cb(null, null);
	},
	findByUsername : function (username, cb){
		for (user in users) {
			if(username == users[user].username) {
				return cb(null,users[user]);
			} 
		}
		cb(null, null);
	}
};