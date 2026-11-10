
"use client"

import { createColumnHelper } from "@tanstack/react-table"

import { type DataTableFeatures } from "./data-table-features"

// Bentuk data produk
export type Product = {
  id: string
  name: string
  price: number
  stock: number
}

// Membuat helper kolom
const columnHelper = createColumnHelper<DataTableFeatures, Product>()

// Daftar kolom tabel
export const columns = columnHelper.columns([
  columnHelper.accessor("name", {
    header: "Name",
  }),
  columnHelper.accessor("price", {
    header: "Price",
  }),
  columnHelper.accessor("stock", {
    header: "Stock",
  }),
])
