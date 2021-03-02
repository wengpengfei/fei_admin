import store from '@/store'
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'

@Module({
  name: 'ApplicationModule',
  dynamic: true,
  store,
  namespaced: true
})
class ApplicationModule extends VuexModule {
  applicationInfo = 1111

  @Action
  getApplicationInfo() {
    this.setApplicationInfo()
  }

  @Mutation
  setApplicationInfo() {
    this.applicationInfo = 222
    console.log(this.applicationInfo)
  }
}

export default getModule(ApplicationModule)
