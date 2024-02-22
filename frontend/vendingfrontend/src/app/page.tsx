import { Button } from "@/components/ui/button";
import Image from "next/image";

import { useState } from "react";
import { useReadContract } from 'wagmi'
import { abi } from './abi'

export default function Home() {
  //const [number, setNumber] = useState();

  function ReadContract() {
    const result = useReadContract({
      abi,
      address: '0x6b175474e89094c44da98b954eedeac495271d0f',
      functionName: 'toys',
    })

    // function handleClick() {
    //   setNumber({number : number-1})
    // }
    return (
      <>
        <w3m-button />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p>Interact with the Vending Machine Here: </p>
        {/* <Button onClick={handleClick}>Toy</Button> */}
        <p>Current number of toys in the vending machine: </p>
        <div>Toys: {result?.toString()}</div>
      </>
    );
  }
}
