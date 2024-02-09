import Navigation from "@/app/navigation";
import AddressModel from "./model";

export default function NewAddress(){
  return <main>
    <Navigation menuList={[]} pageName="Address" />
    <AddressModel/>
  </main>
}