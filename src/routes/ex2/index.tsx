import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ex2/')({
  component: RouteComponent,
})

function RouteComponent() {
  return( <div>Hello "/ex2/"! {"->"} context API + css modules</div>)

}
