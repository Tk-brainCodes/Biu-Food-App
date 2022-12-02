import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { HomepageScreen } from "./features/Homepage/components";
import { AuthPage } from "./features/Authentication/components";
import { Verification } from "./components";
import { NewPassword } from "./components";
import { MainHome } from "./features/MainHome";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import { Search } from "./features/Search";
import { Favorite } from "./features/Favorite";
import { Account } from "./features/Account";
import { Checkout } from "./features/CheckoutPage";
import { Feedback } from "./features/Feedback";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet style={{overflowX: 'hidden', overflowY: 'auto'}}>
        <Route exact path='/home'>
          <HomepageScreen />
        </Route>
        <Redirect exact from='/' to='/home' />
        <Route exact path='/auth'>
          <AuthPage />
        </Route>
        <Route exact path='/verification'>
          <Verification />
        </Route>
        <Route exact path='/NewPassword'>
          <NewPassword />
        </Route>
        <Route exact path='/MainHome'>
          <MainHome />
        </Route>
        <Route exact path='/Search'>
          <Search />
        </Route>
        <Route exact path='/Favorite'>
          <Favorite />
        </Route>
        <Route exact path='/Account'>
          <Account />
        </Route>
        <Route exact path='/Checkout'>
          <Checkout />
        </Route>
        <Route exact path='/Feedback'>
          <Feedback />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
