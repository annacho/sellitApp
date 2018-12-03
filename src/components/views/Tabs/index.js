import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import FalseIcon from '../../../assets/images/circle.png';

const navStyle = {
  navBarTextFontSize:20,
  navBarTextColor:'#ffffff',
  navBarTextFontFamily: 'RobotoCondensed-Bold',
  navBarTitleTextCentered: true, // ANDROID ONLY
  navBarBackgroundColor: '#00ADA9'
}

const navLeftButton = (sources) => {
  return {
    title:'Drawer',
    id: 'DrawerButton',
    icon: sources[0],
    disableIconTint: true,
    buttonColor: 'white'
  }
}

const LoadTabs = () => {
  Promise.all([
    Icon.getImageSource('bars',20,'white'),
    Icon.getImageSource('dollar',20,'white'),
    Icon.getImageSource('search',20,'white')
  ]).then( sources =>  {
    Navigation.startTabBasedApp({
      tabs:[
        {
          screen:"sellitApp.Home",
          label:"Home",
          title:"Home",
          icon: sources[2],
          navigatorStyle:navStyle,
          navigatorButtons: {
            leftButtons:[navLeftButton(sources)]
          }
        },
        {
          screen:"sellitApp.AddPost",
          label:"Sell it",
          title:"Sell it",
          icon: sources[1],
          navigatorStyle:navStyle,
          navigatorButtons: {
            leftButtons:[navLeftButton(sources)]
          }
        },
        drawer:{
          left:{
            screen: "sellitApp.SidedrawerComponent",
            fixedWidth:500
          }
        }
      ]
    })
  })
}
