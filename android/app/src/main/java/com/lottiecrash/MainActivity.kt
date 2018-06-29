package com.lottiecrash

import com.facebook.react.ReactActivity
import com.facebook.react.bridge.Arguments
import com.facebook.react.modules.core.DeviceEventManagerModule

class MainActivity : ReactActivity() {
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    override fun getMainComponentName(): String = "LottieCrash"

    override fun onResume() {
        super.onResume()

        animTab()
    }

    private fun animTab() {
        val map = Arguments.createMap()
        getEmitter()?.emit("AnimTab", map)
    }

    private fun getEmitter() : DeviceEventManagerModule.RCTDeviceEventEmitter? {
        return reactInstanceManager.currentReactContext?.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
    }
}
