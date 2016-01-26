const Expect   = require('chai').expect;
const Request  = require('request');
const Path     = 'http://localhost:3000/';
const Root     = require('./Expect/root.js');

describe('URL´s tesintg',function(){
  describe('root ("/") ',function(){
    it('should be return "hello world!" ',function(done){
      Request({
        method:'GET',
        uri   : Path
      },function(err,response,body){
        Expect(Root.statusCode).to.equal(response.statusCode);
        Expect(Root.content).to.equal(body)
        done()
      })
    });
  });
});
