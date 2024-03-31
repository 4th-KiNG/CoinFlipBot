import { observer } from "mobx-react-lite"
import { PageLayout } from "../../shared/ui/display/PageLayout/PageLayout.tsx"
import { GameLeague } from "../../widgets/GameLeague/GameLeague.tsx"
import { GameStatus } from "../../widgets/GameStatus/ui/GameStatus.tsx"
import { InfoFooter } from "../../widgets/InfoFooter/ui/InfoFooter.tsx"
import classes from "../Main/ui/MainPage.module.scss"

export const LeaguePage = observer(() => {
  return (
    <PageLayout className={classes.page}>
      <GameStatus isNoInterface element={<GameLeague />} />
      <InfoFooter />
    </PageLayout>
  )
})