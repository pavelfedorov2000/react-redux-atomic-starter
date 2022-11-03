import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Home, Catalog, NotFound, Blog, BlogDetail } from '../Pages';
import { RouterContext } from '../context';

function AppRouter() {
    const routes = React.useMemo(() => [{
        id: 0,
        path: "/",
        component: Home,
        exact: true
    }, {
        id: 2,
        title: "Каталог",
        path: "/catalog",
        component: Catalog,
        empty: {
            icon: {
                src: ""
            },
            title: {
                text: "Нет актуальных товаров"
            }
        }
    }, {
        id: 3,
        title: "Блог",
        path: "/blog",
        component: Blog,
        exact: true,
        empty: {
            icon: {
                src: ""
            },
            title: {
                text: "Нет актуальных товаров"
            }
        }
    }, {
        id: 4,
        path: "/blog/:id",
        component: BlogDetail,
        exact: true
    }, {
        id: 5,
        title: "Похоже, мы не можем найти нужную вам страницу",
        path: "/not-found",
        component: NotFound
    }], [Home, Catalog, Blog, BlogDetail, NotFound]);

    return (
        <RouterContext.Provider value={{
            routes,
        }}>
            <Switch>
                {routes.map(route => (
                    <Route
                        key={route.id}
                        exact={route.exact === true ? true : false}
                        path={route.path}
                        render={() => <route.component {...route} />}
                    />
                ))}
                <Redirect to="/not-found" />
            </Switch>
        </RouterContext.Provider>
    );
}

export default AppRouter;