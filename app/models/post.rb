class Post < ApplicationRecord

   validates :body, presence: true
   validates :title, presence: true
      
   has_one_attached :media


   belongs_to :user,
      primary_key: :id,
      foreign_key: :author_id,
      class_name: :User

end
