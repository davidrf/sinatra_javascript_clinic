module Database
  def db_connection
    begin
      connection = PG.connect(dbname: "sinatra_javascript")
      yield connection
    ensure
      connection.close
    end
  end
end

class NewsArticle
  extend Database
  attr_reader :title, :body
  def initialize(input = {})
    @title = input["title"]
    @body = input["body"]
  end

  def self.all
    results = db_connection do |conn|
      conn.exec("SELECT * FROM news_articles")
    end

    news_articles = []

    results.each do |result|
      news_articles << NewsArticle.new(result)
    end

    news_articles
  end

  def save
    if valid?
      sql_query = "INSERT INTO news_articles (title, body) VALUES ($1, $2)"
      data = [title, body]
      self.class.db_connection do |conn|
        conn.exec_params(sql_query, data)
      end
      true
    else
      false
    end
  end

  def valid?
    title.length > 0 && body.length > 0
  end
end
