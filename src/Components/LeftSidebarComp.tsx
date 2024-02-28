import React from 'react';

import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { useNavigate } from 'react-router-dom';

export const LeftSideBarComp=()=> {
  const history = useNavigate();

    return (
      <>
                  <div className="navbar-brand text-center p-2">
Logo Here
</div>
        <Navigation
            // you can use your own router's api to get pathname
            activeItemId="/dashboard/analytics"
            onSelect={({itemId}) => {
              // maybe push to the route
              history(itemId)
            }}
            items={[
              {
                title: 'Dashboard',
                itemId: '/dashboard',
                subNav: [
                  {
                    title: 'Analytics',
                    itemId: '/dashboard/analytics',
                    // Requires v1.9.1+ (https://github.com/abhijithvijayan/react-minimal-side-navigation/issues/13)
                    // elemBefore: () => <Icon name="cloud-snow" />,
                  },
                  {
                    title: 'Visits',
                    itemId: '/dashboard/visits',
                    // elemBefore: () => <Icon name="coffee" />,
                  },
                  {
                    title: 'Widgets',
                    itemId: '/dashboard/Widgets',
                    // elemBefore: () => <Icon name="coffee" />,
                  },

                ],
              },
             
            ]}
          />
      </>
    );
}