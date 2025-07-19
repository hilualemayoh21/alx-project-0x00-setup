import Card from "@/components/Card"
import Button from "@/components/Button";
const Landing: React.FC = ()=>{
      return(
        <div className="">
           <h1 className="text-xl font-extralight">Landing Page</h1>
           <Card/> <div className="space-x-4">
        <Button title="Small Button" size="small" shape="rounded-sm" />
        <Button title="Medium Button" size="medium" shape="rounded-md" />
        <Button title="Large Button" size="large" shape="rounded-full" />
      </div>

        </div>
      )
}
export default Landing;