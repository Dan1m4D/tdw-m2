import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ex3/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/ex3/"!</div>
}
