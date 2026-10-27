"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Product = {
     id: string
     amount: number
      status: "pending" | "processing" | "success" | "failed"
}