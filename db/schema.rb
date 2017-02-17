# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170217152430) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "menu_reviews", force: :cascade do |t|
    t.integer  "score",      null: false
    t.text     "body",       null: false
    t.integer  "menu_id",    null: false
    t.integer  "owner_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["menu_id"], name: "index_menu_reviews_on_menu_id", using: :btree
  end

  create_table "menus", force: :cascade do |t|
    t.string   "title",                      null: false
    t.integer  "price",                      null: false
    t.text     "description",                null: false
    t.string   "address",                    null: false
    t.float    "longitude",                  null: false
    t.float    "latitude",                   null: false
    t.integer  "owner_id",                   null: false
    t.integer  "average_rating", default: 0
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.index ["owner_id"], name: "index_menus_on_owner_id", using: :btree
    t.index ["price"], name: "index_menus_on_price", using: :btree
  end

  create_table "reservations", force: :cascade do |t|
    t.date     "date",       null: false
    t.boolean  "confirmed",  null: false
    t.integer  "owner_id",   null: false
    t.integer  "menu_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id"], name: "index_reservations_on_owner_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                             null: false
    t.string   "password_digest",                   null: false
    t.string   "session_token",                     null: false
    t.string   "f_name",            default: "",    null: false
    t.string   "l_name",            default: "",    null: false
    t.string   "profile_image_url", default: "",    null: false
    t.text     "description",       default: "",    null: false
    t.boolean  "host",              default: false, null: false
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
  end

end
