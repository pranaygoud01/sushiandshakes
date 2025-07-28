import { createFileRoute } from '@tanstack/react-router'
import FoodMenu from '../../components/Menu/FoodMenu'

export const Route = createFileRoute('/menu/food')({
  component: RouteComponent,
})

function RouteComponent() {
  return <FoodMenu/>
}
