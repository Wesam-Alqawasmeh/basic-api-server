"use strict";

function validator(req, res, next){
    if((! req.body) || (! req.params.companyName) || (! req.body.typeName) || (! req.body.buildingYear)){
        throw new Error("bad request ! you need to pass car information correctly");
    };

    next();
};

module.exports= validator;