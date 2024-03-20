import { observer } from "mobx-react-lite"

import { PageLayout } from "../../../shared/ui/display/PageLayout/PageLayout.tsx"
import { GameHistoryWidget } from "../../../widgets/GameHistory/ui/GameHistoryWidget.tsx"
import { GameStatus } from "../../../widgets/GameStatus/ui/GameStatus.tsx"
import { InfoFooter } from "../../../widgets/InfoFooter/ui/InfoFooter.tsx"
import classes from "../../Main/ui/MainPage.module.scss"

export const HistoryPage = observer(() => {
  return (
    <PageLayout className={classes.page}>
      <GameStatus isNoInterface element={<GameHistoryWidget />} />
      <InfoFooter />
    </PageLayout>
  )
})