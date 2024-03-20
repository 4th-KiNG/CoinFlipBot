import { observer } from "mobx-react-lite"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { HistoryPage } from "./pages/History/ui/HistoryPage.tsx"
import { MainPage } from "./pages/Main/ui/MainPage.tsx"
import { CurrencyProvider } from "./shared/providers/Currency/CurrencyProvider.tsx"
import { TonConnectUiProvider } from "./shared/providers/Ton/TonConnectUIProvider/TonConnectUIProvider.tsx"
import { UserProvider } from "./shared/providers/User/UserProvider.tsx"
import { StoreProvider } from "./shared/store/StoreProvider.tsx"
import { DialogProvider } from "./shared/ui/display/Modal/DialogProvider"

const App = observer(function App() {
  return (
    <TonConnectUiProvider>
      <StoreProvider>
        <UserProvider>
          <CurrencyProvider>
            <BrowserRouter>
              <Routes>
                <Route path={'/'} element={<MainPage />} />
                <Route path={'/history'} element={<HistoryPage />} />
              </Routes>
              <DialogProvider />
            </BrowserRouter>
          </CurrencyProvider>
        </UserProvider>
      </StoreProvider>
    </TonConnectUiProvider>
  )
})

export default App
