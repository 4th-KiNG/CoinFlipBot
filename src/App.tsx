import { observer } from "mobx-react-lite"
import { CurrencyProvider } from "./shared/providers/Currency/CurrencyProvider.tsx"
import { TonConnectUiProvider } from "./shared/providers/Ton/TonConnectUIProvider/TonConnectUIProvider.tsx"
import { UserProvider } from "./shared/providers/User/UserProvider.tsx"
import { StoreProvider } from "./shared/store/StoreProvider.tsx"
import { DialogProvider } from "./shared/ui/display/Modal/DialogProvider"
import { HistoryPage } from "./pages/History/ui/HistoryPage.tsx"
import { LeaguePage } from "./pages/League/League.tsx"
import { MainPage } from "./pages/Main/ui/MainPage.tsx"
import './main.css'


const App = observer(function App() {
  return (
    <TonConnectUiProvider>
      <StoreProvider>
        <UserProvider>
          <CurrencyProvider>
            <div id="home"><MainPage/></div>
            <div id="history" className="hidden"><HistoryPage/></div>
            <div id="league" className="hidden">   <LeaguePage/>   </div>
            <DialogProvider />
          </CurrencyProvider>
        </UserProvider>
      </StoreProvider>
    </TonConnectUiProvider>
  )
})

export default App
