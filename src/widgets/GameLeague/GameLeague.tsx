import { useTonAddress } from "@tonconnect/ui-react"
import { observer } from "mobx-react-lite"
import React, { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { Address } from '@ton/core'
import { GameLeagueCard } from "../../entity/GameLeagueCard/GameLeague.tsx"
import { useActivatedStore } from "../../shared/lib/store/useActivateStore.ts"
import { ButtonSpinner } from "../../shared/ui/control/Button/ButtonSpinner"
import classes from '../GameHistory/ui/GameHistoryWidget.module.scss'
import axios from 'axios';
import { contractAddress } from "../../shared/config/contracts/master"
interface Wallets{
  number: BigInt,
  adress: string,
  
}
export const GameLeague = observer(() => {
  const address = useTonAddress()
  const { gameHistoryStore } = useActivatedStore('gameHistoryStore', address)
  const GetTransactions = async () => {
    console.log("GetTransactions");
    const endpoint = "https://tonapi.io"; 
    // const contractAddress = "EQC8-9Ylsf5rQftBZrLhGDbodCqmCR4VVYgC4FKfjFUfRvGa";
    const result = await axios.get(endpoint + '/v2/blockchain/accounts/' + encodeURIComponent(contractAddress.toString()) + "/transactions?limit=1000");
    return result;
  }
  let transactions: any;
  let values: Array<Wallets> = [];
  const [value, setValue] = useState(values)
  useEffect(() => {
    GetTransactions().then(data => {
      transactions = data.data.transactions
      transactions.map((ind: any) => {
        let address = Address.parse(ind.in_msg.source.address).toString({bounceable: false})
        let index = values.findIndex(item => item.adress == address);
        if (index !== -1){
          values = values.map((item, i) => i == index ? { ...item, number: item.number + ind.in_msg.value } : item);
          
        }
        else{
          values = [
            ...values,
            { number: ind.in_msg.value, adress: address}
          ]
        }
      })
      setValue(values)
    }).catch(error => console.log(error))
  }, [])
  
  
  
  return (
    
    <div className={classes.container}>
      <InfiniteScroll
        pullDownToRefresh
        dataLength={(gameHistoryStore.games?.length ?? 0)}
        next={() => {gameHistoryStore.requestMore()}}
        hasMore={gameHistoryStore.hasMore}
        pullDownToRefreshThreshold={50}
        refreshFunction={gameHistoryStore.reload}
        height={350}
        className={classes.infiniteScroll}
        loader={<ButtonSpinner />}
      >
        {value.sort((a, b) => b.number > a.number ? 1: -1).map((item, key) => {
          
          return(
            <React.Fragment>
              <GameLeagueCard index={key} adress={item.adress} value={item.number}></GameLeagueCard>
            </React.Fragment>
          )
        }) }
      </InfiniteScroll>
    </div>
  )
  
})