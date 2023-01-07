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


const Template = (args) => (
  <Tag
    color="#C71E32"
    border = "1px solid #C71E32"
    height = "19px"
    radius = "12px"
    width = "69px"
    textcolor = "#FFFFFF"
    padding = "2px 10px"
    fontsize="12px"
> SENATE </Tag>
)

export const Primary = Template.bind({});
Primary.args = {
  variant: 'senate',
};

export const House = () => (
  <Tag
    color="#1A3185"
    border = "1px solid #1A3185"
    height = "19px"
    radius = "12px"
    width = "69px"
    textcolor = "#FFFFFF"
    padding = "2px 10px"
    fontsize="12px"
> HOUSE </Tag>
)

export const Joint = () => (
  <Tag
    color="#FFFFFF"
    border = "1px solid #000000"
    height = "19px"
    radius = "12px"
    width = "69px"
    textcolor = "#000000"
    padding = "2px 10px"
    fontsize="12px"
> JOINT </Tag>
)