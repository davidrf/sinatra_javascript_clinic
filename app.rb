require 'sinatra'
require 'pg'

configure :development, :test do
  require 'pry'
end

require_relative 'models/news_article'

Dir[File.join(File.dirname(__FILE__), 'lib', '**', '*.rb')].each do |file|
  require file
  also_reload file
end

get '/' do
  redirect '/news'
end

get '/news' do
  @news_articles = NewsArticle.all
  @news_article = NewsArticle.new
  erb :index
end

post '/news' do
  @news_article = NewsArticle.new(params[:news_article])

  if @news_article.save
    redirect '/news'
  else
    @news_articles = NewsArticle.all
    erb :index
  end
end
