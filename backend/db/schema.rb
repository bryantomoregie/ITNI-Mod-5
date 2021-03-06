# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_06_16_125453) do

  create_table "changedminds", force: :cascade do |t|
    t.integer "user_id"
    t.integer "comment_id"
  end

  create_table "comments", force: :cascade do |t|
    t.string "text"
    t.string "stance"
    t.integer "changed_mind"
    t.integer "made_me_think"
    t.integer "flag"
    t.integer "user_id"
    t.integer "post_id"
  end

  create_table "discussions", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.string "public_status"
    t.string "image"
  end

  create_table "follows", force: :cascade do |t|
    t.integer "user_id"
    t.integer "post_id"
  end

  create_table "invitations", force: :cascade do |t|
    t.integer "user_id"
    t.integer "post_id"
  end

  create_table "mademethinks", force: :cascade do |t|
    t.integer "user_id"
    t.integer "comment_id"
  end

  create_table "posts", force: :cascade do |t|
    t.string "original_post"
    t.string "image"
    t.integer "user_id"
    t.integer "discussion_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.string "image"
    t.boolean "verified", default: false
    t.string "one_line_credential"
    t.string "biographical_description"
  end

end
