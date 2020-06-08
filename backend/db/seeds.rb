require 'faker'


Discussion.destroy_all
Invitation.destroy_all
User.destroy_all 
Post.destroy_all
Comment.destroy_all


10.times do 
User.create({first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: "testpassword", image: "http://tiny.cc/ywh9pz", verified: false, one_line_credential: "I am a regular person.", biographical_description: "I'm just here to learn and to share."})
end
    
3.times do 
User.create({first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: "testpassword", image: "http://tiny.cc/ywh9pz", verified: true, one_line_credential: "I am an expert.", biographical_description: "I'm just here to learn and to share."})
end

Discussion.create({title: "Race", description: "To discuss race", public_status: "public", image: "http://tiny.cc/u7b9pz" })
Discussion.create({title: "Sports", description: "To discuss sports", public_status: "public", image: "http://tiny.cc/5hc9pz" })
Discussion.create({title: "Religion", description: "To discuss religion", public_status: "public", image: "http://tiny.cc/wmc9pz" })


Post.create({original_post: "Are these protest helping or hurting the cause for reform in this country?", image: "http://tiny.cc/kxc9pz", user_id: User.all.sample().id, discussion_id: Discussion.all.sample().id})
Post.create({original_post: "Was the Protestant Reformation necessary?", image: "http://tiny.cc/z4d9pz", user_id: User.all.sample().id, discussion_id: Discussion.all.sample().id})


# Invitation.create(invitation: "Yes")


