import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList177192Navigator from '../features/ArticleList177192/navigator';
import ArticleList177191Navigator from '../features/ArticleList177191/navigator';
import ArticleList177190Navigator from '../features/ArticleList177190/navigator';
import UserProfile4177186Navigator from '../features/UserProfile4177186/navigator';
import Feed1177185Navigator from '../features/Feed1177185/navigator';
import SignUp23177183Navigator from '../features/SignUp23177183/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList177192: { screen: ArticleList177192Navigator },
ArticleList177191: { screen: ArticleList177191Navigator },
ArticleList177190: { screen: ArticleList177190Navigator },
UserProfile4177186: { screen: UserProfile4177186Navigator },
Feed1177185: { screen: Feed1177185Navigator },
SignUp23177183: { screen: SignUp23177183Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
