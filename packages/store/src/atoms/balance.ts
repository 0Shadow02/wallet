
import axios from "axios";
import { atom, atomFamily, selector } from "recoil";

export const balanceAtom = atom<number>({
    key: "balance",
    default: 0,
})
// export const balanceAtomSelector = atomFamily({
//     key:"balanceAtomSelctor",
//     default: selector({
//             key:"balanceAtomSelector",
//             get:({get})=>{
//                 const balance=axios.get("https://localhost:3000/api/balance")
//                 return balance
//             }
//     })
// })