class Guest

  if(ENV['DATABASE_URL'])
    uri = URI.parse(ENV['DATABASE_URL'])
    DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
  elsif(ENV['DATABASE_PASSWORD'])
    DB = PG.connect({:host => "localhost", :port => 5432, :dbname => 'wedding_website_development', :password => ENV['DATABASE_PASSWORD'], :user => "postgres"})
  else
    DB = PG.connect({:host => "localhost", :port => 5432, :dbname => 'wedding_website_development'})
  end


    def self.all
        results = DB.exec("SELECT * FROM guests;")
        return results.map do |result|
            {
                "id" => result["id"].to_i,
                "first_name" => result["first_name"],
                "last_name" => result["last_name"],
                "address" => result["address"],
                "city" => result["city"],
                "state" => result["state"],
                "zip" => result["zip"].to_i,
                "attending" => result["attending"]
            }
        end
    end

    def self.find(id)
        results = DB.exec("SELECT * FROM guests WHERE id=#{id};")
        return {
          "id" => results.first["id"].to_i,
          "first_name" => results.first["first_name"],
          "last_name" => results.first["last_name"],
          "address" => results.first["address"],
          "city" => results.first["city"],
          "state" => results.first["state"],
          "zip" => results.first["zip"].to_i,
          "attending" => results.first["attending"]
        }
    end

    def self.create(opts)
        results = DB.exec(
            <<-SQL
                INSERT INTO guests (first_name, last_name, address, city, state, zip)
                VALUES ( '#{opts["first_name"]}', '#{opts["last_name"]}', '#{opts["address"]}', '#{opts["city"]}', '#{opts["state"]}', #{opts["zip"]}, '#{opts["attending"]}' )
                RETURNING id, first_name, last_name, address, city, state, zip, attending;
            SQL
        )
        return {
          "id" => results.first["id"].to_i,
          "first_name" => results.first["first_name"],
          "last_name" => results.first["last_name"],
          "address" => results.first["address"],
          "city" => results.first["city"],
          "state" => results.first["state"],
          "zip" => results.first["zip"].to_i,
          "attending" => results.first["attending"]
        }
    end

    def self.delete(id)
        results = DB.exec("DELETE FROM guests WHERE id=#{id};")
        return { "deleted" => true }
    end

    def self.update(id, opts)
        results = DB.exec(
            <<-SQL
                UPDATE guests
                SET first_name='#{opts["first_name"]}', last_name='#{opts["last_name"]}', address='#{opts["address"]}',  city='#{opts["city"]}', state='#{opts["state"]}', zip=#{opts["zip"]}, attending=#{opts["attending"]}
                WHERE id=#{id}
                RETURNING id, first_name, last_name, address, city, state, zip, attending;
            SQL
        )
        return {
          "id" => results.first["id"].to_i,
          "first_name" => results.first["first_name"],
          "last_name" => results.first["last_name"],
          "address" => results.first["address"],
          "city" => results.first["city"],
          "state" => results.first["state"],
          "zip" => results.first["zip"].to_i,
          "attending" => results.first["attending"]
        }
    end

end
