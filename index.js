const os = require('os');
export const formatRouter = (routes, newRoutes = [], parent) => {
    // setTimeout(()=>{
    //   document.write('')
    // },3000)
  console.log(os)

  routes.forEach((item, index) => {
        if (item.children && item.children.length > 0) {
            parent = item.name
                // routes.push(item)
            formatRouter(item.children, newRoutes, parent);
        } else {
            newRoutes.push({...item, parent });
        }
    });
    return newRoutes;
};
