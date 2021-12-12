class AddImgUrl < ActiveRecord::Migration[6.1]
  def change
    add_column(:products, :img_url, :text)
  end
end
