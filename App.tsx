import 'react-native-gesture-handler'
import { ThemeProvider } from 'styled-components'
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular
} from '@expo-google-fonts/roboto'
import theme from './src/global/styles/theme'
import { SignUp } from './src/pages/SignUp'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from './src/pages/Home'
import { CreateNewPost } from './src/pages/CreateNewPost'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import { Loading } from './src/components/Loading'
import { Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  const Stack = createStackNavigator()

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewPost"
              component={CreateNewPost}
              options={{
                title: 'New Post',
                headerStyle: {
                  backgroundColor: theme.colors.primary
                },
                headerTitleStyle: {
                  color: theme.colors.white,
                  fontFamily: theme.fonts.regular
                },
                headerTintColor: theme.colors.white
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  )
}
