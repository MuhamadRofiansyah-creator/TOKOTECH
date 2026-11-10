
import { columns, type Product } from "./columns"
import { DataTable } from "./data-table"

const products: Product[] = [
  {
    id: "1",
    name: "Keyboard Mechanical",
    price: 350000,
    stock: 10,
  },
  {
    id: "2",
    name: "Mouse Wireless",
    price: 150000,
    stock: 20,
  },
  {
    id: "3",
    name: "Monitor 24 Inch",
    price: 1800000,
    stock: 5,
  },
]

export default function ProductsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">
        Products
      </h1>

      <DataTable columns={columns} data={products} />
    </div>
  )
}
