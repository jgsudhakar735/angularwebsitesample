export class MENU {

  static PRELOGIN_MENU=   {
  "English": [
          {
              path: '/',
              menuId: 'home'
          },
          {
              path: '/services',
              menuId: 'services'
          },
          {
              path: '/aboutus',
              menuId: 'aboutus'
          },
          {
              path: '/contactus',
              menuId: 'contactus'
          }
        ],
  "Telugu": [
          {
            path: '/',
            menuId: 'home'
          },
          {
              path: '/services',
              menuId: 'services'
          },
          {
              path: '/aboutus',
              menuId: 'aboutus'
          },
          {
              path: '/contactus',
              menuId: 'contactus'
          }
        ]
    };

    static POST_LOGIN_MENU = {
      "English": [
        {
            path: '/secure',
            menuId: 'dashboard',
            icon: 'dashboard'
        },
        {
            path: '/secure/user',
            menuId: 'users',
            icon: 'person'
        },
        {
            path: '/secure/register',
            menuId: 'register',
            icon: 'app_registration'
        },
        {
            path: '/secure/settings',
            menuId: 'settings',
            icon: 'settings'
        }
      ],
  "Telugu": [
            {
                path: '/secure',
                menuId: 'dashboard',
                icon: 'dashboard'
            },
            {
                path: '/secure/user',
                menuId: 'users',
                icon: 'person'
            },
            {
                path: '/secure/register',
                menuId: 'register',
                icon: 'app_registration'
            },
            {
                path: '/secure/settings',
                menuId: 'settings',
                icon: 'settings'
            }
        ]
      };
}
