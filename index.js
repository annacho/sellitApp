import { Navigation } from 'react-native-navigation';
import App from './App';

App();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "sellitApp.Login"
      }
    }
  });
});
