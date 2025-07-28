import { createFileRoute } from '@tanstack/react-router'
import DrinksMenu from '../../components/Menu/DrinksMenu'

export const Route = createFileRoute('/menu/drinks')({
  component: RouteComponent,
})

function RouteComponent() {
  return <DrinksMenu/>
}
