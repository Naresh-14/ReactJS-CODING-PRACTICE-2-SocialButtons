const Button = props => {
  //  Write your code here.
  const {name, className} = props
  return (
    <div>
      <button className={className}>{name}</button>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1 className='main-heading'>Social Buttons</h1>
    <div className='button-card'>
      <Button className='button b1' name='Like' />
      <Button className='button b2' name='Comment' />
      <Button className='button b3' name='Share' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
