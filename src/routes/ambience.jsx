import { createFileRoute } from '@tanstack/react-router'
import AmbienceMarquee from '../components/Ambience'

export const Route = createFileRoute('/ambience')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AmbienceMarquee/>
}
