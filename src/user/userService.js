const { response } = require('express');
var userModel = require('./userModel');
console.log("444");
module.exports.getDataFromDBService = () => {
    return new Promise((resolve, reject)=> {
        userModel.find({})
        .then((result)=> {resolve(result);}) 
        .catch((error)=> {resolve({'error':error});})
    });
}

module.exports.createUserDBService = (userDetails) => {
    console.log("innnn",userDetails);
    return new Promise((resolve,reject)=> {
        
        var userModelData = new userModel();
        userModelData.name = userDetails.name;
        userModelData.address = userDetails.address;
        userModelData.phone = userDetails.phone;
        
        userModelData.save().then(savedUser => {
            
            console.log('User saved:', savedUser);
            resolve(savedUser);
            // Handle success and further actions
          })
          .catch(error => {
            console.error('Error saving user:', error);
            resolve(error);
            // Handle error
          }) ;
    });
}


module.exports.updateUserDBService = (id, userDetails) => {
    console.log(userDetails);
    return new Promise(function myFn(resolve, reject) {
        userModel.findByIdAndUpdate(id, userDetails)
        .then(
            function (result) {
                    resolve(result);
            }
        ).catch(
            function (error) {
                    reject(false);
            }
        ) 
    });
}

module.exports.removeUserDBService = (id) => {
    return new Promise(function myFn(resolve, reject) {
        userModel.findByIdAndDelete(id).then((result)=>{resolve(result);}).catch((error)=>{reject(false);});
    });
}