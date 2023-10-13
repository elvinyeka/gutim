interface IProps {
  color?: string
  width?: string
  height?: string
}

const MenuIcon = ({ color = '#ffff', height = '20', width = '20' }: IProps) => {
  return (

    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill={color}
         viewBox='0 0 16 16'>
      <path fillRule='evenodd'
            d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z' />
    </svg>

  )
}

export default MenuIcon