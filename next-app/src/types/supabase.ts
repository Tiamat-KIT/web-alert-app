export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      alarms: {
        Row: {
          dayOfMonth: number | null
          dayOfWeek: number | null
          id: number
          isActive: boolean
          repeatDaily: boolean
          repeatMonthly: boolean
          repeatWeekly: boolean
          time: string
          title: string
          userId: number
        }
        Insert: {
          dayOfMonth?: number | null
          dayOfWeek?: number | null
          id?: number
          isActive: boolean
          repeatDaily: boolean
          repeatMonthly: boolean
          repeatWeekly: boolean
          time: string
          title: string
          userId: number
        }
        Update: {
          dayOfMonth?: number | null
          dayOfWeek?: number | null
          id?: number
          isActive?: boolean
          repeatDaily?: boolean
          repeatMonthly?: boolean
          repeatWeekly?: boolean
          time?: string
          title?: string
          userId?: number
        }
        Relationships: [
          {
            foreignKeyName: "alarms_userId_fkey"
            columns: ["userId"]
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
