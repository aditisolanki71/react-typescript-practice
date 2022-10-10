type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'
type toastProps = {
   position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
}
const Toast = ({ position } : toastProps) => {
   return <div>Toast Notification position - {position}</div>
}
export default Toast;