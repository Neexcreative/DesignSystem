import './Section.css'

type Props = {
  children: React.ReactNode
}

function Section({ children }: Props) {
  return <section className="neex-section">{children}</section>
}

export default Section