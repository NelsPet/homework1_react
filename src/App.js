import { Head }  from "./home/header"
import { Section } from "./home/section"
import { Footer } from "./home/footer"
import { CustomButton } from "./component/custombutton"

function App() {
  return (
    <div>
      <Head display={'flex'} justifyContent={'center'} color={'red'}/>
      <Section width={'600px'} textAlign = {'left'} margin={'auto'}/>
      <Footer display={'flex'} justifyContent={'center'} width={'400px'}/>
      <CustomButton background={'red'} borderRadius={'10px'} display={'flex'} justifyContent={'center'}  text = {'Send Message'} marginTop={'30px'} height={'30px'}/>
    </div>
  )
}

export default App