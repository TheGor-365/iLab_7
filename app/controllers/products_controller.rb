class ProductsController < ApplicationController

  before_action :authenticate_user!
  before_action :set_product, only: %i[ show edit update destroy ]

  def index
    @products = Product.all
  end

  def show
    # 1. Находим продукт по ID из запроса
    @product = Product.find(params[:id])

    # 2. Говорим контроллеру, как отвечать на разные типы запросов
    respond_to do |format|
      format.html # Отвечает на обычный запрос, рендеря show.html.erb (у нас его может и не быть)
      format.js   # Отвечает на наш AJAX-запрос, рендеря show.js.erb (это то, что нам нужно!)
    end
  end
  def edit; end

  def new
    @product = Product.new
  end

  def create
    @product = Product.new(product_params)
    @product.category = Category.find(params[:product][:category_id])

    respond_to do |format|
      if @product.save
        format.html { redirect_to @product, notice: "Product was successfully created." }
      else
        format.html { render :new, status: :unprocessable_entity }
      end
    end
  end

  def update
    @product.category = Category.find(params[:product][:category_id])

    respond_to do |format|
      if @product.update(product_params)
        format.html { redirect_to @product, notice: "Product was successfully updated." }
      else
        format.html { render :edit, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @product.destroy
    respond_to do |format|
      format.html { redirect_to products_url, notice: "Product was successfully destroyed." }
    end
  end

  private

  def set_product
    @product = Product.find(params[:id])
  end

  def product_params
    params.require(:product).permit(
      :category_id,
      :name,
      :description,
      :price,
      :avatar,
      :is_best_offer,
      :images_cache,
      :avatar_cache,
      { images: [] },
      { videos: [] }
    )
  end
end
