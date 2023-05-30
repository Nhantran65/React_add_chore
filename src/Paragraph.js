import { useContext } from "react"
// trong hooks này viết thẳng một thằng Consumer để nhận được dữ liệu rồi
import { ThemeContext } from "./App"
function Paragraph(){
    const theme= useContext(ThemeContext)
    return(
        <p className={theme}>
            React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.
        </p>
    )
}
export default Paragraph