###
# Site Configurations
###

# Pages with no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# Proxies
data.projects.each do |project|
  proxy "/projects/#{ I18n.transliterate(project.name).downcase.strip.gsub(' ', '-') }/index.html", "/projects/detail.html", :locals => { :project => project }
end

# Relative Links & Directory Indexing
activate :directory_indexes
set :relative_links, true

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end
