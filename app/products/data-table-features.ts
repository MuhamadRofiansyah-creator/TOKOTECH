
import {
  tableFeatures,
  columnVisibilityFeature,
  rowPaginationFeature,
  createPaginatedRowModel,
} from "@tanstack/react-table"

// Mengaktifkan fitur tabel
export const features = tableFeatures({
  columnVisibilityFeature,
  rowPaginationFeature,
  paginatedRowModel: createPaginatedRowModel(),
})

// Tipe fitur untuk digunakan pada file lain
export type DataTableFeatures = typeof features
