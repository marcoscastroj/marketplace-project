import HeaderHome from '@/components/HeaderHome/main'
import { ListProduct } from '@/components/ListProduct/main'

export const revalidate = 60

export default function Dashboard() {
  return (
    <div>
      <HeaderHome />
      <ListProduct />
    </div>
  )
}
