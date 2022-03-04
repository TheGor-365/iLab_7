class GenerationsController < ApplicationController

  before_action :authenticate_user!
  before_action :set_generation, only: %i[ show edit update destroy ]

  def index
    @generations = Generation.all
  end

  def show; end
  def edit; end

  def new
    @generation = Generation.new
  end

  def create
    @generation = Generation.new(generation_params)

    respond_to do |format|
      if @generation.save
        format.html { redirect_to @generation, notice: "Generation was successfully created." }
      else
        format.html { render :new, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @generation.update(generation_params)
        format.html { redirect_to @generation, notice: "Generation was successfully updated." }
      else
        format.html { render :edit, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @generation.destroy
    respond_to do |format|
      format.html { redirect_to generations_url, notice: "Generation was successfully destroyed." }
    end
  end

  private

  def set_generation
    @generation = Generation.find(params[:id])
  end

  def generation_params
    params.require(:generation).permit(
      :phone_id,
      :title,
      :production_period,
      :features,
      :vulnerability,
      :images_cache,
      :avatar,
      :avatar_cache,
      { images: [] },
      { videos: [] }
    )
  end
end
