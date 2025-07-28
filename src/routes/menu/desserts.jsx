import { createFileRoute } from '@tanstack/react-router'
import DessertsMenu from '../../components/Menu/DessertsMenu'

export const Route = createFileRoute('/menu/desserts')({
  component: RouteComponent,
})

function RouteComponent() {
  return <DessertsMenu/>
}
