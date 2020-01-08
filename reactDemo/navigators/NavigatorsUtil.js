export default class NavigationUtil {
  static goPage (page, params) {
    const { navigation } = NavigationUtil
    console.log(page)
    if (!navigation) {
      console.log('!navigation')
      return
    }
    navigation.navigate(page, {
      ...params
    })
  }
}