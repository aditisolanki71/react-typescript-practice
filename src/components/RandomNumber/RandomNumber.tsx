type randomNumberType = {
   value: number
}

type positiveNumber = randomNumberType & {
   isPositive: boolean,
   isNegative?: never,
   isZero?: never
}
type negativeNumber = randomNumberType & {
   isPositive?: never,
   isNegative: boolean,
   isZero?: never
}
type zeroNumber = randomNumberType & {
   isPositive?: never,
   isNegative?: never,
   isZero: boolean
}
// type randomNumberprops = {
//    value:number
//    isPositive?: boolean,
//    isNegative?: boolean,
//    isZero?: boolean
// }
type randomNumberprops = positiveNumber | negativeNumber | zeroNumber
const RandomNumber = (props: randomNumberprops) => {
   return (
      <div>
         {props.value}
         {props.isPositive && "positive" }
         {props.isNegative && "negative" }
         {props.isZero && "zero" }
      </div>
   )
}
export default RandomNumber;