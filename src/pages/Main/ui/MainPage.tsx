import { observer } from "mobx-react-lite"

import { PageLayout } from "../../../shared/ui/display/PageLayout/PageLayout.tsx"
// import { GameHistoryWidget } from "../../../widgets/GameHistory/ui/GameHistoryWidget.tsx"
import { GameStatus } from "../../../widgets/GameStatus/ui/GameStatus.tsx"
import { InfoFooter } from "../../../widgets/InfoFooter/ui/InfoFooter.tsx"
import classes from './MainPage.module.scss'

export const MainPage = observer(() => {
  return (
    <PageLayout className={classes.page}>
      <GameStatus />
      {/* <GameHistoryWidget /> */}
      <InfoFooter />
    </PageLayout>
  )
})