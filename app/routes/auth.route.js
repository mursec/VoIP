module.exports = app => {
    var user = require('../controller/user.controller');
    var router = require("express").Router();
    const auth = require('../middleware/auth.middleware');
    //router.post("/register",auth, user.login);
    router.post("/login", user.login);
    //router.get("/me", user.getUser); 
    router.post("/register", user.register);
    router.post("/otp-verify", user.otpVerify);
    router.post("/get-signup", user.getSignUpOption);
    router.post("/get-version", user.getVersionOption);

    router.get("/update-all-profile", user.updateAllProfile);

    app.use('/api/auth', router);
};