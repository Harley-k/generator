export const formatRouter = (routes, newRoutes = [], parent) => {
  console.log(1)
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
