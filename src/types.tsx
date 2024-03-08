import { Database, Tables, Enums } from "./supabase-types";
import { User } from "@supabase/gotrue-js/src/lib/types";

export interface UserObj extends Tables<"users"> {
    score: number;
    peopleInGroup: number;
}

export interface SessionUserProps {
    user: User
}

