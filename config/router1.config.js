export default [
    // user
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        { path: '/user', redirect: '/user/login' },
        { path: '/user/login', component: './User/Login' },
        { path: '/user/register', component: './User/Register' },
        { path: '/user/register-result', component: './User/DetailsForm' },
      ],
    },
    //account
    {
      name: 'account',
      icon: 'user',
      path: '/account',
      component: '../layouts/BasicLayout',
      routes: [
        {
        //   path: '/account/center',
        //   name: 'center',
        //   component: './Account/Center/Center',
        //   routes: [
        // //     {
        // //       path: '/account/center',
        // //       redirect: '/account/center/articles',
        // //     },
        // //     {
        // //       path: '/account/center/articles',
        // //       component: './Account/Center/Articles',
        // //     },
        // //     {
        // //       path: '/account/center/applications',
        // //       component: './Account/Center/Applications',
        // //     },
        // //     {
        // //       path: '/account/center/projects',
        // //       component: './Account/Center/Projects',
        // //     },
        // //   ],
        // // },
        // {
          path: '/account/settings',
          name: 'Account Settings',
          authority: ['admin', 'user'],
          component: './Account/Settings/Info',
          routes: [
            {
              path: '/account/settings',
              redirect: '/account/settings/base',
            },
            {
              path: '/account/settings/base',
              authority: ['admin', 'user'],
              component: './Account/Settings/BaseView',
            },
            // {
            //   path: '/account/settings/security',
            //   component: './Account/Settings/SecurityView',
            // },
          ],
        },
      ],
    },
    // app
    {
      path: '/',
      component: '../layouts/BasicLayout',
      Routes: ['src/pages/Authorized'],
      authority: ['admin', 'user'],
      routes: [
        // dashboard
        { path: '/', redirect: '/dashboard/analysis' },
        { path: '/dashboard', redirect: './Dashboard/Analysis' },
        // { path: '/orders', redirect: './dashboard/participantsList' },
        {
          path: '/dashboard/analysis',
          name: 'dashboard',
          icon: 'dashboard',
          component: './Dashboard/Analysis'
        },
        {
          path: 'dashboard/participantsList',
          name: 'List of Participants',
          icon:'ordered-list',
          component: './List/ParticipantList',
        },
        {
          path: 'dashboard/certificateList',
          name: 'Certificates',
          icon:'ordered-list',
          component: './List/CertificateList',
        },
        {
          path: 'dashboard/revokedCertificateList',
          name: 'Revoked Certificates',
          icon:'ordered-list',
          component: './List/RevokedCertificateList',
        },
        
        // {
        //   path: '/Dashboard/order',
        //   name: 'Orders',
        //   icon: 'table',
          
        //   routes: [
        //             {
        //               path: '/Dashboard/order',
        //               redirect: '/Dashboard/order/myOrders',
        //             },
        //             {
        //               path: '/Dashboard/order/myOrders',
        //               name: 'My Orders',
        //               icon:'table',
        //               component: './List/MyOrders',
        //             },
        //             {
        //               path: '/Dashboard/order/unassignedOrder',
        //               name: 'List of Participants',
        //               icon:'ordered-list',
        //               component: './List/ParticipantList',
        //             },
        //           ]
        // },
          // routes: [
          //   {
          //     path: '/dashboard/analysis',
          //     name: 'analysis',
          //     component: './Dashboard/Analysis',
          //   },
          //   {
          //     path: '/dashboard/monitor',
          //     name: 'monitor',
          //     component: './Dashboard/Monitor',
          //   },
          //   {
          //     path: '/dashboard/workplace',
          //     name: 'workplace',
          //     component: './Dashboard/Workplace',
          //   },
          // ],
        // forms
        // {
        //   path: '/form',
        //   icon: 'form',
        //   name: 'form',
        //   routes: [
        //     {
        //       path: '/form/basic-form',
        //       name: 'basicform',
        //       component: './Forms/BasicForm',
        //     },
        //     {
        //       path: '/form/step-form',
        //       name: 'stepform',
        //       component: './Forms/StepForm',
        //       hideChildrenInMenu: true,
        //       routes: [
        //         {
        //           path: '/form/step-form',
        //           redirect: '/form/step-form/info',
        //         },
        //         {
        //           path: '/form/step-form/info',
        //           name: 'info',
        //           component: './Forms/StepForm/Step1',
        //         },
        //         {
        //           path: '/form/step-form/confirm',
        //           name: 'confirm',
        //           component: './Forms/StepForm/Step2',
        //         },
        //         {
        //           path: '/form/step-form/result',
        //           name: 'result',
        //           component: './Forms/StepForm/Step3',
        //         },
        //       ],
        //     },
        //     {
        //       path: '/form/advanced-form',
        //       name: 'advancedform',
        //       authority: ['admin'],
        //       component: './Forms/AdvancedForm',
        //     },
        //   ],
        // },
        // list
        // {
        //   path: '/list',
        //   icon: 'table',
        //   name: 'list',
        //   routes: [
        //     {
        //       path: '/list/table-list',
        //       name: 'searchtable',
        //       component: './List/TableList',
        //     },
        //   ],
        // },
            // {
            //   path: '/list/basic-list',
            //   name: 'basiclist',
            //   component: './List/BasicList',
            // },
            // {
            //   path: '/list/card-list',
            //   name: 'cardlist',
            //   component: './List/CardList',
            // },
            // {
            //   path: '/list/search',
            //   name: 'searchlist',
            //   component: './List/List',
            //   routes: [
            //     {
            //       path: '/list/search',
            //       redirect: '/list/search/articles',
            //     },
            //     {
            //       path: '/list/search/articles',
            //       name: 'articles',
            //       component: './List/Articles',
            //     },
            //     {
            //       path: '/list/search/projects',
            //       name: 'projects',
            //       component: './List/Projects',
            //     },
            //     {
            //       path: '/list/search/applications',
            //       name: 'applications',
            //       component: './List/Applications',
            //     },
            //   ],
            // },
        // {
        //   path: '/profile',
        //   name: 'profile',
        //   icon: 'profile',
        //   routes: [
        //     // profile
        //     {
        //       path: '/profile/basic',
        //       name: 'basic',
        //       component: './Profile/BasicProfile',
        //     },
        //     {
        //       path: '/profile/advanced',
        //       name: 'advanced',
        //       authority: ['admin'],
        //       component: './Profile/AdvancedProfile',
        //     },
        //   ],
        // },
        // {
        //   name: 'result',
        //   icon: 'check-circle-o',
        //   path: '/result',
        //   routes: [
        //     // result
        //     {
        //       path: '/result/success',
        //       name: 'success',
        //       component: './Result/Success',
        //     },
        //     { path: '/result/fail', name: 'fail', component: './Result/Error' },
        //   ],
        // },
        // {
        //   name: 'exception',
        //   icon: 'warning',
        //   path: '/exception',
        //   routes: [
        //     // exception
        //     {
        //       path: '/exception/403',
        //       name: 'not-permission',
        //       component: './Exception/403',
        //     },
        //     {
        //       path: '/exception/404',
        //       name: 'not-find',
        //       component: './Exception/404',
        //     },
        //     {
        //       path: '/exception/500',
        //       name: 'server-error',
        //       component: './Exception/500',
        //     },
        //     {
        //       path: '/exception/trigger',
        //       name: 'trigger',
        //       hideInMenu: true,
        //       component: './Exception/TriggerException',
        //     },
        //   ],
        // },
        // {
        //   component: '404',
        // },
      ],
    },
  ];
  