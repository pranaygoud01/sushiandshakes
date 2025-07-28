import { createFileRoute } from '@tanstack/react-router'
import AmbiancePage from '../pages/AmbiencePage'

export const Route = createFileRoute('/ambience')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AmbiancePage/>
}
