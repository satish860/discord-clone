import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export default function Home() {

  return (
    <div>
      <h1>This is Protected</h1>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
