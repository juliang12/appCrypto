import { InjectedConnector } from "@web3-react/injected-connector";
import Web3 from "web3";

const ETHEREUM_INDEX = 1

export const connector = new InjectedConnector({
    supportedChainIds:[ETHEREUM_INDEX]
})

export const getLibrary = (provider)=>{
    const library = new Web3(provider);
    return library
}