  "use client";
  import AuthenticationPage from "../containers/Admin/Authentication";
  import HomePage from "../containers/Admin/HomePage";
  import "modules/ui/styles/page.css"
  import SettingsPage from "../containers/Admin/SettingsPage";


  export default function RouteToHomePage() {
    return <div>
      <SettingsPage mode = "profile"/>
      {/* <AuthenticationPage/> */}
      {/* <HomePage/> */}
      </div>
  }
