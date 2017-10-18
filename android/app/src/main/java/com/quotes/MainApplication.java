package com.quotes;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.microsoft.codepush.react.CodePush;
import com.geektime.rnonesignalandroid.ReactNativeOneSignalPackage;
import com.microsoft.azure.mobile.react.push.RNPushPackage;
import com.sbugert.rnadmob.RNAdMobPackage;
import com.microsoft.azure.mobile.react.mobilecenter.RNMobileCenterPackage;
import com.microsoft.azure.mobile.react.crashes.RNCrashesPackage;
import com.microsoft.azure.mobile.react.analytics.RNAnalyticsPackage;
import io.realm.react.RealmReactPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

        @Override
        protected String getJSBundleFile() {
        return CodePush.getJSBundleFile();
        }
    
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new CodePush(getResources().getString(R.string.reactNativeCodePush_androidDeploymentKey), getApplicationContext(), BuildConfig.DEBUG),
            new ReactNativeOneSignalPackage(),
            new RNPushPackage(MainApplication.this),
            new RNAdMobPackage(),
            new RNMobileCenterPackage(MainApplication.this),
            new RNCrashesPackage(MainApplication.this, getResources().getString(R.string.mobileCenterCrashes_whenToSendCrashes)),
            new RNAnalyticsPackage(MainApplication.this, getResources().getString(R.string.mobileCenterAnalytics_whenToEnableAnalytics)),
            new RealmReactPackage(),
            new VectorIconsPackage(),
            new LinearGradientPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
