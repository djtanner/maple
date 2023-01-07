import { createMeta } from "stories/utils"
import { Tag } from "../../components/Tag/Tag"


// TODO: move into components directory
//const Tag = () => <div>TODO</div>

export default createMeta({
  title: "Components/Tag",
  figmaUrl:
    "https://www.figma.com/file/3ifz37EOwDfmnEG8320KlD/CS1---MAPLE?node-id=231%3A13514",
  component: Tag
})


export const Primary = () => (
  <Tag 
    color="#C71E32"
    border = "1px solid #C71E32"
    width = "69px"
    textcolor = "#FFFFFF"
    fontsize="12px" 
> senate </Tag>
)


export const House = () => (
  <Tag
    color="#1A3185"
    border = "1px solid #1A3185"
    width = "69px"
    textcolor = "#FFFFFF"
    fontsize="12px"
> house </Tag>
)

export const Joint = () => (
  <Tag
    color="#FFFFFF"
    border = "1px solid #000000"
    width = "55px"
    textcolor = "#000000"
    fontsize="12px"
> joint</Tag>
)