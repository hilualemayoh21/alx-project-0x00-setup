import Card from "@/components/Card"
import Button from "@/components/Button";
const Landing: React.FC = ()=>{
      return(
        <div className="">
           <h1 className="text-xl font-extralight">Landing Page</h1>
           <Card/>

 <div className="space-x-4">
  <Button
    title="Small Button"
    size="small"
    shape="rounded-sm"
    styles="bg-blue-500 text-white hover:bg-blue-600"
  />
  <Button
    title="Medium Button"
    size="medium"
    shape="rounded-md"
    styles="bg-green-500 text-white hover:bg-green-600"
  />
  <Button
  title="Large Rounded Button"
  size="large"
  shape="rounded-lg"
  styles="bg-red-500 text-white hover:bg-red-600"
/>

  <Button
    title="Large Button"
    size="large"
    shape="rounded-full"
    styles="bg-purple-500 text-white hover:bg-purple-600"
  />
</div>


        </div>
      )
}
export default Landing;