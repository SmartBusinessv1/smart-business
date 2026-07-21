export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      businesses: {
        Row: {
          category: string
          created_at: string
          id: string
          locality: string
          name: string
          owner_id: string
          updated_at: string
        }
        Insert: {
          category: string
          created_at?: string
          id?: string
          locality: string
          name: string
          owner_id: string
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          id?: string
          locality?: string
          name?: string
          owner_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      inventory_items: {
        Row: {
          base_unit: string
          business_id: string
          created_at: string
          created_by: string
          id: string
          name: string
          status: Database["public"]["Enums"]["inventory_item_status"]
          updated_at: string
        }
        Insert: {
          base_unit: string
          business_id: string
          created_at?: string
          created_by: string
          id?: string
          name: string
          status?: Database["public"]["Enums"]["inventory_item_status"]
          updated_at?: string
        }
        Update: {
          base_unit?: string
          business_id?: string
          created_at?: string
          created_by?: string
          id?: string
          name?: string
          status?: Database["public"]["Enums"]["inventory_item_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "inventory_items_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory_movement_idempotency_keys: {
        Row: {
          business_id: string
          created_at: string
          id: string
          idempotency_key: string
          movement_id: string
          operation: string
          payload_fingerprint: string
        }
        Insert: {
          business_id: string
          created_at?: string
          id?: string
          idempotency_key: string
          movement_id: string
          operation: string
          payload_fingerprint: string
        }
        Update: {
          business_id?: string
          created_at?: string
          id?: string
          idempotency_key?: string
          movement_id?: string
          operation?: string
          payload_fingerprint?: string
        }
        Relationships: [
          {
            foreignKeyName: "inventory_movement_idempotency_keys_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_movement_idempotency_keys_movement_id_fkey"
            columns: ["movement_id"]
            isOneToOne: false
            referencedRelation: "inventory_movements"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory_movements: {
        Row: {
          business_event_id: string | null
          business_event_type: string | null
          business_id: string
          correcting_of: string | null
          created_at: string
          direction: Database["public"]["Enums"]["inventory_direction"]
          id: string
          item_id: string
          movement_type: Database["public"]["Enums"]["inventory_movement_type"]
          occurred_at: string
          quantity: number
          reason: string
          responsible_user_id: string | null
        }
        Insert: {
          business_event_id?: string | null
          business_event_type?: string | null
          business_id: string
          correcting_of?: string | null
          created_at?: string
          direction: Database["public"]["Enums"]["inventory_direction"]
          id?: string
          item_id: string
          movement_type: Database["public"]["Enums"]["inventory_movement_type"]
          occurred_at?: string
          quantity: number
          reason: string
          responsible_user_id?: string | null
        }
        Update: {
          business_event_id?: string | null
          business_event_type?: string | null
          business_id?: string
          correcting_of?: string | null
          created_at?: string
          direction?: Database["public"]["Enums"]["inventory_direction"]
          id?: string
          item_id?: string
          movement_type?: Database["public"]["Enums"]["inventory_movement_type"]
          occurred_at?: string
          quantity?: number
          reason?: string
          responsible_user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_movements_correcting_of_fk"
            columns: ["correcting_of", "business_id", "item_id"]
            isOneToOne: false
            referencedRelation: "inventory_movements"
            referencedColumns: ["id", "business_id", "item_id"]
          },
          {
            foreignKeyName: "inventory_movements_item_business_fk"
            columns: ["item_id", "business_id"]
            isOneToOne: false
            referencedRelation: "inventory_items"
            referencedColumns: ["id", "business_id"]
          },
        ]
      }
      transaction_correction_events: {
        Row: {
          business_id: string
          created_at: string
          edit_reason: string | null
          edited_at: string
          edited_by: string
          id: string
          notification_sent_at: string | null
          notification_status: string
          original_values: Json
          transaction_id: string
          updated_at: string
          updated_values: Json
        }
        Insert: {
          business_id: string
          created_at?: string
          edit_reason?: string | null
          edited_at?: string
          edited_by: string
          id?: string
          notification_sent_at?: string | null
          notification_status?: string
          original_values: Json
          transaction_id: string
          updated_at?: string
          updated_values: Json
        }
        Update: {
          business_id?: string
          created_at?: string
          edit_reason?: string | null
          edited_at?: string
          edited_by?: string
          id?: string
          notification_sent_at?: string | null
          notification_status?: string
          original_values?: Json
          transaction_id?: string
          updated_at?: string
          updated_values?: Json
        }
        Relationships: [
          {
            foreignKeyName: "transaction_correction_events_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transaction_correction_events_transaction_id_fkey"
            columns: ["transaction_id"]
            isOneToOne: false
            referencedRelation: "transactions"
            referencedColumns: ["id"]
          },
        ]
      }
      transactions: {
        Row: {
          amount: number
          business_id: string
          created_at: string
          creator_id: string
          description: string
          id: string
          notes: string | null
          party_name: string
          payment_method: string
          transaction_date: string
          transaction_type: string
          updated_at: string
        }
        Insert: {
          amount: number
          business_id: string
          created_at?: string
          creator_id: string
          description: string
          id?: string
          notes?: string | null
          party_name: string
          payment_method: string
          transaction_date?: string
          transaction_type: string
          updated_at?: string
        }
        Update: {
          amount?: number
          business_id?: string
          created_at?: string
          creator_id?: string
          description?: string
          id?: string
          notes?: string | null
          party_name?: string
          payment_method?: string
          transaction_date?: string
          transaction_type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "transactions_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      correct_transaction: {
        Args: {
          p_amount: number
          p_description: string
          p_edit_reason: string
          p_notes: string
          p_party_name: string
          p_payment_method: string
          p_transaction_date: string
          p_transaction_id: string
          p_transaction_type: string
        }
        Returns: {
          amount: number
          business_id: string
          created_at: string
          creator_id: string
          description: string
          id: string
          notes: string | null
          party_name: string
          payment_method: string
          transaction_date: string
          transaction_type: string
          updated_at: string
        }
        SetofOptions: {
          from: "*"
          to: "transactions"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      create_inventory_movement: {
        Args: {
          p_allow_negative_stock: boolean
          p_business_event_id: string
          p_business_event_type: string
          p_correcting_of: string
          p_direction: Database["public"]["Enums"]["inventory_direction"]
          p_idempotency_key: string
          p_item_id: string
          p_movement_type: Database["public"]["Enums"]["inventory_movement_type"]
          p_occurred_at: string
          p_operation: string
          p_quantity: number
          p_reason: string
        }
        Returns: {
          business_event_id: string | null
          business_event_type: string | null
          business_id: string
          correcting_of: string | null
          created_at: string
          direction: Database["public"]["Enums"]["inventory_direction"]
          id: string
          item_id: string
          movement_type: Database["public"]["Enums"]["inventory_movement_type"]
          occurred_at: string
          quantity: number
          reason: string
          responsible_user_id: string | null
        }
        SetofOptions: {
          from: "*"
          to: "inventory_movements"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      inventory_current_stock_batch: {
        Args: { p_item_ids: string[] }
        Returns: {
          current_stock: number
          item_id: string
        }[]
      }
      inventory_movement_remaining_compensable: {
        Args: { p_movement_id: string }
        Returns: number
      }
      preview_inventory_movement: {
        Args: {
          p_direction: Database["public"]["Enums"]["inventory_direction"]
          p_item_id: string
          p_quantity: number
        }
        Returns: {
          current_stock: number
          projected_stock: number
        }[]
      }
    }
    Enums: {
      inventory_direction: "increase" | "decrease"
      inventory_item_status: "active" | "archived"
      inventory_movement_type:
        | "opening_stock"
        | "stock_increase"
        | "stock_decrease"
        | "adjustment_increase"
        | "adjustment_decrease"
        | "correction"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      inventory_direction: ["increase", "decrease"],
      inventory_item_status: ["active", "archived"],
      inventory_movement_type: [
        "opening_stock",
        "stock_increase",
        "stock_decrease",
        "adjustment_increase",
        "adjustment_decrease",
        "correction",
      ],
    },
  },
} as const
