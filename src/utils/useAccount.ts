import {useState} from 'react'
import detectEthereumProvider from '@metamask/detect-provider'
import {Harmony} from './constants'
const {HarmonyExtension} = require('@harmony-js/core')


export const useAccount = () => {
  const [account, setAccount] = useState<any | undefined>(undefined)
  const [chainId, setChainId] = useState<number | undefined>(undefined)
  const [error, setError] = useState<string | undefined>(undefined)

  const handleAccountsChanged = (accounts: [string?]) => {
    if (accounts.length === 0) {
      console.error('Not found accounts')
    } else {
      setAccount({address: accounts[0]})
      console.log('Your address: ', accounts[0])
    }
  }

  const handleDisconnected = () => {
    setAccount(undefined)
    setError(undefined)
  }

  const handleChangeChainId = (chainId: number) => {
    setChainId(chainId)
    console.log('chainIdChanged', chainId)
  }

  const connect = async (wallet: string) => {
    setError(undefined)
    try {
      if (wallet === 'onewallet') {
        if (!window.onewallet) {
          throw new Error('WALLET_NOT_FOUND')
        }
        const harmonyExt = await new HarmonyExtension(window.onewallet)
        const account = await harmonyExt.login()
        console.log(account)
        setAccount(account)
      } else if( wallet === 'metamask') {
        const provider: any = await detectEthereumProvider({mustBeMetaMask: true})
        if (!provider) {
          throw new Error('WALLET_NOT_FOUND')
        }

        provider.on('accountsChanged', handleAccountsChanged)
        provider.on('disconnect', handleDisconnected)
        provider.on('chainIdChanged', handleChangeChainId)
        
        try {
          await provider.request({
            method: 'wallet_switchEthereumChain',
            params: [{chainId: `0x${Harmony.chainID.toString(16)}`}],
          })
        } catch (switchError: any) {
          if (switchError.code === 4902) {
            await provider.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: `0x${Harmony.chainID.toString(16)}`,
                  chainName: Harmony.chainName,
                  nativeCurrency: {
                    name: Harmony.token,
                    symbol: Harmony.token,
                    decimals: Harmony.decimals,
                  },
                  rpcUrls: [Harmony.rpcURL],
                  blockExplorerUrls: [Harmony.explorerURL],
                },
              ],
            })
          }
        }
        const acc = await provider.request({method: 'eth_requestAccounts'})
        handleAccountsChanged(acc)
      }
    } catch (err: any) {
      handleDisconnected()
      console.log(err.message)
      setError(err.message || 'Failed to connect to the wallet')
    }
  }

  return [connect, account, error]
}
