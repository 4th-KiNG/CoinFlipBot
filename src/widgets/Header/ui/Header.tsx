import { observer } from "mobx-react-lite"

import { LogoText } from "../../../entity/Logo/ui/LogoText/LogoText.tsx"
import { Menu } from "../../../features/Menu/ui/Menu.tsx"
import { WalletButton } from "../../../features/WalletButton/ui/WalletButton.tsx"
import classes from './Header.module.scss'

export const Header = observer(() => {

  return (
    <div className={classes.header}>
      <Menu />
      <LogoText />
      <WalletButton />
    </div>
  )
})