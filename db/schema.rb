# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_01_07_162944) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "action_text_rich_texts", force: :cascade do |t|
    t.string "name", null: false
    t.text "body"
    t.string "record_type", null: false
    t.integer "record_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["record_type", "record_id", "name"], name: "index_action_text_rich_texts_uniqueness", unique: true
  end

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", precision: nil, null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", precision: nil, null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "airpods", force: :cascade do |t|
    t.string "title"
    t.string "diagonal"
    t.string "model"
    t.string "version"
    t.string "series"
    t.datetime "production_period", precision: nil
    t.string "full_title"
    t.text "overview"
    t.string "avatar"
    t.string "images", default: [], array: true
    t.string "videos", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "airpods_users", id: false, force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "airpod_id", null: false
    t.index ["airpod_id", "user_id"], name: "index_airpods_users_on_airpod_id_and_user_id"
    t.index ["user_id", "airpod_id"], name: "index_airpods_users_on_user_id_and_airpod_id"
  end

  create_table "answers", force: :cascade do |t|
    t.bigint "quiz_question_id", null: false
    t.bigint "user_id", null: false
    t.text "content"
    t.boolean "correct", default: false
    t.string "avatar", default: ""
    t.string "images", default: [], array: true
    t.string "videos", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["quiz_question_id"], name: "index_answers_on_quiz_question_id"
    t.index ["user_id"], name: "index_answers_on_user_id"
  end

  create_table "apple_watches", force: :cascade do |t|
    t.string "title"
    t.string "diagonal"
    t.string "model"
    t.string "version"
    t.string "series"
    t.datetime "production_period", precision: nil
    t.string "full_title"
    t.text "overview"
    t.string "avatar"
    t.string "images", default: [], array: true
    t.string "videos", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "apple_watches_users", id: false, force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "apple_watch_id", null: false
    t.index ["apple_watch_id", "user_id"], name: "index_apple_watches_users_on_apple_watch_id_and_user_id"
    t.index ["user_id", "apple_watch_id"], name: "index_apple_watches_users_on_user_id_and_apple_watch_id"
  end

  create_table "articles", force: :cascade do |t|
    t.bigint "user_id"
    t.string "name"
    t.string "avatar", default: ""
    t.string "images", default: [], array: true
    t.string "videos", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_articles_on_user_id"
  end

  create_table "categories", force: :cascade do |t|
    t.string "heading", default: ""
    t.text "overview", default: ""
    t.boolean "display", default: true
    t.string "avatar", default: ""
    t.string "images", default: [], array: true
    t.string "videos", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "chapters", force: :cascade do |t|
    t.bigint "cource_id", null: false
    t.string "title"
    t.string "avatar", default: ""
    t.string "images", default: [], array: true
    t.string "videos", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cource_id"], name: "index_chapters_on_cource_id"
  end

  create_table "cources", force: :cascade do |t|
    t.bigint "university_id", null: false
    t.bigint "category_id", null: false
    t.bigint "generation_id", null: false
    t.bigint "model_id", null: false
    t.string "author"
    t.string "name"
    t.text "description"
    t.decimal "price"
    t.string "chapters", default: [], array: true
    t.string "avatar", default: ""
    t.string "images", default: [], array: true
    t.string "videos", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_cources_on_category_id"
    t.index ["generation_id"], name: "index_cources_on_generation_id"
    t.index ["model_id"], name: "index_cources_on_model_id"
    t.index ["university_id"], name: "index_cources_on_university_id"
  end

  create_table "defects", force: :cascade do |t|
    t.integer "generation_id"
    t.integer "phone_id"
    t.integer "repair_id"
    t.integer "mod_id"
    t.string "title"
    t.string "description"
    t.string "avatar"
    t.string "modules", default: [], array: true
    t.string "images", default: [], array: true
    t.string "videos", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "defects_mods", id: false, force: :cascade do |t|
    t.bigint "defect_id", null: false
    t.bigint "mod_id", null: false
    t.index ["defect_id", "mod_id"], name: "index_defects_mods_on_defect_id_and_mod_id"
    t.index ["mod_id", "defect_id"], name: "index_defects_mods_on_mod_id_and_defect_id"
  end

  create_table "defects_phones", id: false, force: :cascade do |t|
    t.bigint "phone_id", null: false
    t.bigint "defect_id", null: false
    t.index ["defect_id", "phone_id"], name: "index_defects_phones_on_defect_id_and_phone_id"
    t.index ["phone_id", "defect_id"], name: "index_defects_phones_on_phone_id_and_defect_id"
  end

  create_table "defects_repairs", id: false, force: :cascade do |t|
    t.bigint "defect_id", null: false
    t.bigint "repair_id", null: false
    t.index ["defect_id", "repair_id"], name: "index_defects_repairs_on_defect_id_and_repair_id"
    t.index ["repair_id", "defect_id"], name: "index_defects_repairs_on_repair_id_and_defect_id"
  end

  create_table "generations", force: :cascade do |t|
    t.string "title"
    t.string "production_period"
    t.string "features"
    t.string "vulnerability"
    t.string "avatar"
    t.string "images", default: [], array: true
    t.string "videos", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "imacs", force: :cascade do |t|
    t.string "title"
    t.string "diagonal"
    t.string "model"
    t.string "version"
    t.string "series"
    t.datetime "production_period", precision: nil
    t.string "full_title"
    t.text "overview"
    t.string "avatar"
    t.string "images", default: [], array: true
    t.string "videos", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "imacs_users", id: false, force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "imac_id", null: false
    t.index ["imac_id", "user_id"], name: "index_imacs_users_on_imac_id_and_user_id"
    t.index ["user_id", "imac_id"], name: "index_imacs_users_on_user_id_and_imac_id"
  end

  create_table "ipads", force: :cascade do |t|
    t.string "title"
    t.string "diagonal"
    t.string "model"
    t.string "version"
    t.string "series"
    t.datetime "production_period", precision: nil
    t.string "full_title"
    t.text "overview"
    t.string "avatar"
    t.string "images", default: [], array: true
    t.string "videos", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ipads_users", id: false, force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "ipad_id", null: false
    t.index ["ipad_id", "user_id"], name: "index_ipads_users_on_ipad_id_and_user_id"
    t.index ["user_id", "ipad_id"], name: "index_ipads_users_on_user_id_and_ipad_id"
  end

  create_table "makbooks", force: :cascade do |t|
    t.string "title"
    t.string "diagonal"
    t.string "model"
    t.string "version"
    t.string "series"
    t.datetime "production_period", precision: nil
    t.string "full_title"
    t.text "overview"
    t.string "avatar"
    t.string "images", default: [], array: true
    t.string "videos", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "makbooks_users", id: false, force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "makbook_id", null: false
    t.index ["makbook_id", "user_id"], name: "index_makbooks_users_on_makbook_id_and_user_id"
    t.index ["user_id", "makbook_id"], name: "index_makbooks_users_on_user_id_and_makbook_id"
  end

  create_table "models", force: :cascade do |t|
    t.integer "generation_id"
    t.integer "phone_id"
    t.string "title"
    t.string "avatar"
    t.string "images", default: [], array: true
    t.string "videos", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "mods", force: :cascade do |t|
    t.integer "generation_id"
    t.integer "phone_id"
    t.integer "model_id"
    t.integer "defect_id"
    t.integer "repair_id"
    t.string "name"
    t.string "avatar"
    t.string "manufacturers", default: [], array: true
    t.string "images", default: [], array: true
    t.string "videos", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "mods_repairs", id: false, force: :cascade do |t|
    t.bigint "repair_id", null: false
    t.bigint "mod_id", null: false
    t.index ["mod_id", "repair_id"], name: "index_mods_repairs_on_mod_id_and_repair_id"
    t.index ["repair_id", "mod_id"], name: "index_mods_repairs_on_repair_id_and_mod_id"
  end

  create_table "order_items", force: :cascade do |t|
    t.bigint "product_id", null: false
    t.bigint "order_id", null: false
    t.integer "quantity"
    t.decimal "total"
    t.decimal "unit_price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["order_id"], name: "index_order_items_on_order_id"
    t.index ["product_id"], name: "index_order_items_on_product_id"
  end

  create_table "orders", force: :cascade do |t|
    t.decimal "subtotal"
    t.decimal "total"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "owned_gadgets", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "avatar"
    t.string "images", default: [], array: true
    t.string "videos", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_owned_gadgets_on_user_id"
  end

  create_table "owned_gadgets_phones", id: false, force: :cascade do |t|
    t.bigint "owned_gadget_id", null: false
    t.bigint "phone_id", null: false
    t.index ["owned_gadget_id", "phone_id"], name: "index_owned_gadgets_phones_on_owned_gadget_id_and_phone_id"
    t.index ["phone_id", "owned_gadget_id"], name: "index_owned_gadgets_phones_on_phone_id_and_owned_gadget_id"
  end

  create_table "phones", force: :cascade do |t|
    t.string "model_title"
    t.string "model_overview"
    t.string "avatar"
    t.string "images", default: [], array: true
    t.string "videos", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "generation_id", null: false
    t.index ["generation_id"], name: "index_phones_on_generation_id"
  end

  create_table "phones_repairs", id: false, force: :cascade do |t|
    t.bigint "repair_id", null: false
    t.bigint "phone_id", null: false
    t.index ["phone_id", "repair_id"], name: "index_phones_repairs_on_phone_id_and_repair_id"
    t.index ["repair_id", "phone_id"], name: "index_phones_repairs_on_repair_id_and_phone_id"
  end

  create_table "phones_users", id: false, force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "phone_id", null: false
    t.index ["phone_id", "user_id"], name: "index_phones_users_on_phone_id_and_user_id"
    t.index ["user_id", "phone_id"], name: "index_phones_users_on_user_id_and_phone_id"
  end

  create_table "posts", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "title"
    t.integer "views", default: 0
    t.string "avatar", default: ""
    t.string "images", default: [], array: true
    t.string "videos", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "name", default: ""
    t.text "description", default: ""
    t.decimal "price", default: "0.0"
    t.boolean "is_best_offer", default: false
    t.string "avatar", default: ""
    t.string "images", default: [], array: true
    t.string "videos", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "category_id"
    t.index ["category_id"], name: "index_products_on_category_id"
  end

  create_table "quiz_questions", force: :cascade do |t|
    t.bigint "quiz_id", null: false
    t.text "content"
    t.string "avatar", default: ""
    t.string "images", default: [], array: true
    t.string "videos", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["quiz_id"], name: "index_quiz_questions_on_quiz_id"
  end

  create_table "quizzes", force: :cascade do |t|
    t.bigint "cource_id", null: false
    t.bigint "chapter_id", null: false
    t.string "name"
    t.text "description"
    t.string "avatar", default: ""
    t.string "images", default: [], array: true
    t.string "videos", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "passing_score", default: 70
    t.integer "num_questions_to_show", default: 10
    t.index ["chapter_id"], name: "index_quizzes_on_chapter_id"
    t.index ["cource_id"], name: "index_quizzes_on_cource_id"
  end

  create_table "repairs", force: :cascade do |t|
    t.integer "generation_id"
    t.integer "phone_id"
    t.integer "defect_id"
    t.integer "mod_id"
    t.string "title"
    t.string "description"
    t.string "overview"
    t.string "avatar"
    t.string "spare_parts", default: [], array: true
    t.string "images", default: [], array: true
    t.string "videos", default: [], array: true
    t.string "price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "spare_parts", force: :cascade do |t|
    t.integer "generation_id"
    t.integer "phone_id"
    t.integer "mod_id"
    t.string "name"
    t.string "manufacturer"
    t.string "avatar"
    t.string "images", default: [], array: true
    t.string "videos", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "universities", force: :cascade do |t|
    t.string "title"
    t.string "avatar", default: ""
    t.string "images", default: [], array: true
    t.string "videos", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "username", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at", precision: nil
    t.datetime "remember_created_at", precision: nil
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at", precision: nil
    t.datetime "last_sign_in_at", precision: nil
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at", precision: nil
    t.datetime "confirmation_sent_at", precision: nil
    t.string "unconfirmed_email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "avatar"
    t.boolean "admin", default: false
    t.boolean "author", default: true
    t.boolean "repairman", default: false
    t.boolean "teacher", default: false
    t.boolean "student", default: false
    t.boolean "customer", default: true
    t.string "first_name"
    t.string "last_name"
    t.datetime "borned", precision: nil
    t.datetime "birthday", precision: nil
    t.text "images", default: [], array: true
    t.text "videos", default: [], array: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "answers", "quiz_questions"
  add_foreign_key "answers", "users"
  add_foreign_key "chapters", "cources"
  add_foreign_key "cources", "categories"
  add_foreign_key "cources", "generations"
  add_foreign_key "cources", "models"
  add_foreign_key "cources", "universities"
  add_foreign_key "order_items", "orders"
  add_foreign_key "order_items", "products"
  add_foreign_key "owned_gadgets", "users"
  add_foreign_key "phones", "generations"
  add_foreign_key "posts", "users"
  add_foreign_key "products", "categories"
  add_foreign_key "quiz_questions", "quizzes"
  add_foreign_key "quizzes", "chapters"
  add_foreign_key "quizzes", "cources"
end
