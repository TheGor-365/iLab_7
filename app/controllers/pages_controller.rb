class PagesController < ApplicationController

  before_action :set_product
  before_action :set_order
  before_action :set_delivery_price

  def home
  end

  def terms
  end

  def contacts
  end

  def store
    @products = Product.all
    @categories = Category.all

    # GOOD: Preload products with their categories and group them.
    # This makes one efficient database query and prepares the data for the view.
    @products_by_category = Product.includes(:category).all.group_by(&:category)

    @order_item = current_order.order_items.new
    @order_items = current_order.order_items
  end

  private

  def set_product
    @product = Product.find_by(params[:id])
  end

  def set_order
    @order = current_order
  end

  def set_delivery_price
    @delivery_price = 30
  end
end
