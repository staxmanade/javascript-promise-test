var expect = require('chai').expect;

var doSomething = function(){
    return new Promise(function(resolve, reject){
        resolve("doSomething");
    });
};

var doSomethingElse = function(){
    return new Promise(function(resolve, reject){
        resolve("doSomethingElse");
    });
};

describe("Playing with some async code", function(){

    it("Promise test 1", function(done) {

        doSomething().then(function(){
            return doSomethingElse();
        }).then(function(result) {
            try {
                expect(result).to.equal("???");
                done();
            } catch(err) {
                done(err);
            }
        });

    });

    it("Promise test 2", function(done) {

        doSomething().then(function(){
            doSomethingElse();
        }).then(function(result) {
            try {
                expect(result).to.equal("???");
                done();
            } catch(err) {
                done(err);
            }
        });

    });


    it("Promise test 3", function(done) {

        doSomething().then(doSomethingElse())
            .then(function(result) {
                try {
                    expect(result).to.equal("???");
                    done();
                } catch(err) {
                    done(err);
                }
            });

    });

    it("Promise test 4", function(done) {

        doSomething().then(doSomethingElse)
            .then(function(result) {
                try {
                    expect(result).to.equal("???");
                    done();
                } catch(err) {
                    done(err);
                }
            });

    });

});