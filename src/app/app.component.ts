import { Component } from "@angular/core";
import { SplashScreen } from "@capacitor/splash-screen";
import * as LiveUpdates from "@capacitor/live-updates";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor() {
    this.initializeApp();
  }

  async initializeApp() {
    /* To make sure we provide the fastest app loading experience
       for our users, hide the splash screen automatically
       when the app is ready to be used:

        https://capacitor.ionicframework.com/docs/apis/splash-screen#hiding-the-splash-screen
    */
    const result = await LiveUpdates.sync();
    if (result.activeApplicationPathChanged) {
      await LiveUpdates.reload();
    } else {
      await SplashScreen.hide();
    }
  }
}
