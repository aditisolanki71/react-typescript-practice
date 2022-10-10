import Text from "./Text";
const PolyMorphic = () => {
   return (
      <div>
         <Text as="h1" size="lg">Heading</Text>
         <Text as="p" size="md">Para</Text>
         <Text as="label" htmlFor="helo" size="sm">label</Text>
      </div>
   )
}
export default PolyMorphic;