export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5";
  };
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          extensions?: Json;
          operationName?: string;
          query?: string;
          variables?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      business_tax_settings: {
        Row: {
          business_id: string;
          created_at: string;
          default_tax_rate: number | null;
          id: string;
          pricing_mode: Database["public"]["Enums"]["catalog_pricing_mode"];
          updated_at: string;
        };
        Insert: {
          business_id: string;
          created_at?: string;
          default_tax_rate?: number | null;
          id?: string;
          pricing_mode: Database["public"]["Enums"]["catalog_pricing_mode"];
          updated_at?: string;
        };
        Update: {
          business_id?: string;
          created_at?: string;
          default_tax_rate?: number | null;
          id?: string;
          pricing_mode?: Database["public"]["Enums"]["catalog_pricing_mode"];
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "business_tax_settings_business_id_fkey";
            columns: ["business_id"];
            isOneToOne: true;
            referencedRelation: "businesses";
            referencedColumns: ["id"];
          },
        ];
      };
      businesses: {
        Row: {
          category: string;
          created_at: string;
          id: string;
          locality: string;
          name: string;
          owner_id: string;
          updated_at: string;
        };
        Insert: {
          category: string;
          created_at?: string;
          id?: string;
          locality: string;
          name: string;
          owner_id: string;
          updated_at?: string;
        };
        Update: {
          category?: string;
          created_at?: string;
          id?: string;
          locality?: string;
          name?: string;
          owner_id?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      catalog_audit_events: {
        Row: {
          authority_basis: string;
          authorized_by_user_id: string;
          business_id: string;
          change_payload: Json;
          change_type: string;
          channel: string;
          entity_id: string;
          entity_type: string;
          executed_by_actor_type: string;
          id: string;
          recorded_at: string;
          request_id: string;
          system_run_id: string | null;
        };
        Insert: {
          authority_basis?: string;
          authorized_by_user_id: string;
          business_id: string;
          change_payload: Json;
          change_type: string;
          channel?: string;
          entity_id: string;
          entity_type: string;
          executed_by_actor_type?: string;
          id?: string;
          recorded_at?: string;
          request_id?: string;
          system_run_id?: string | null;
        };
        Update: {
          authority_basis?: string;
          authorized_by_user_id?: string;
          business_id?: string;
          change_payload?: Json;
          change_type?: string;
          channel?: string;
          entity_id?: string;
          entity_type?: string;
          executed_by_actor_type?: string;
          id?: string;
          recorded_at?: string;
          request_id?: string;
          system_run_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "catalog_audit_events_business_id_fkey";
            columns: ["business_id"];
            isOneToOne: false;
            referencedRelation: "businesses";
            referencedColumns: ["id"];
          },
        ];
      };
      catalog_categories: {
        Row: {
          business_id: string;
          created_at: string;
          created_by: string;
          id: string;
          name: string;
          name_normalized: string;
          status: Database["public"]["Enums"]["catalog_lifecycle_status"];
          updated_at: string;
        };
        Insert: {
          business_id: string;
          created_at?: string;
          created_by: string;
          id?: string;
          name: string;
          name_normalized: string;
          status?: Database["public"]["Enums"]["catalog_lifecycle_status"];
          updated_at?: string;
        };
        Update: {
          business_id?: string;
          created_at?: string;
          created_by?: string;
          id?: string;
          name?: string;
          name_normalized?: string;
          status?: Database["public"]["Enums"]["catalog_lifecycle_status"];
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "catalog_categories_business_id_fkey";
            columns: ["business_id"];
            isOneToOne: false;
            referencedRelation: "businesses";
            referencedColumns: ["id"];
          },
        ];
      };
      catalog_deletion_records: {
        Row: {
          business_id: string;
          deleted_at: string;
          deleted_by_user_id: string;
          deleted_product_id: string;
          id: string;
          product_name_snapshot: string;
        };
        Insert: {
          business_id: string;
          deleted_at?: string;
          deleted_by_user_id: string;
          deleted_product_id: string;
          id?: string;
          product_name_snapshot: string;
        };
        Update: {
          business_id?: string;
          deleted_at?: string;
          deleted_by_user_id?: string;
          deleted_product_id?: string;
          id?: string;
          product_name_snapshot?: string;
        };
        Relationships: [
          {
            foreignKeyName: "catalog_deletion_records_business_id_fkey";
            columns: ["business_id"];
            isOneToOne: false;
            referencedRelation: "businesses";
            referencedColumns: ["id"];
          },
        ];
      };
      catalog_import_batches: {
        Row: {
          business_id: string;
          committed_at: string | null;
          created_at: string;
          file_kind: string;
          id: string;
          initiated_by: string;
          original_filename: string;
          row_count: number;
          status: string;
        };
        Insert: {
          business_id: string;
          committed_at?: string | null;
          created_at?: string;
          file_kind: string;
          id?: string;
          initiated_by: string;
          original_filename: string;
          row_count: number;
          status?: string;
        };
        Update: {
          business_id?: string;
          committed_at?: string | null;
          created_at?: string;
          file_kind?: string;
          id?: string;
          initiated_by?: string;
          original_filename?: string;
          row_count?: number;
          status?: string;
        };
        Relationships: [
          {
            foreignKeyName: "catalog_import_batches_business_id_fkey";
            columns: ["business_id"];
            isOneToOne: false;
            referencedRelation: "businesses";
            referencedColumns: ["id"];
          },
        ];
      };
      catalog_import_rows: {
        Row: {
          batch_id: string;
          business_id: string;
          correction_reason: string | null;
          created_at: string;
          follow_up_state: Json;
          has_reference_cost_authority: boolean;
          id: string;
          matched_product_id: string | null;
          parsed_snapshot: Json;
          resolved_at: string | null;
          resolved_by: string | null;
          resolved_product_id: string | null;
          row_idempotency_key: string;
          row_number: number;
          status: string;
        };
        Insert: {
          batch_id: string;
          business_id: string;
          correction_reason?: string | null;
          created_at?: string;
          follow_up_state?: Json;
          has_reference_cost_authority: boolean;
          id?: string;
          matched_product_id?: string | null;
          parsed_snapshot: Json;
          resolved_at?: string | null;
          resolved_by?: string | null;
          resolved_product_id?: string | null;
          row_idempotency_key?: string;
          row_number: number;
          status: string;
        };
        Update: {
          batch_id?: string;
          business_id?: string;
          correction_reason?: string | null;
          created_at?: string;
          follow_up_state?: Json;
          has_reference_cost_authority?: boolean;
          id?: string;
          matched_product_id?: string | null;
          parsed_snapshot?: Json;
          resolved_at?: string | null;
          resolved_by?: string | null;
          resolved_product_id?: string | null;
          row_idempotency_key?: string;
          row_number?: number;
          status?: string;
        };
        Relationships: [
          {
            foreignKeyName: "catalog_import_rows_batch_fk";
            columns: ["business_id", "batch_id"];
            isOneToOne: false;
            referencedRelation: "catalog_import_batches";
            referencedColumns: ["business_id", "id"];
          },
          {
            foreignKeyName: "catalog_import_rows_business_id_fkey";
            columns: ["business_id"];
            isOneToOne: false;
            referencedRelation: "businesses";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "catalog_import_rows_matched_product_fk";
            columns: ["business_id", "matched_product_id"];
            isOneToOne: false;
            referencedRelation: "catalog_products";
            referencedColumns: ["business_id", "id"];
          },
          {
            foreignKeyName: "catalog_import_rows_resolved_product_fk";
            columns: ["business_id", "resolved_product_id"];
            isOneToOne: false;
            referencedRelation: "catalog_products";
            referencedColumns: ["business_id", "id"];
          },
        ];
      };
      catalog_link_preview_tokens: {
        Row: {
          business_id: string;
          closed_at: string | null;
          closed_by_actor_user_id: string | null;
          closure_reason: string | null;
          current_inventory_item_id: string | null;
          current_selling_price: number | null;
          current_selling_unit: string | null;
          expected_state_fingerprint: string;
          expires_at: string;
          id: string;
          initiating_actor_user_id: string;
          issued_at: string;
          price_confirmation_required: boolean;
          product_id: string;
          proposed_selling_unit: string | null;
          requested_action: Database["public"]["Enums"]["catalog_link_action"];
          resulting_link_event_id: string | null;
          target_inventory_item_id: string | null;
        };
        Insert: {
          business_id: string;
          closed_at?: string | null;
          closed_by_actor_user_id?: string | null;
          closure_reason?: string | null;
          current_inventory_item_id?: string | null;
          current_selling_price?: number | null;
          current_selling_unit?: string | null;
          expected_state_fingerprint: string;
          expires_at: string;
          id?: string;
          initiating_actor_user_id: string;
          issued_at?: string;
          price_confirmation_required: boolean;
          product_id: string;
          proposed_selling_unit?: string | null;
          requested_action: Database["public"]["Enums"]["catalog_link_action"];
          resulting_link_event_id?: string | null;
          target_inventory_item_id?: string | null;
        };
        Update: {
          business_id?: string;
          closed_at?: string | null;
          closed_by_actor_user_id?: string | null;
          closure_reason?: string | null;
          current_inventory_item_id?: string | null;
          current_selling_price?: number | null;
          current_selling_unit?: string | null;
          expected_state_fingerprint?: string;
          expires_at?: string;
          id?: string;
          initiating_actor_user_id?: string;
          issued_at?: string;
          price_confirmation_required?: boolean;
          product_id?: string;
          proposed_selling_unit?: string | null;
          requested_action?: Database["public"]["Enums"]["catalog_link_action"];
          resulting_link_event_id?: string | null;
          target_inventory_item_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "catalog_link_preview_tokens_business_id_fkey";
            columns: ["business_id"];
            isOneToOne: false;
            referencedRelation: "businesses";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "catalog_link_preview_tokens_product_fk";
            columns: ["business_id", "product_id"];
            isOneToOne: false;
            referencedRelation: "catalog_products";
            referencedColumns: ["business_id", "id"];
          },
        ];
      };
      catalog_product_link_events: {
        Row: {
          action: Database["public"]["Enums"]["catalog_link_action"];
          authority_basis: string;
          authorized_by_user_id: string;
          business_id: string;
          channel: string;
          executed_by_actor_type: string;
          id: string;
          new_inventory_item_id: string | null;
          new_selling_unit: string | null;
          preview_token_id: string;
          previous_inventory_item_id: string | null;
          previous_selling_unit: string | null;
          product_id: string;
          recorded_at: string;
          request_id: string;
          resulting_price_event_id: string | null;
          system_run_id: string | null;
        };
        Insert: {
          action: Database["public"]["Enums"]["catalog_link_action"];
          authority_basis?: string;
          authorized_by_user_id: string;
          business_id: string;
          channel?: string;
          executed_by_actor_type?: string;
          id?: string;
          new_inventory_item_id?: string | null;
          new_selling_unit?: string | null;
          preview_token_id: string;
          previous_inventory_item_id?: string | null;
          previous_selling_unit?: string | null;
          product_id: string;
          recorded_at?: string;
          request_id?: string;
          resulting_price_event_id?: string | null;
          system_run_id?: string | null;
        };
        Update: {
          action?: Database["public"]["Enums"]["catalog_link_action"];
          authority_basis?: string;
          authorized_by_user_id?: string;
          business_id?: string;
          channel?: string;
          executed_by_actor_type?: string;
          id?: string;
          new_inventory_item_id?: string | null;
          new_selling_unit?: string | null;
          preview_token_id?: string;
          previous_inventory_item_id?: string | null;
          previous_selling_unit?: string | null;
          product_id?: string;
          recorded_at?: string;
          request_id?: string;
          resulting_price_event_id?: string | null;
          system_run_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "catalog_product_link_events_business_id_fkey";
            columns: ["business_id"];
            isOneToOne: false;
            referencedRelation: "businesses";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "catalog_product_link_events_preview_token_id_fkey";
            columns: ["preview_token_id"];
            isOneToOne: false;
            referencedRelation: "catalog_link_preview_tokens";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "catalog_product_link_events_product_fk";
            columns: ["business_id", "product_id"];
            isOneToOne: false;
            referencedRelation: "catalog_products";
            referencedColumns: ["business_id", "id"];
          },
          {
            foreignKeyName: "catalog_product_link_events_resulting_price_event_id_fkey";
            columns: ["resulting_price_event_id"];
            isOneToOne: false;
            referencedRelation: "catalog_selling_price_events";
            referencedColumns: ["id"];
          },
        ];
      };
      catalog_products: {
        Row: {
          barcode: string | null;
          barcode_normalized: string | null;
          business_id: string;
          category_id: string | null;
          created_at: string;
          created_by: string;
          current_reference_cost: number | null;
          current_selling_price: number | null;
          description: string | null;
          id: string;
          inventory_item_id: string | null;
          inventory_link_established_at: string | null;
          name: string;
          name_normalized: string;
          selling_unit: string;
          sku: string | null;
          sku_normalized: string | null;
          status: Database["public"]["Enums"]["catalog_lifecycle_status"];
          tax_rate_percent: number | null;
          tax_treatment: Database["public"]["Enums"]["catalog_tax_treatment"];
          updated_at: string;
        };
        Insert: {
          barcode?: string | null;
          barcode_normalized?: string | null;
          business_id: string;
          category_id?: string | null;
          created_at?: string;
          created_by: string;
          current_reference_cost?: number | null;
          current_selling_price?: number | null;
          description?: string | null;
          id?: string;
          inventory_item_id?: string | null;
          inventory_link_established_at?: string | null;
          name: string;
          name_normalized: string;
          selling_unit?: string;
          sku?: string | null;
          sku_normalized?: string | null;
          status?: Database["public"]["Enums"]["catalog_lifecycle_status"];
          tax_rate_percent?: number | null;
          tax_treatment?: Database["public"]["Enums"]["catalog_tax_treatment"];
          updated_at?: string;
        };
        Update: {
          barcode?: string | null;
          barcode_normalized?: string | null;
          business_id?: string;
          category_id?: string | null;
          created_at?: string;
          created_by?: string;
          current_reference_cost?: number | null;
          current_selling_price?: number | null;
          description?: string | null;
          id?: string;
          inventory_item_id?: string | null;
          inventory_link_established_at?: string | null;
          name?: string;
          name_normalized?: string;
          selling_unit?: string;
          sku?: string | null;
          sku_normalized?: string | null;
          status?: Database["public"]["Enums"]["catalog_lifecycle_status"];
          tax_rate_percent?: number | null;
          tax_treatment?: Database["public"]["Enums"]["catalog_tax_treatment"];
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "catalog_products_business_id_fkey";
            columns: ["business_id"];
            isOneToOne: false;
            referencedRelation: "businesses";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "catalog_products_category_fk";
            columns: ["business_id", "category_id"];
            isOneToOne: false;
            referencedRelation: "catalog_categories";
            referencedColumns: ["business_id", "id"];
          },
          {
            foreignKeyName: "catalog_products_inventory_item_fk";
            columns: ["inventory_item_id", "business_id"];
            isOneToOne: false;
            referencedRelation: "inventory_items";
            referencedColumns: ["id", "business_id"];
          },
        ];
      };
      catalog_reference_cost_events: {
        Row: {
          authority_basis: string;
          authorized_by_user_id: string;
          business_id: string;
          channel: string;
          executed_by_actor_type: string;
          id: string;
          new_cost: number;
          previous_cost: number | null;
          product_id: string;
          recorded_at: string;
          request_id: string;
          system_run_id: string | null;
        };
        Insert: {
          authority_basis?: string;
          authorized_by_user_id: string;
          business_id: string;
          channel?: string;
          executed_by_actor_type?: string;
          id?: string;
          new_cost: number;
          previous_cost?: number | null;
          product_id: string;
          recorded_at?: string;
          request_id?: string;
          system_run_id?: string | null;
        };
        Update: {
          authority_basis?: string;
          authorized_by_user_id?: string;
          business_id?: string;
          channel?: string;
          executed_by_actor_type?: string;
          id?: string;
          new_cost?: number;
          previous_cost?: number | null;
          product_id?: string;
          recorded_at?: string;
          request_id?: string;
          system_run_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "catalog_reference_cost_events_business_id_fkey";
            columns: ["business_id"];
            isOneToOne: false;
            referencedRelation: "businesses";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "catalog_reference_cost_events_product_fk";
            columns: ["business_id", "product_id"];
            isOneToOne: false;
            referencedRelation: "catalog_products";
            referencedColumns: ["business_id", "id"];
          },
        ];
      };
      catalog_selling_price_events: {
        Row: {
          authority_basis: string;
          authorized_by_user_id: string;
          business_id: string;
          channel: string;
          executed_by_actor_type: string;
          id: string;
          new_price: number;
          previous_price: number | null;
          product_id: string;
          recorded_at: string;
          request_id: string;
          source: string;
          system_run_id: string | null;
        };
        Insert: {
          authority_basis?: string;
          authorized_by_user_id: string;
          business_id: string;
          channel?: string;
          executed_by_actor_type?: string;
          id?: string;
          new_price: number;
          previous_price?: number | null;
          product_id: string;
          recorded_at?: string;
          request_id?: string;
          source: string;
          system_run_id?: string | null;
        };
        Update: {
          authority_basis?: string;
          authorized_by_user_id?: string;
          business_id?: string;
          channel?: string;
          executed_by_actor_type?: string;
          id?: string;
          new_price?: number;
          previous_price?: number | null;
          product_id?: string;
          recorded_at?: string;
          request_id?: string;
          source?: string;
          system_run_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "catalog_selling_price_events_business_id_fkey";
            columns: ["business_id"];
            isOneToOne: false;
            referencedRelation: "businesses";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "catalog_selling_price_events_product_fk";
            columns: ["business_id", "product_id"];
            isOneToOne: false;
            referencedRelation: "catalog_products";
            referencedColumns: ["business_id", "id"];
          },
        ];
      };
      catalog_tax_events: {
        Row: {
          authority_basis: string;
          authorized_by_user_id: string;
          business_id: string;
          channel: string;
          executed_by_actor_type: string;
          id: string;
          new_rate_percent: number | null;
          new_treatment: Database["public"]["Enums"]["catalog_tax_treatment"];
          previous_rate_percent: number | null;
          previous_treatment: Database["public"]["Enums"]["catalog_tax_treatment"] | null;
          product_id: string;
          recorded_at: string;
          request_id: string;
          system_run_id: string | null;
        };
        Insert: {
          authority_basis?: string;
          authorized_by_user_id: string;
          business_id: string;
          channel?: string;
          executed_by_actor_type?: string;
          id?: string;
          new_rate_percent?: number | null;
          new_treatment: Database["public"]["Enums"]["catalog_tax_treatment"];
          previous_rate_percent?: number | null;
          previous_treatment?: Database["public"]["Enums"]["catalog_tax_treatment"] | null;
          product_id: string;
          recorded_at?: string;
          request_id?: string;
          system_run_id?: string | null;
        };
        Update: {
          authority_basis?: string;
          authorized_by_user_id?: string;
          business_id?: string;
          channel?: string;
          executed_by_actor_type?: string;
          id?: string;
          new_rate_percent?: number | null;
          new_treatment?: Database["public"]["Enums"]["catalog_tax_treatment"];
          previous_rate_percent?: number | null;
          previous_treatment?: Database["public"]["Enums"]["catalog_tax_treatment"] | null;
          product_id?: string;
          recorded_at?: string;
          request_id?: string;
          system_run_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "catalog_tax_events_business_id_fkey";
            columns: ["business_id"];
            isOneToOne: false;
            referencedRelation: "businesses";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "catalog_tax_events_product_fk";
            columns: ["business_id", "product_id"];
            isOneToOne: false;
            referencedRelation: "catalog_products";
            referencedColumns: ["business_id", "id"];
          },
        ];
      };
      catalog_write_idempotency_keys: {
        Row: {
          business_id: string;
          created_at: string;
          id: string;
          idempotency_key: string;
          operation: string;
          outcome_status: string;
          payload_fingerprint: string;
          rejection_reason: string | null;
          result_ref: Json | null;
        };
        Insert: {
          business_id: string;
          created_at?: string;
          id?: string;
          idempotency_key: string;
          operation: string;
          outcome_status: string;
          payload_fingerprint: string;
          rejection_reason?: string | null;
          result_ref?: Json | null;
        };
        Update: {
          business_id?: string;
          created_at?: string;
          id?: string;
          idempotency_key?: string;
          operation?: string;
          outcome_status?: string;
          payload_fingerprint?: string;
          rejection_reason?: string | null;
          result_ref?: Json | null;
        };
        Relationships: [
          {
            foreignKeyName: "catalog_write_idempotency_keys_business_id_fkey";
            columns: ["business_id"];
            isOneToOne: false;
            referencedRelation: "businesses";
            referencedColumns: ["id"];
          },
        ];
      };
      inventory_items: {
        Row: {
          base_unit: string;
          business_id: string;
          created_at: string;
          created_by: string;
          id: string;
          name: string;
          status: Database["public"]["Enums"]["inventory_item_status"];
          updated_at: string;
        };
        Insert: {
          base_unit: string;
          business_id: string;
          created_at?: string;
          created_by: string;
          id?: string;
          name: string;
          status?: Database["public"]["Enums"]["inventory_item_status"];
          updated_at?: string;
        };
        Update: {
          base_unit?: string;
          business_id?: string;
          created_at?: string;
          created_by?: string;
          id?: string;
          name?: string;
          status?: Database["public"]["Enums"]["inventory_item_status"];
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "inventory_items_business_id_fkey";
            columns: ["business_id"];
            isOneToOne: false;
            referencedRelation: "businesses";
            referencedColumns: ["id"];
          },
        ];
      };
      inventory_movement_idempotency_keys: {
        Row: {
          business_id: string;
          created_at: string;
          id: string;
          idempotency_key: string;
          movement_id: string;
          operation: string;
          payload_fingerprint: string;
        };
        Insert: {
          business_id: string;
          created_at?: string;
          id?: string;
          idempotency_key: string;
          movement_id: string;
          operation: string;
          payload_fingerprint: string;
        };
        Update: {
          business_id?: string;
          created_at?: string;
          id?: string;
          idempotency_key?: string;
          movement_id?: string;
          operation?: string;
          payload_fingerprint?: string;
        };
        Relationships: [
          {
            foreignKeyName: "inventory_movement_idempotency_keys_business_id_fkey";
            columns: ["business_id"];
            isOneToOne: false;
            referencedRelation: "businesses";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "inventory_movement_idempotency_keys_movement_id_fkey";
            columns: ["movement_id"];
            isOneToOne: false;
            referencedRelation: "inventory_movements";
            referencedColumns: ["id"];
          },
        ];
      };
      inventory_movements: {
        Row: {
          business_event_id: string | null;
          business_event_type: string | null;
          business_id: string;
          correcting_of: string | null;
          created_at: string;
          direction: Database["public"]["Enums"]["inventory_direction"];
          id: string;
          item_id: string;
          movement_type: Database["public"]["Enums"]["inventory_movement_type"];
          occurred_at: string;
          quantity: number;
          reason: string;
          responsible_user_id: string | null;
        };
        Insert: {
          business_event_id?: string | null;
          business_event_type?: string | null;
          business_id: string;
          correcting_of?: string | null;
          created_at?: string;
          direction: Database["public"]["Enums"]["inventory_direction"];
          id?: string;
          item_id: string;
          movement_type: Database["public"]["Enums"]["inventory_movement_type"];
          occurred_at?: string;
          quantity: number;
          reason: string;
          responsible_user_id?: string | null;
        };
        Update: {
          business_event_id?: string | null;
          business_event_type?: string | null;
          business_id?: string;
          correcting_of?: string | null;
          created_at?: string;
          direction?: Database["public"]["Enums"]["inventory_direction"];
          id?: string;
          item_id?: string;
          movement_type?: Database["public"]["Enums"]["inventory_movement_type"];
          occurred_at?: string;
          quantity?: number;
          reason?: string;
          responsible_user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "inventory_movements_correcting_of_fk";
            columns: ["correcting_of", "business_id", "item_id"];
            isOneToOne: false;
            referencedRelation: "inventory_movements";
            referencedColumns: ["id", "business_id", "item_id"];
          },
          {
            foreignKeyName: "inventory_movements_item_business_fk";
            columns: ["item_id", "business_id"];
            isOneToOne: false;
            referencedRelation: "inventory_items";
            referencedColumns: ["id", "business_id"];
          },
        ];
      };
      transaction_correction_events: {
        Row: {
          business_id: string;
          created_at: string;
          edit_reason: string | null;
          edited_at: string;
          edited_by: string;
          id: string;
          notification_sent_at: string | null;
          notification_status: string;
          original_values: Json;
          transaction_id: string;
          updated_at: string;
          updated_values: Json;
        };
        Insert: {
          business_id: string;
          created_at?: string;
          edit_reason?: string | null;
          edited_at?: string;
          edited_by: string;
          id?: string;
          notification_sent_at?: string | null;
          notification_status?: string;
          original_values: Json;
          transaction_id: string;
          updated_at?: string;
          updated_values: Json;
        };
        Update: {
          business_id?: string;
          created_at?: string;
          edit_reason?: string | null;
          edited_at?: string;
          edited_by?: string;
          id?: string;
          notification_sent_at?: string | null;
          notification_status?: string;
          original_values?: Json;
          transaction_id?: string;
          updated_at?: string;
          updated_values?: Json;
        };
        Relationships: [
          {
            foreignKeyName: "transaction_correction_events_business_id_fkey";
            columns: ["business_id"];
            isOneToOne: false;
            referencedRelation: "businesses";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "transaction_correction_events_transaction_id_fkey";
            columns: ["transaction_id"];
            isOneToOne: false;
            referencedRelation: "transactions";
            referencedColumns: ["id"];
          },
        ];
      };
      transactions: {
        Row: {
          amount: number;
          business_id: string;
          created_at: string;
          creator_id: string;
          description: string;
          id: string;
          notes: string | null;
          party_name: string;
          payment_method: string;
          transaction_date: string;
          transaction_type: string;
          updated_at: string;
        };
        Insert: {
          amount: number;
          business_id: string;
          created_at?: string;
          creator_id: string;
          description: string;
          id?: string;
          notes?: string | null;
          party_name: string;
          payment_method: string;
          transaction_date?: string;
          transaction_type: string;
          updated_at?: string;
        };
        Update: {
          amount?: number;
          business_id?: string;
          created_at?: string;
          creator_id?: string;
          description?: string;
          id?: string;
          notes?: string | null;
          party_name?: string;
          payment_method?: string;
          transaction_date?: string;
          transaction_type?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "transactions_business_id_fkey";
            columns: ["business_id"];
            isOneToOne: false;
            referencedRelation: "businesses";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      archive_catalog_category: {
        Args: {
          p_category_id: string;
          p_confirm_uncategorize?: boolean;
          p_idempotency_key: string;
        };
        Returns: Database["public"]["CompositeTypes"]["catalog_command_result"];
        SetofOptions: {
          from: "*";
          to: "catalog_command_result";
          isOneToOne: true;
          isSetofReturn: false;
        };
      };
      archive_catalog_product: {
        Args: { p_idempotency_key: string; p_product_id: string };
        Returns: Database["public"]["CompositeTypes"]["catalog_command_result"];
        SetofOptions: {
          from: "*";
          to: "catalog_command_result";
          isOneToOne: true;
          isSetofReturn: false;
        };
      };
      assign_or_replace_catalog_inventory_link: {
        Args: {
          p_confirmed_price?: number;
          p_idempotency_key: string;
          p_preview_token_id: string;
        };
        Returns: Database["public"]["CompositeTypes"]["catalog_command_result"];
        SetofOptions: {
          from: "*";
          to: "catalog_command_result";
          isOneToOne: true;
          isSetofReturn: false;
        };
      };
      catalog_product_read: { Args: { p_product_id: string }; Returns: Json };
      catalog_products_list_batch: {
        Args: { p_product_ids: string[] };
        Returns: Database["public"]["CompositeTypes"]["catalog_product_summary"][];
        SetofOptions: {
          from: "*";
          to: "catalog_product_summary";
          isOneToOne: false;
          isSetofReturn: true;
        };
      };
      catalog_products_search: {
        Args: {
          p_category_id?: string;
          p_cursor_id?: string;
          p_cursor_match_rank?: number;
          p_cursor_name_normalized?: string;
          p_include_archived?: boolean;
          p_limit?: number;
          p_query?: string;
        };
        Returns: Database["public"]["CompositeTypes"]["catalog_product_summary"][];
        SetofOptions: {
          from: "*";
          to: "catalog_product_summary";
          isOneToOne: false;
          isSetofReturn: true;
        };
      };
      correct_transaction: {
        Args: {
          p_amount: number;
          p_description: string;
          p_edit_reason: string;
          p_notes: string;
          p_party_name: string;
          p_payment_method: string;
          p_transaction_date: string;
          p_transaction_id: string;
          p_transaction_type: string;
        };
        Returns: {
          amount: number;
          business_id: string;
          created_at: string;
          creator_id: string;
          description: string;
          id: string;
          notes: string | null;
          party_name: string;
          payment_method: string;
          transaction_date: string;
          transaction_type: string;
          updated_at: string;
        };
        SetofOptions: {
          from: "*";
          to: "transactions";
          isOneToOne: true;
          isSetofReturn: false;
        };
      };
      create_catalog_category: {
        Args: { p_idempotency_key: string; p_name: string };
        Returns: Database["public"]["CompositeTypes"]["catalog_command_result"];
        SetofOptions: {
          from: "*";
          to: "catalog_command_result";
          isOneToOne: true;
          isSetofReturn: false;
        };
      };
      create_catalog_product: {
        Args: {
          p_barcode?: string;
          p_category_id?: string;
          p_description?: string;
          p_idempotency_key: string;
          p_name: string;
          p_selling_unit?: string;
          p_sku?: string;
        };
        Returns: Database["public"]["CompositeTypes"]["catalog_command_result"];
        SetofOptions: {
          from: "*";
          to: "catalog_command_result";
          isOneToOne: true;
          isSetofReturn: false;
        };
      };
      create_inventory_movement: {
        Args: {
          p_allow_negative_stock: boolean;
          p_business_event_id: string;
          p_business_event_type: string;
          p_correcting_of: string;
          p_direction: Database["public"]["Enums"]["inventory_direction"];
          p_idempotency_key: string;
          p_item_id: string;
          p_movement_type: Database["public"]["Enums"]["inventory_movement_type"];
          p_occurred_at: string;
          p_operation: string;
          p_quantity: number;
          p_reason: string;
        };
        Returns: {
          business_event_id: string | null;
          business_event_type: string | null;
          business_id: string;
          correcting_of: string | null;
          created_at: string;
          direction: Database["public"]["Enums"]["inventory_direction"];
          id: string;
          item_id: string;
          movement_type: Database["public"]["Enums"]["inventory_movement_type"];
          occurred_at: string;
          quantity: number;
          reason: string;
          responsible_user_id: string | null;
        };
        SetofOptions: {
          from: "*";
          to: "inventory_movements";
          isOneToOne: true;
          isSetofReturn: false;
        };
      };
      delete_catalog_product: {
        Args: { p_idempotency_key: string; p_product_id: string };
        Returns: Database["public"]["CompositeTypes"]["catalog_command_result"];
        SetofOptions: {
          from: "*";
          to: "catalog_command_result";
          isOneToOne: true;
          isSetofReturn: false;
        };
      };
      get_catalog_command_outcome: {
        Args: { p_idempotency_key: string; p_operation: string };
        Returns: Database["public"]["CompositeTypes"]["catalog_command_outcome"];
        SetofOptions: {
          from: "*";
          to: "catalog_command_outcome";
          isOneToOne: true;
          isSetofReturn: false;
        };
      };
      inventory_current_stock_batch: {
        Args: { p_item_ids: string[] };
        Returns: {
          current_stock: number;
          item_id: string;
        }[];
      };
      inventory_movement_remaining_compensable: {
        Args: { p_movement_id: string };
        Returns: number;
      };
      preview_catalog_inventory_link_change: {
        Args: {
          p_product_id: string;
          p_requested_action: string;
          p_target_inventory_item_id?: string;
        };
        Returns: Database["public"]["CompositeTypes"]["catalog_link_preview_result"];
        SetofOptions: {
          from: "*";
          to: "catalog_link_preview_result";
          isOneToOne: true;
          isSetofReturn: false;
        };
      };
      preview_inventory_movement: {
        Args: {
          p_direction: Database["public"]["Enums"]["inventory_direction"];
          p_item_id: string;
          p_quantity: number;
        };
        Returns: {
          current_stock: number;
          projected_stock: number;
        }[];
      };
      reactivate_catalog_product: {
        Args: { p_idempotency_key: string; p_product_id: string };
        Returns: Database["public"]["CompositeTypes"]["catalog_command_result"];
        SetofOptions: {
          from: "*";
          to: "catalog_command_result";
          isOneToOne: true;
          isSetofReturn: false;
        };
      };
      record_catalog_reference_cost_change: {
        Args: {
          p_idempotency_key: string;
          p_new_cost: number;
          p_product_id: string;
        };
        Returns: Database["public"]["CompositeTypes"]["catalog_command_result"];
        SetofOptions: {
          from: "*";
          to: "catalog_command_result";
          isOneToOne: true;
          isSetofReturn: false;
        };
      };
      record_catalog_selling_price_change: {
        Args: {
          p_idempotency_key: string;
          p_new_price: number;
          p_product_id: string;
        };
        Returns: Database["public"]["CompositeTypes"]["catalog_command_result"];
        SetofOptions: {
          from: "*";
          to: "catalog_command_result";
          isOneToOne: true;
          isSetofReturn: false;
        };
      };
      record_catalog_tax_change: {
        Args: {
          p_idempotency_key: string;
          p_product_id: string;
          p_rate_percent?: number;
          p_treatment: string;
        };
        Returns: Database["public"]["CompositeTypes"]["catalog_command_result"];
        SetofOptions: {
          from: "*";
          to: "catalog_command_result";
          isOneToOne: true;
          isSetofReturn: false;
        };
      };
      remove_catalog_inventory_link: {
        Args: { p_idempotency_key: string; p_preview_token_id: string };
        Returns: Database["public"]["CompositeTypes"]["catalog_command_result"];
        SetofOptions: {
          from: "*";
          to: "catalog_command_result";
          isOneToOne: true;
          isSetofReturn: false;
        };
      };
      update_business_tax_settings: {
        Args: {
          p_default_tax_rate?: number;
          p_idempotency_key: string;
          p_pricing_mode: string;
        };
        Returns: Database["public"]["CompositeTypes"]["catalog_command_result"];
        SetofOptions: {
          from: "*";
          to: "catalog_command_result";
          isOneToOne: true;
          isSetofReturn: false;
        };
      };
      update_catalog_product_identity: {
        Args: {
          p_barcode: string;
          p_category_id: string;
          p_description: string;
          p_idempotency_key: string;
          p_name: string;
          p_product_id: string;
          p_sku: string;
        };
        Returns: Database["public"]["CompositeTypes"]["catalog_command_result"];
        SetofOptions: {
          from: "*";
          to: "catalog_command_result";
          isOneToOne: true;
          isSetofReturn: false;
        };
      };
      update_catalog_product_unit: {
        Args: {
          p_idempotency_key: string;
          p_product_id: string;
          p_selling_unit: string;
        };
        Returns: Database["public"]["CompositeTypes"]["catalog_command_result"];
        SetofOptions: {
          from: "*";
          to: "catalog_command_result";
          isOneToOne: true;
          isSetofReturn: false;
        };
      };
    };
    Enums: {
      catalog_lifecycle_status: "active" | "archived";
      catalog_link_action: "assign_or_replace" | "remove";
      catalog_pricing_mode: "tax_inclusive" | "tax_exclusive";
      catalog_tax_treatment: "inherit_business_default" | "product_specific_rate" | "non_taxable";
      inventory_direction: "increase" | "decrease";
      inventory_item_status: "active" | "archived";
      inventory_movement_type:
        | "opening_stock"
        | "stock_increase"
        | "stock_decrease"
        | "adjustment_increase"
        | "adjustment_decrease"
        | "correction";
    };
    CompositeTypes: {
      catalog_command_outcome: {
        found: boolean | null;
        outcome: string | null;
        rejection_reason: string | null;
        result_ref: Json | null;
        recorded_at: string | null;
      };
      catalog_command_result: {
        outcome: string | null;
        rejection_reason: string | null;
        product_id: string | null;
        category_id: string | null;
        idempotency_key: string | null;
        recorded_at: string | null;
      };
      catalog_link_preview_result: {
        outcome: string | null;
        rejection_reason: string | null;
        preview_token_id: string | null;
        requested_action: string | null;
        current_inventory_item_id: string | null;
        current_selling_unit: string | null;
        current_selling_price: number | null;
        proposed_inventory_item_id: string | null;
        proposed_selling_unit: string | null;
        price_confirmation_required: boolean | null;
        expires_at: string | null;
      };
      catalog_product_summary: {
        id: string | null;
        name: string | null;
        sku: string | null;
        barcode: string | null;
        category_id: string | null;
        selling_unit: string | null;
        current_selling_price: number | null;
        status: string | null;
        is_stock_tracked: boolean | null;
        match_rank: number | null;
        name_normalized: string | null;
      };
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] & DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    keyof DefaultSchema["Enums"] | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    keyof DefaultSchema["CompositeTypes"] | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {
      catalog_lifecycle_status: ["active", "archived"],
      catalog_link_action: ["assign_or_replace", "remove"],
      catalog_pricing_mode: ["tax_inclusive", "tax_exclusive"],
      catalog_tax_treatment: ["inherit_business_default", "product_specific_rate", "non_taxable"],
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
} as const;
