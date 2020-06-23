require 'faker'


Discussion.destroy_all
Invitation.destroy_all
User.destroy_all 
Post.destroy_all
Comment.destroy_all
Changedmind.destroy_all
Mademethink.destroy_all
Follow.destroy_all


3.times do 
User.create({first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: "testpassword", image: Faker::Avatar.image, verified: false, one_line_credential: "I am a regular person.", biographical_description: "I'm just here to learn and to share."})
end
    

Discussion.create({title: "Race", description: "To discuss race", public_status: "public", image: "http://tiny.cc/u7b9pz" })
Discussion.create({title: "Sports", description: "To discuss sports", public_status: "public", image: "http://tiny.cc/5hc9pz" })
Discussion.create({title: "Religion", description: "To discuss religion", public_status: "public", image: "http://tiny.cc/wmc9pz" })
Discussion.create({title: "Politics", description: "To discuss politics", public_status: "public", image: "http://tiny.cc/jhlzqz" })
Discussion.create({title: "Anime", description: "To discuss anime", public_status: "public", image: "http://tiny.cc/tmlzqz" })
Discussion.create({title: "Science", description: "To discuss science", public_status: "public", image: "http://tiny.cc/olrzqz" })
Discussion.create({title: "Education", description: "To discuss education", public_status: "public", image: "http://tiny.cc/zprzqz" })
Discussion.create({title: "Philosophy", description: "To discuss philosophy", public_status: "public", image: "http://tiny.cc/3urzqz" })





# Post.create({original_post: "Is it wrong to say 'All Lives Matter'?", image: "http://tiny.cc/kxc9pz", user_id: User.all.sample().id, discussion_id: Discussion.all.sample().id})
# Post.create({original_post: "Was the Protestant Reformation necessary?", image: "http://tiny.cc/rylzqz", user_id: User.all.sample().id, discussion_id: Discussion.all.sample().id})
# Post.create({original_post: "Is Michael Jordan the greatest NBA player of all time??", image: "http://tiny.cc/48lzqz", user_id: User.all.sample().id, discussion_id: Discussion.all.sample().id})
# Post.create({original_post: "Are the 2016 Warriors the greatest team of all time?", image: "http://tiny.cc/hemzqz", user_id: User.all.sample().id, discussion_id: Discussion.all.sample().id})
# Post.create({original_post: "Should we skip the 2020 election?", image: "http://tiny.cc/ajmzqz", user_id: User.all.sample().id, discussion_id: Discussion.all.sample().id})
# Post.create({original_post: "Is Michael Jordan the greatest of all time?", image: "http://tiny.cc/z4d9pz", user_id: User.all.sample().id, discussion_id: Discussion.all.sample().id})
# Post.create({original_post: "Are these protest helping or hurting the cause for reform in this country?", image: "http://tiny.cc/kxc9pz", user_id: User.all.sample().id, discussion_id: Discussion.all.sample().id})
# Post.create({original_post: "Was the Protestant Reformation necessary?", image: "http://tiny.cc/z4d9pz", user_id: User.all.sample().id, discussion_id: Discussion.all.sample().id})
# Post.create({original_post: "Is Michael Jordan the greatest of all time?", image: "http://tiny.cc/z4d9pz", user_id: User.all.sample().id, discussion_id: Discussion.all.sample().id})
# Post.create({original_post: "Are these protest helping or hurting the cause for reform in this country?", image: "http://tiny.cc/kxc9pz", user_id: User.all.sample().id, discussion_id: Discussion.all.sample().id})
# Post.create({original_post: "Was the Protestant Reformation necessary?", image: "http://tiny.cc/z4d9pz", user_id: User.all.sample().id, discussion_id: Discussion.all.sample().id})
# Post.create({original_post: "Is Michael Jordan the greatest of all time?", image: "http://tiny.cc/z4d9pz", user_id: User.all.sample().id, discussion_id: Discussion.all.sample().id})


# Invitation.create(invitation: "Yes")


