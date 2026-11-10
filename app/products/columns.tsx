"use client"

import { createColumnHelper } from "@tanstack/react-table"

import { type DataTableFeatures } from "./data-table-features"

export type Payment = {
  id: string
  amount: number
   status: "pending" | "processing" | "success" | "failed"
   email: string
}

const columnHelper = createColumnHelper<Payment>()

export const columns = columnHelper.columns([
  columnHelper.accessor("status", {
    header: "Status",
  }),
])