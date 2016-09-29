module.exports = {
	apiKey: '9d4eb5fbfc93a4c4ed2508c395b0c1b36ff78',
  remote: 'mongodb://Rambovskii:Ramborambo999@ds031631.mongolab.com:31631/despesas',
	init: function(isRemote){
		var mongoose = require('mongoose');

    if (!isRemote) {
      mongoose.connect(this.local);
    }
    else
		  mongoose.connect(this.remote);

    mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
	}
}
