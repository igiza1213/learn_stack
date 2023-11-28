import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  document: defineTable({
    title: v.string(),
    userId: v.string(),
    isArchived: v.boolean(),
    parentDocument: v.optional(v.id("document")),
  }),
});
