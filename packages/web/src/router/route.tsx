 import BaseLayout from '@/layouts/BaseLayout';
 import LoginLayout from '@/layouts/LoginLayout';
 import NoMatch from '@/components/NoMatch';
 import Project from '@/pages/project';
 import Login from '@/pages/login'
import LoginGitlab from "../pages/login-gitlab";
 
 
 const routes: RouteObject[] = [
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        { index: true, element: <Project /> },
        // {
        //   path: "/courses",
        //   element: <Courses />,
        //   children: [
        //     { index: true, element: <CoursesIndex /> },
        //     { path: "/courses/:id", element: <Course /> },
        //   ],
        // },
        { path: "*", element: <NoMatch /> },
      ],
    },
    {
      path: "/login",
      element: <LoginLayout />,
      children: [
        { index: true, element: <Login /> },
        { path: '/login/gitlab', element: <LoginGitlab /> },
      ],
    },
  ];

  export {
    routes
  }