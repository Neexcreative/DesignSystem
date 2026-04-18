import './Container.css'

type Props = {
  children: React.ReactNode
}

function Container({ children }: Props) {
  return <div className="neex-container">{children}</div>
}

export default Container

