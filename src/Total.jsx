const Total = (props) => {
  return (
    <div>
      <p>
        Nombre d'exercises ={' '}
        {props.exercise1 + props.exercise2 + props.exercise3}
      </p>
    </div>
  )
}
export default Total
