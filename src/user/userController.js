var userService = require('./userService');
 console.log("'''''''");
var getDataConntrollerFn = async (req, res) =>
{
    var empolyee = await userService.getDataFromDBService();
    res.send({ "status": true, "data": empolyee });
}
 
var createUserControllerFn = async (req, res) => {
    console.log("llLL>>>", req.body);
    try {
      var status = await userService.createUserDBService(req.body);
        res.send(status);
    } catch (error) {
      console.log("errrr==>>", error);
    }
  }
 
var updateUserController = async (req, res) =>
{
    console.log(req.params.id);
    console.log(req.body);
    
    var result = await userService.updateUserDBService(req.params.id,req.body);
 
     if (result) {
        res.send({ "status": true, "message": "User Updateeeedddddd"} );
     } else {
         res.send({ "status": false, "message": "User Updateeeedddddd Faileddddddd" });
     }
}
 
var deleteUserController = async (req, res) =>
{
     console.log(req.params.id);
     var result = await userService.removeUserDBService(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "User Deleteddd"} );
     } else {
         res.send({ "status": false, "message": "User Deleteddd Faileddddddd" });
     }
}
module.exports = { getDataConntrollerFn,createUserControllerFn,updateUserController,deleteUserController };
