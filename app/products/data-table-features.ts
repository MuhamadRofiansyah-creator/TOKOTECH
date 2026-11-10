
import {
  tableFeatures,
  columnVisibilityFeature,
} from "@tanstack/react-table"

// Mengaktifkan fitur column visibility
export const features = tableFeatures({
  columnVisibilityFeature,
})

// Tipe fitur untuk digunakan pada file lain
export type DataTableFeatures = typeof features
