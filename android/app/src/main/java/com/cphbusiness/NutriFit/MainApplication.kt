package com.cphbusiness.NutriFit

import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.soloader.SoLoader
import expo.modules.ApplicationLifecycleDispatcher
import expo.modules.ReactNativeHostWrapper

import io.invertase.firebase.app.ReactNativeFirebaseAppPackage
import io.invertase.firebase.auth.ReactNativeFirebaseAuthPackage
import io.invertase.firebase.database.ReactNativeFirebaseDatabasePackage

class MainApplication : Application(), ReactApplication {

  override val reactNativeHost: ReactNativeHost = ReactNativeHostWrapper(
        this,
        object : DefaultReactNativeHost(this) {
          override fun getPackages(): List<ReactPackage> {
            val packages = PackageList(this).packages.toMutableList()
            packages.add(ReactNativeFirebaseAppPackage())
            packages.add(ReactNativeFirebaseAuthPackage())
            packages.add(ReactNativeFirebaseDatabasePackage())
            return packages
          }

          override fun getJSMainModuleName(): String = ".expo/.virtual-metro-entry"

          override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

          override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
          override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
      }
  )

  override fun onCreate() {
    super.onCreate()
    SoLoader.init(this, false)
    ApplicationLifecycleDispatcher.onApplicationCreate(this)
  }
}
