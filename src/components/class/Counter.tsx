import React from "react";
type CounterProps = {
   message: string
}
type CounterState = {
   count: number
}
class ClassCounter extends React.Component<CounterProps,CounterState> {
   state = {
      count: 0,
   }

   handleClick = () => {
      this.setState((prevState) => ({count: prevState.count + 1 }))
   }

   render() {
      return (
         <div>
            <h1>Class Counter</h1>
            <button onClick={this.handleClick}>Increment</button>
            message is:- {this.props.message}
            Count is:- {this.state.count}
         </div>
      )
   }
}
export default ClassCounter;