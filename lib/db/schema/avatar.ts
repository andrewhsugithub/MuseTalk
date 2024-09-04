import { pgTable, text, integer, uuid, timestamp } from "drizzle-orm/pg-core";

export const avatars = pgTable("avatars", {
  avatarId: text("avatar_id").primaryKey(),
  emotion: text("emotion"), // the emotion of the avatar

  // driving pose (emotionalized driving video)
  drivingPoseVideoPath: text("driving_pose_video_path").notNull(), // video_path
  drivingPoseImagePath: text("driving_pose_image_path"), // full_imgs_path

  // config
  bboxShift: integer("bbox_shift").default(4).notNull(), // bbox_shift
  batchSize: integer("batch_size").default(5).notNull(), // batch_size

  // pretrained weights
  coordsPath: text("coords_path"), // coords_path
  latentsOutPath: text("latents_out_path"), // latents_out_path
  maskCoordsPath: text("mask_coords_path"), // mask_coords_path

  // output
  outputVideoPath: text("output_video_path"), // video_out_path
  maskOutPath: text("mask_out_path"), // mask_out_path

  createdAt: timestamp("created_at", {
    mode: "date",
    precision: 6,
  }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "date", precision: 6 }).$onUpdate(
    () => new Date()
  ),

  createrId: uuid("creater_id").notNull(),
});

export type AvatarType = typeof avatars.$inferInsert;
