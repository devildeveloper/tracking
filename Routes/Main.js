module.exports = function(server){
  server.route([
    {
      method:'GET',
      path:'/',
      handler:function(request,reply){
        reply('hello world!')
      }
    },
    {
      method:'GET',
      path:'/version',
      handler:function(request,reply){
        reply('0.0.1')
      }
    }
])
}
