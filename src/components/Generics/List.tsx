type ListProps<T> = {
   items: T[],
   onClick: (value: T) => void
}
//<T extends {id: number}>
const List = <T extends string | number>({ items, onClick }: ListProps<T>) => {
   return (
      <div>
         List of items
         {items.map((item,index) => {
            return (
               <div key={index} onClick={() => onClick(item)}>
                  {item}
               </div>
            )
         })}
      </div>
   )
}
export default List;