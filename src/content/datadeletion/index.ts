import type { DataDeletionContent, DataDeletionLang } from "./types";
import { en } from "./en";

export type { Block, DataDeletionContent, DataDeletionLang, PolicySection } from "./types";

export const dataDeletionContent: Record<DataDeletionLang, DataDeletionContent> = { en };
